import {TimeRow} from "components/time-row/time-row";

import "./time-block.less";

interface TimeBlockProps
{

}

export function TimeBlock(props:TimeBlockProps):JSX.Element
{
  return <div className="time-block">
    <div className="title">
      <h1>1/sk</h1>
    </div>

    <div className="time-display">
      <div className="timer">
        <span>total time</span>
        <h2>00:12</h2>
      </div>
      <div className="button-zone">
        <div className="timer-button">start</div>
      </div>
    </div>

    <div className="time-rows">
      <TimeRow startTime="01/24 01:22" endTime="01/24 01:35" duration="00:22"/>
      <TimeRow startTime="01/24 01:59" endTime="01/24 02:45" duration="00:56"/>
    </div>
  </div>;
}