import {createRoot} from "react-dom/client";
import {DateTime} from "luxon";

import "./time-blocks-index.less";

const TIME_DATA:TimeBlockData[]=[
  {
    title:"1/sk",
    timerows:[
      {
        startTime:DateTime.fromFormat("01/20 21:58","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/20 22:10","MM/dd HH:mm"),
        duration:11
      },
      {
        startTime:DateTime.fromFormat("01/20 22:20","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/20 22:22","MM/dd HH:mm"),
        duration:2
      },
      {
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
    timerows:[
      {
        startTime:DateTime.fromFormat("01/27 19:36","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/27 20:00","MM/dd HH:mm"),
        duration:24
      },
      {
        startTime:DateTime.fromFormat("01/27 20:04","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/27 20:18","MM/dd HH:mm"),
        duration:14
      },
      {
        startTime:DateTime.fromFormat("01/27 20:36","MM/dd HH:mm"),
        endTime:DateTime.fromFormat("01/27 20:48","MM/dd HH:mm"),
        duration:11
      }
    ],
    totalTime:56,
    running:false
  }
];

function TimeBlocksIndex():JSX.Element
{
  return <>
    <div className="menu-bar">

    </div>
    <div className="time-blocks">

    </div>
  </>;
}

function main()
{
  createRoot(document.querySelector(".main")!).render(<TimeBlocksIndex/>);
}

window.onload=main;