import Player from 'Player';
import { useEffect, useState } from 'react';
import './trackdetails.scss';

interface TrackSliderProps {
  player: Player;
}

export default function TrackSlider({ player }: TrackSliderProps) {
  const [currentTrackInterval, setTrackInterval] = useState<string>();
  setInterval(() => {
    setTrackInterval(player.howl?.seek().toString());
  }, 100);

  return (
    <input
      id="progress"
      type="range"
      min="0"
      max={player.playingTrack?.dataset.duration}
      step="any"
      onMouseUp={(event) => {
        const seek = (event.target as HTMLInputElement).value;
        player.howl?.seek(Number(seek));

        console.log(seek);
      }}
    />
  );
}
