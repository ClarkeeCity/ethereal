import React from 'react';
import './mediabar.scss';
import {Play, Pause, SkipForward, SkipBackward }from '../PlaybackButtons/PlaybackButtons'

interface BarProps {
}

export const MediaBar = ({
  ...props
}: BarProps) => {
  return (
    <div className={'mediabar'}{...props}>
      <SkipBackward />
      <Play />
      <Pause />
      <SkipForward />
    </div>
  );
};
