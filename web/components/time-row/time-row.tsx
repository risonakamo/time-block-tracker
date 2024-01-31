import "./time-row.less";

interface TimeRowProps
{
  startTime:string
  endTime?:string
  duration?:string
}

export function TimeRow(props:TimeRowProps):JSX.Element
{
  return <div className="time-row">
    <div className="row-block">
      <div className="times">
        <div className="time-entry">{props.startTime}</div>
        <div className="time-entry">{props.endTime || "Ongoing"}</div>
      </div>
      <div className="duration">
        <h2>{props.duration || "--:--"}</h2>
      </div>
    </div>
    <div className="close">
      x
    </div>
  </div>;
}