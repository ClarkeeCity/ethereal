import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumSelection } from './AlbumSelection';

export default {

  title: 'Ethereal/AlbumSelection',
  component: AlbumSelection,
} as ComponentMeta<typeof AlbumSelection>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AlbumSelection> = (args) => <AlbumSelection />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};