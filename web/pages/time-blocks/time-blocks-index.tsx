import {createRoot} from "react-dom/client";
import _ from "lodash";
import {Plus} from "@phosphor-icons/react";
import {QueryClient,QueryClientProvider,useQuery,useQueryClient,
  useMutation} from "@tanstack/react-query";
import { Provider } from "jotai";

import {TimeBlock} from "components/time-block/time-block";

import { getTimeblocks,newTimeblock,toggleTimeblock,
  setTimeblockTitle } from "apis/time-block-api";
import { apiTimeblockConvert } from "lib/api_convert";

import "./time-blocks-index.less";


const qyClient:QueryClient=new QueryClient();

function TimeBlocksIndex():JSX.Element
{
  // --- querys ---
  const timeblocksQy=useQuery({
    queryKey:["timeblocks"],
    initialData:{},

    async queryFn({signal}):Promise<TimeBlocks>
    {
      return apiTimeblockConvert(await getTimeblocks(signal));
    }
  });


  // --- mut funcs ---
  // request to create a timeblock. triggers refresh of timeblock data
  const createTimeblockMqy=useMutation({
    mutationKey:["create-timeblock"],

    async mutationFn():Promise<string>
    {
      return newTimeblock();
    },

    onSuccess():void
    {
      timeblocksQy.refetch();
    }
  });

  // request to toggle a timeblock. triggers refresh of timeblock data.
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

  interface SetTitleMqyArgs
  {
    blockId:string
    newTitle:string
  }

  // request to change title of a block. pre-emptively tries to modify the timeblocks
  // data to reflect the change.
  const setTitleMqy=useMutation({
    mutationKey:["set-title"],

    async mutationFn(args:SetTitleMqyArgs):Promise<string>
    {
      await qyClient.cancelQueries({
        queryKey:["timeblocks"]
      });

      qyClient.setQueryData<TimeBlocks>(["timeblocks"],(prev:TimeBlocks|undefined):TimeBlocks=>{
        var clone:TimeBlocks={};

        if (prev)
        {
          clone=_.cloneDeep(prev);
        }

        clone[args.blockId].title=args.newTitle;

        return clone;
      });

      return setTimeblockTitle(args.blockId,args.newTitle);
    },

    onSettled():void
    {

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
      /** todo: this still seems bad. request to change title on title change */
      function h_titleChange(newtitle:string):void
      {
        setTitleMqy.mutate({
          blockId:timedata.id,
          newTitle:newtitle
        });
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
      <Provider>
        <TimeBlocksIndex/>
      </Provider>
    </QueryClientProvider>
  );
}

window.onload=main;