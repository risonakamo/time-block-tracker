import {createRoot} from "react-dom/client";
import {DateTime} from "luxon";
import {atom,useAtom} from "jotai";
import {atomWithImmer} from "jotai-immer";
import _ from "lodash";
import {Plus} from "@phosphor-icons/react";
import { useEffect } from "react";

import {TimeBlock} from "components/time-block/time-block";

import { getTimeblocks } from "apis/time-block-api";

import "./time-blocks-index.less";

const TIME_DATA:TimeBlockData[]=[
  {
    title:"1/sk",
    id:"asdasd",
    timerows:[
      {
        id:"asdasd",
        startTime:DateTime.fromFormat("01/20 21:58","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/20 22:10","MM/dd HH:mm"),
        duration:11
      },
      {
        id:"asdasd",
        startTime:DateTime.fromFormat("01/20 22:20","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/20 22:22","MM/dd HH:mm"),
        duration:2
      },
      {
        id:"asdasd",
        startTime:DateTime.fromFormat("01/20 22:34","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/20 22:38","MM/dd HH:mm"),
        duration:3
      }
    ],
    totalTime:35,
    running:false
  },
  {
    title:"1/sk2",
    id:"asdasd",
    timerows:[
      {
        id:"asdasd",
        startTime:DateTime.fromFormat("01/27 19:36","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/27 20:00","MM/dd HH:mm"),
        duration:24
      },
      {
        id:"asdasd",
        startTime:DateTime.fromFormat("01/27 20:04","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/27 20:18","MM/dd HH:mm"),
        duration:14
      },
      {
        id:"asdasd",
        startTime:DateTime.fromFormat("01/27 20:36","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/27 20:48","MM/dd HH:mm"),
        duration:11
      }
    ],
    totalTime:56,
    running:false
  }
];

const timeDataAtom=atomWithImmer<TimeBlockData[]>(TIME_DATA);

function TimeBlocksIndex():JSX.Element
{
  const [timeDatas,setTimeDatas]=useAtom<TimeBlockData[]>(timeDataAtom);




  useEffect(()=>{
    (async ()=>{
      console.log(await getTimeblocks());
    })();
  },[]);


  // --- handlers ---




  // --- render ---
  /** render the time blocks */
  function r_timeblocks():JSX.Element[]
  {
    return _.map(timeDatas,(timedata:TimeBlockData,i:number):JSX.Element=>{
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
  createRoot(document.querySelector(".main")!).render(<TimeBlocksIndex/>);
}

window.onload=main;