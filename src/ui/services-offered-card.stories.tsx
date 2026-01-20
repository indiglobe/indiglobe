import type { TypedMetaOptions } from "@/lib/storybook/sb.types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ExploreButton,
  ServicesHighlighted,
  ServicesOffered,
  ServicesOfferedCard,
  ServicesOfferedDetails,
  ServicesOfferedHeading,
} from "./services-offered-card";

function ServicesOfferedCardDemo() {
  return (
    <ServicesOffered>
      <ServicesOfferedCard>
        <ServicesOfferedHeading>Web Design</ServicesOfferedHeading>
        <ServicesOfferedDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          et?
        </ServicesOfferedDetails>
        <ServicesHighlighted
          highlights={[
            "there on purpose",
            "something in each section. Web",
            "lorem ipsum, also",
            "advertisements, editorials, and",
            " with one of these lorem ipsum generators",
          ]}
        ></ServicesHighlighted>
      </ServicesOfferedCard>
      <ExploreButton />
    </ServicesOffered>
  );
}

const meta: Meta<typeof ServicesOfferedCardDemo> & TypedMetaOptions = {
  component: ServicesOfferedCardDemo,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof ServicesOfferedCardDemo>;

export const ServicesOfferedCardDemoStory: Story = {
  args: {},
};
