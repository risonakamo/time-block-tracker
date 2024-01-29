import {createRoot} from "react-dom/client";

import "./test-index.less";

function IndexMain():JSX.Element
{
  return <>
    hmm
  </>;
}

function main()
{
  createRoot(document.querySelector(".main")!).render(<IndexMain/>);
}

window.onload=main;