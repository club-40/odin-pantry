// Just an example, delete this later
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: true },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me!",
  },
  // For interaction testing
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole("button"));
    expect(args.onClick).toHaveBeenCalled();
  },
};
