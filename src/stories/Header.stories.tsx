import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "components/Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
