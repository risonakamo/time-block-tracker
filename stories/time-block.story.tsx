import type {Meta,StoryObj} from "@storybook/react";

import {TimeBlock} from "components/time-block/time-block";

type Story=StoryObj<typeof TimeBlock>;

const meta:Meta<typeof TimeBlock>={
  title:"time block",
  component:TimeBlock,
  args:{

  }
};
export default meta;

export const normal:Story={

};