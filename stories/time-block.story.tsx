import type {Meta,StoryObj} from "@storybook/react";

import {TimeBlock} from "components/time-block/time-block";

type Story=StoryObj<typeof TimeBlock>;

const meta:Meta<typeof TimeBlock>={
  title:"time block",
  component:TimeBlock,
  args:{
    title:"1/sk",
    running:false,
    totalTime:"00:12",
    timerows:[
      {
        startTime:"01/24 01:22",
        endTime:"01/24 01:35",
        duration:"00:22"
      },
      {
        startTime:"01/24 01:59",
        endTime:"01/24 02:45",
        duration:"00:56"
      }
    ]
  }
};
export default meta;

export const normal:Story={

};

export const running:Story={
  args:{
    running:true,
    timerows:[
      {
        startTime:"01/24 01:22"
      },
      {
        startTime:"01/24 01:59",
        endTime:"01/24 02:45",
        duration:"00:56"
      },
    ]
  }
};

export const noRows:Story={
  args:{
    timerows:[

    ]
  }
};

export const manyRows:Story={
  args:{
    timerows:[
      {
        startTime:"01/24 01:22",
        endTime:"01/24 01:35",
        duration:"00:22"
      },
      {
        startTime:"01/24 01:59",
        endTime:"01/24 02:45",
        duration:"00:56"
      },
      {
        startTime:"01/24 01:22",
        endTime:"01/24 01:35",
        duration:"00:22"
      },
      {
        startTime:"01/24 01:59",
        endTime:"01/24 02:45",
        duration:"00:56"
      },
      {
        startTime:"01/24 01:22",
        endTime:"01/24 01:35",
        duration:"00:22"
      },
      {
        startTime:"01/24 01:59",
        endTime:"01/24 02:45",
        duration:"00:56"
      },
    ]
  }
};