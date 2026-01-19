import type { TypedMetaOptions } from "@/lib/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AArrowDown } from "lucide-react";
import {
  StatisticsCardBoldText,
  StatisticsCardIcon,
  StatisticsCardText,
  StatisticsCard,
} from "./statistics-card";

function StatisticsCardDemo() {
  return (
    <StatisticsCard>
      <StatisticsCardIcon>
        <AArrowDown />
      </StatisticsCardIcon>

      <StatisticsCardBoldText>5555+</StatisticsCardBoldText>

      <StatisticsCardText>Lorem ipsum</StatisticsCardText>
    </StatisticsCard>
  );
}

const meta: Meta<typeof StatisticsCardDemo> & TypedMetaOptions = {
  component: StatisticsCardDemo,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof StatisticsCardDemo>;

export const StatisticsCardDemoStory: Story = {
  args: {},
};
