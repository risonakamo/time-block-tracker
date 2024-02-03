import {clsx} from "clsx";
import _ from "lodash";
import {ChangeEvent} from "react";

import {TimeRow} from "components/time-row/time-row";

import "./time-block.less";

interface TimeBlockProps
{
  title:string
  totalTime:string
  running:boolean
  timerows:TimeRowData[]

  // returns new state of timer
  onTimerButtonClick(running:boolean):void

  // user changing title. provides new title
  onTitleChange(title:string):void
}

export function TimeBlock(props:TimeBlockProps):JSX.Element
{
  /** clicked timer button. returns opposite of current timer running state */
  function h_timerButtonClick():void
  {
    props.onTimerButtonClick(!props.running);
  }

  /** user trying to change title */
  function h_titleChange(e:ChangeEvent<HTMLTextAreaElement>):void
  {
    props.onTitleChange(e.target.value);
  }




  // --- render ---
  /** render time rows */
  function r_timerows():JSX.Element[]|JSX.Element
  {
    if (!props.timerows.length)
    {
      return <h2>no time rows</h2>;
    }

    return _.map(props.timerows,(timerow:TimeRowData,i:number):JSX.Element=>{
      // the first time row is to be marked to running if the time block is marked as
      // running
      const timerowRunning:boolean=i==0 && props.running;

      return <TimeRow key={i} startTime={timerow.startTime} endTime={timerow.endTime}
        duration={timerow.duration} running={timerowRunning}/>;
    });
  }

  var buttonText:string="start";

  if (props.running)
  {
    buttonText="stop";
  }

  const buttonClx:string=clsx("timer-button",{
    "running":props.running
  });

  const topcx:string=clsx("time-block",{
    running:props.running
  });

  const timerSpanCx:string=clsx({
    running:props.running
  });

  const timeRowsCx:string=clsx("time-rows",{
    "no-rows":!props.timerows.length
  });

  return <div className={topcx}>
    <div className="title">
      <textarea value={props.title} onChange={h_titleChange}></textarea>
    </div>

    <div className="time-display">
      <div className="timer">
        <span>total time</span>
        <h2 className={timerSpanCx}>{props.totalTime}</h2>
      </div>
      <div className="button-zone">
        <div className={buttonClx} onClick={h_timerButtonClick}>
          {buttonText}
        </div>
      </div>
    </div>

    <div className={timeRowsCx}>
      {r_timerows()}
    </div>
  </div>;
}