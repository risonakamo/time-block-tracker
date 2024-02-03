import {clsx} from "clsx";
import {ClockCountdown} from "@phosphor-icons/react";

import "./time-row.less";

interface TimeRowProps
{
  startTime:string
  endTime?:string
  duration?:string

  running:boolean
}

export function TimeRow(props:TimeRowProps):JSX.Element
{
  // conditional classes
  const rowBlockCx:string=clsx("row-block",{
    running:props.running
  });

  const secondTimeEntryCx:string=clsx("time-entry",{
    running:props.running
  });


  // render duration field as text or icon based on running state
  var durationItem:JSX.Element=<h2>{props.duration || "--:--"}</h2>;
  if (props.running)
  {
    durationItem=<ClockCountdown className="clock-icon"/>;
  }

  return <div className="time-row">
    <div className={rowBlockCx}>
      <div className="times">
        <div className="time-entry">{props.startTime}</div>
        <div className={secondTimeEntryCx}>{props.endTime || "Ongoing"}</div>
      </div>
      <div className="duration">
        {durationItem}
      </div>
    </div>
    <div className="close">
      x
    </div>
  </div>;
}