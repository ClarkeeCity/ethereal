import './mediabar.scss';
import {
  Play,
  Pause,
  SkipForward,
  SkipBackward,
} from '../PlaybackButtons/index';

export default function MediaBar() {
  return (
    <div className="mediabar">
      <SkipBackward />
      <Play />
      <Pause />
      <SkipForward />
    </div>
  );
}
