import {clsx} from "clsx";
import _ from "lodash";

import {TimeRow} from "components/time-row/time-row";

import "./time-block.less";

interface TimeBlockProps
{
  title:string
  totalTime:string
  running:boolean
  timerows:TimeRowData[]
}

export function TimeBlock(props:TimeBlockProps):JSX.Element
{
  /** render time rows */
  function r_timerows():JSX.Element[]
  {
    return _.map(props.timerows,(timerow:TimeRowData,i:number):JSX.Element=>{
      return <TimeRow key={i} startTime={timerow.startTime} endTime={timerow.endTime}
        duration={timerow.duration}/>;
    });
  }

  var buttonText:string="start";

  if (props.running)
  {
    buttonText="stop";
  }

  const buttonClx:string=clsx(
    "timer-button",
    {
      "running":props.running
    }
  );

  return <div className="time-block">
    <div className="title">
      <textarea>{props.title}</textarea>
    </div>

    <div className="time-display">
      <div className="timer">
        <span>total time</span>
        <h2>{props.totalTime}</h2>
      </div>
      <div className="button-zone">
        <div className={buttonClx}>{buttonText}</div>
      </div>
    </div>

    <div className="time-rows">
      {r_timerows()}
    </div>
  </div>;
}