import Player from 'Player';
import { SetStateAction, useEffect, useState } from 'react';
import AlbumDisplay from '../AlbumDisplay/AlbumDisplay';
import FiveStar from '../FiveStar/FiveStar';
import MediaCtrl from './MediaCtrl/MediaCtrl';
import { PlayPause, SkipBackward, SkipForward } from './PlaybackButtons';
import TrackDetails from './TrackDetails/TrackDetails';
import TrackSlider from './TrackDetails/TrackSlider';
import Volume from './Volume/Volume';
import './bottombar.scss';

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
  const [trackTitle, setTrackTitle] = useState<string>();
  useEffect(() => {
    setTrackTitle(
      `${player.playingTrack?.dataset.artist} - ${player.playingTrack?.dataset.title}`
    );
  }, [player.playingTrack]);
  return (
    <div id="bottombar">
      <div className="sidebar-width">
        <AlbumDisplay player={player} size="medium" />
        <MediaCtrl>
          <SkipBackward />
          <PlayPause player={player} toggle={toggle} setToggle={setToggle} />
          <SkipForward />
        </MediaCtrl>
      </div>

      <div id="middle">
        <Volume player={player} />
        <TrackDetails>
          <div id="track-title">
            <b>{trackTitle}</b>
          </div>
          <div id="track-additional">
            <FiveStar />
            <span>{player.playingTrack?.dataset.length}</span>
          </div>
          <TrackSlider player={player} />
        </TrackDetails>
        {/* blank spacing for padding */}
        <div id="bottom-bar-pad">&nbsp;</div>
      </div>

      <div className="sidebar-width">&nbsp;</div>
    </div>
  );
}
