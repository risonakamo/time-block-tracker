import type {Meta,StoryObj} from "@storybook/react";

import {TimeRow} from "components/time-row/time-row";
import { customTimeParse } from "lib/time";

type Story=StoryObj<typeof TimeRow>;

const meta:Meta<typeof TimeRow>={
  title:"time row",
  component:TimeRow,
  args:{
    timerowData:{
      id:"ad",
      startTime:customTimeParse("01/24 01:22"),
      endTime:customTimeParse("01/24 01:35"),
      startTimeRaw:"",
      duration:22,
    },
    running:false
  }
};
export default meta;

export const normal:Story={

};

export const noEndTime:Story={
  args:{
    timerowData:{
      id:"asd",
      startTime:customTimeParse("01/24 01:59"),
      endTime:undefined,
      duration:undefined,
      startTimeRaw:"",
    }
  }
};

export const running:Story={
  args:{
    running:true,
    timerowData:{
      id:"asd",
      startTime:customTimeParse("01/24 01:59"),
      endTime:undefined,
      startTimeRaw:"",
      duration:undefined,
    }
  }
};