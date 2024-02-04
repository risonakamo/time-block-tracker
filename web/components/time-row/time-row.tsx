import {clsx} from "clsx";
import {ClockCountdown} from "@phosphor-icons/react";

import { formatTime,formatDuration } from "lib/time";

import "./time-row.less";

interface TimeRowProps
{
  timerowData:TimeRowData

  running:boolean

  // user pressed delete button. provides timerow data
  onDelete(data:TimeRowData):void
}

export function TimeRow(props:TimeRowProps):JSX.Element
{
  /** clicked delete button. trigger delete event */
  function h_deleteClick():void
  {
    props.onDelete(props.timerowData);
  }



  // --- render ---
  // render duration field as text or icon based on running state
  var durationItem:JSX.Element=<h2>--:--</h2>;

  if (props.running)
  {
    durationItem=<ClockCountdown className="clock-icon"/>;
  }

  else if (props.timerowData.duration)
  {
    durationItem=<h2>{formatDuration(props.timerowData.duration)}</h2>;
  }

  const startTime:string=formatTime(props.timerowData.startTime);

  var endTime:string="Ongoing";
  if (props.timerowData.endTime)
  {
    endTime=formatTime(props.timerowData.endTime);
  }

  // conditional classes
  const rowBlockCx:string=clsx("row-block",{
    running:props.running
  });

  const secondTimeEntryCx:string=clsx("time-entry",{
    running:props.running
  });

  return <div className="time-row">
    <div className={rowBlockCx}>
      <div className="times">
        <div className="time-entry">{startTime}</div>
        <div className={secondTimeEntryCx}>{endTime}</div>
      </div>
      <div className="duration">
        {durationItem}
      </div>
    </div>
    <div className="close" onClick={h_deleteClick}>
      x
    </div>
  </div>;
}

