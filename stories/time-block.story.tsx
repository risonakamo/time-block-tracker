import type {Meta,StoryObj} from "@storybook/react";

import {TimeBlock} from "components/time-block/time-block";
import { customTimeParse } from "lib/time";

type Story=StoryObj<typeof TimeBlock>;

const meta:Meta<typeof TimeBlock>={
  title:"time block",
  component:TimeBlock,
  args:{
    timedata:{
      title:"1/sk",
      id:"123",
      running:false,
      totalTime:12,
      timerows:[
        {
          id:"123",
          startTime:customTimeParse("01/24 01:22"),
          endTime:customTimeParse("01/24 01:35"),
          duration:22
        },
        {
          id:"123",
          startTime:customTimeParse("01/24 01:59"),
          endTime:customTimeParse("01/24 02:45"),
          duration:56
        }
      ]
    }
  }
};
export default meta;

export const normal:Story={

};

export const running:Story={
  args:{
    timedata:{
      title:"1/sk",
      id:"123",
      totalTime:56,
      running:true,
      timerows:[
        {
          id:"123",
          startTime:customTimeParse("01/24 01:22"),
        },
        {
          id:"123",
          startTime:customTimeParse("01/24 01:59"),
          endTime:customTimeParse("01/24 02:45"),
          duration:56
        },
      ]
    }
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