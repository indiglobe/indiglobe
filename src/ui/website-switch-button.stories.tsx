import type { TypedMetaOptions } from "@/lib/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { WebsiteSwitchButton } from "./website-switch-button";

const meta: Meta<typeof WebsiteSwitchButton> & TypedMetaOptions = {
  component: WebsiteSwitchButton,
};

export default meta;

type Story = StoryObj<typeof WebsiteSwitchButton>;

export const WebsiteSwitchButtonStory: Story = {
  args: {},
};
