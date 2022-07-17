import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MediaBar } from './MediaBar';

export default {
  title: 'Ethereal/MediaBar',
  component: MediaBar,
} as ComponentMeta<typeof MediaBar>;

const Template: ComponentStory<typeof MediaBar> = (args) => <MediaBar {...args} />;

export const MediaBarPreivew = Template.bind({});
