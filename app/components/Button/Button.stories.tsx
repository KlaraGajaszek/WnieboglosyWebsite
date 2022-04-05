import { ComponentMeta, Story } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "click" },
    children: { defaultValue: "Default Text" },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
  onClick: action("secondary click"),
};
