import Player from 'Player';
import { SetStateAction } from 'react';
import AlbumDisplay from '../AlbumDisplay/AlbumDisplay';
import './bottombar.scss';
import MediaCtrl from './MediaCtrl/MediaCtrl';
import { PlayPause, SkipBackward, SkipForward } from './PlaybackButtons';
import TrackAdd from './TrackDetails/TrackAdd';
import TrackDetails from './TrackDetails/TrackDetails';
import TrackSlider from './TrackDetails/TrackSlider';
import TrackTitle from './TrackDetails/TrackTitle';
import Volume from './Volume/Volume';

interface BottomBarProps {
  toggle: boolean;
  setToggle: React.Dispatch<SetStateAction<boolean>>;
  player: Player;
}

export default function BottomBar({
  toggle,
  setToggle,
  player,
}: BottomBarProps) {
  return (
    <div id="bottombar">
      <div className="sidebar-width">
        <AlbumDisplay />
        <MediaCtrl>
          <SkipBackward />
          <PlayPause player={player} toggle={toggle} setToggle={setToggle} />
          <SkipForward />
        </MediaCtrl>
      </div>
      <div id="middle">
        <Volume />
        <TrackDetails>
          <TrackTitle />
          <TrackAdd />
          <TrackSlider />
        </TrackDetails>
        {/* blank spacing for padding */}
        <div
          style={{
            display: 'inline-block',
            width: '128px',
            flexShrink: 0,
            flexGrow: 0,
          }}
        >
          &nbsp;
        </div>
      </div>
      <div className="sidebar-width">&nbsp;</div>
    </div>
  );
}
