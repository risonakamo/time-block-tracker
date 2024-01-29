import {createRoot} from "react-dom/client";

import "./component-test-index.less";

function ComponentTestIndex():JSX.Element
{
  return <>
    hmm
  </>;
}

function main()
{
  createRoot(document.querySelector("main")!).render(<ComponentTestIndex/>);
}

window.onload=main;