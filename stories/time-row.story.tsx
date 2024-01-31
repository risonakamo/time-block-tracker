import type {Meta,StoryObj} from "@storybook/react";

import {TimeRow} from "components/time-row/time-row";

type Story=StoryObj<typeof TimeRow>;

const meta:Meta<typeof TimeRow>={
  title:"time row",
  component:TimeRow,
  args:{
    startTime:"01/24 01:22",
    endTime:"01/24 01:35",
    duration:"00:22"
  }
};
export default meta;

export const normal:Story={

};

export const noEndTime:Story={
  args:{
    startTime:"01/24 01:59",
    endTime:undefined,
    duration:undefined,
  }
};