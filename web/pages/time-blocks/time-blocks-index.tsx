import {createRoot} from "react-dom/client";
import {DateTime} from "luxon";
import {atom,useAtom} from "jotai";
import {atomWithImmer} from "jotai-immer";
import _ from "lodash";
import {Plus} from "@phosphor-icons/react";
import { useEffect } from "react";
import {QueryClient,QueryClientProvider,useQuery} from "@tanstack/react-query";
import {atomWithQuery} from "jotai-tanstack-query";
import { useMutation } from "@tanstack/react-query";

import {TimeBlock} from "components/time-block/time-block";

import { getTimeblocks,newTimeblock,toggleTimeblock } from "apis/time-block-api";
import { apiTimeblockConvert } from "lib/api_convert";

import "./time-blocks-index.less";


const qyClient:QueryClient=new QueryClient();

const timeblocksDataQyAtom=atomWithQuery<TimeBlocks>(()=>{
  return {
    queryKey:["timeblocks"],
    initialData:{},

    async queryFn():Promise<TimeBlocks>
    {
      return apiTimeblockConvert(await getTimeblocks());
    }
  };
});

function TimeBlocksIndex():JSX.Element
{
  const [timeblocksQy]=useAtom(timeblocksDataQyAtom);



  // --- mut funcs ---
  const createTimeblockMqy=useMutation({
    mutationKey:["create-timeblock"],

    async mutationFn():Promise<string>
    {
      return newTimeblock();
    },

    onSuccess(data:string):void
    {
      console.log("create succeeded with msg:",data);
      timeblocksQy.refetch();
    }
  });

  const toggleTimeblockMqy=useMutation({
    mutationKey:["start-timeblock"],

    async mutationFn(id:string):Promise<string>
    {
      return toggleTimeblock(id);
    },

    onSuccess():void
    {
      timeblocksQy.refetch();
    }
  });



  // --- handlers ---
  /** add timeblock button. call timeblock create mut */
  function h_addClick():void
  {
    createTimeblockMqy.mutate();
  }



  // --- render ---
  /** render the time blocks */
  function r_timeblocks():JSX.Element[]
  {
    return _.map(_.values(timeblocksQy.data),(timedata:TimeBlockData,i:number):JSX.Element=>{
      // all time blocks need their own handlers
      function h_titleChange(newtitle:string):void
      {

      }

      /** clicked timer start button. trigger timeblock toggle */
      function h_timerStartChange(running:boolean):void
      {
        toggleTimeblockMqy.mutate(timedata.id);
      }

      function h_timeRowDelete(timerow:TimeRowData):void
      {

      }

      return <TimeBlock timedata={timedata} key={i} onTimerButtonClick={h_timerStartChange}
        onTitleChange={h_titleChange} onTimeRowDelete={h_timeRowDelete}/>
    });
  }

  return <>
    <div className="menu-bar">
      <div className="add-button">
        <Plus className="add-icon" onClick={h_addClick}/>
      </div>
    </div>
    <div className="time-blocks">
      {r_timeblocks()}
    </div>
  </>;
}

function main()
{
  createRoot(document.querySelector(".main")!).render(
    <QueryClientProvider client={qyClient}>
      <TimeBlocksIndex/>
    </QueryClientProvider>
  );
}

window.onload=main;