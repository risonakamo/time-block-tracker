import type {Meta,StoryObj} from "@storybook/react";

import {TimeBlock} from "components/time-block/time-block";

type Story=StoryObj<typeof TimeBlock>;

const meta:Meta<typeof TimeBlock>={
  title:"time block",
  component:TimeBlock,
  args:{
    running:false
  }
};
export default meta;

export const normal:Story={

};

export const running:Story={
  args:{
    running:true
  }
};