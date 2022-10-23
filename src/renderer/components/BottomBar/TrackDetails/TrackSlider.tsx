import Player from 'Player';
import { useEffect, useRef, useState } from 'react';
import './trackdetails.scss';

interface TrackSliderProps {
  player: Player;
}

export default function TrackSlider({ player }: TrackSliderProps) {
  const isMounted = useRef(false);
  const [scrubInput, setScrubInput] = useState<string>();
  const [currentTrackInterval, setTrackInterval] = useState<string>();
  const [trackAnimationCondition, setTrackAnimationCondition] =
    useState<boolean>(false);

  const trackInterval = setInterval(() => {
    setTrackInterval(player.howl?.seek().toString());
  }, 100);

  // Remove the interval when the component unmounts.
  useEffect(() => {
    isMounted.current = true;
    return () => {
      clearInterval(trackInterval);
      isMounted.current = false;
    };
  });

  return (
    <input
      id="progress"
      type="range"
      min="0"
      value={!trackAnimationCondition ? currentTrackInterval : scrubInput}
      max={player.playingTrack?.dataset.duration}
      step="any"
      onInput={(event) => {
        setScrubInput((event.target as HTMLInputElement).value);
        setTrackAnimationCondition(true);
      }}
      onMouseUp={(event) => {
        const seek = (event.target as HTMLInputElement).value;
        player.howl?.seek(Number(seek));
        setTrackInterval(seek);
        setTrackAnimationCondition(false);
      }}
    />
  );
}
