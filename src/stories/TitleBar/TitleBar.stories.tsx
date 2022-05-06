import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TitleBar } from './TitleBar';

export default {
  title: 'Ethereal/TitleBar',
} as ComponentMeta<typeof TitleBar>;

const Template: ComponentStory<typeof TitleBar> = (args) => <TitleBar />;

export const Windows = Template.bind({});
Windows.args = {};

export const Mac = Template.bind({});
Mac.args = {};

export const Linux = Template.bind({});
Linux.args = {};