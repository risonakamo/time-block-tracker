import {createRoot} from "react-dom/client";
import {DateTime} from "luxon";
import {atom,useAtom} from "jotai";
import {atomWithImmer} from "jotai-immer";
import _ from "lodash";
import {Plus} from "@phosphor-icons/react";
import { useEffect } from "react";
import {QueryClient,QueryClientProvider,useQuery} from "@tanstack/react-query";
import {atomWithQuery} from "jotai-tanstack-query";

import {TimeBlock} from "components/time-block/time-block";

import { getTimeblocks } from "apis/time-block-api";

import "./time-blocks-index.less";


const qyClient:QueryClient=new QueryClient();

const timeblocksDataQyAtom=atomWithQuery<TimeBlocks>(()=>{
  return {
    queryKey:["timeblocks"],
    initialData:{},
  };
});

function TimeBlocksIndex():JSX.Element
{
  const [timeblocksQy]=useAtom(timeblocksDataQyAtom);
  console.log(timeblocksQy.data);


  useEffect(()=>{
    (async ()=>{
      console.log("?");
      console.log("what",await getTimeblocks());
    })();
  },[]);



  // --- render ---
  /** render the time blocks */
  function r_timeblocks():JSX.Element[]
  {
    return _.map(_.values(timeblocksQy.data),(timedata:TimeBlockData,i:number):JSX.Element=>{
      // all time blocks need their own handlers
      function h_titleChange(newtitle:string):void
      {

      }

      function h_timerStartChange(running:boolean):void
      {

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
        <Plus className="add-icon"/>
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