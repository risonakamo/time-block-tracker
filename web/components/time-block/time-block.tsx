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
      <div className="time-row">
        <div className="times">
          <div className="time-entry">01/24 01:22</div>
          <div className="time-entry">01/24 01:35</div>
        </div>
        <div className="duration">
          <h2>00:22</h2>
        </div>
      </div>
    </div>
  </div>;
}