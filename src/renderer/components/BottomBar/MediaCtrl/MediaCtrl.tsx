import './mediactrl.scss';
import {
  Play,
  Pause,
  SkipForward,
  SkipBackward,
} from '../PlaybackButtons/index';

export default function MediaCtrl() {
  return (
    <div className="mediabar">
      <SkipBackward />
      <Play />
      <Pause />
      <SkipForward />
    </div>
  );
}
