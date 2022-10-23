import Player from 'Player';
import { useEffect, useRef, useState } from 'react';
import { durationToTime } from '../../../../utils/helpers';
import './trackdetails.scss';

interface TimeDurationProps {
  player: Player;
}

export default function TimeDuration({ player }: TimeDurationProps) {
  const isMounted = useRef(false);
  const [seek, setSeek] = useState<number>(0);

  const trackInterval = setInterval(() => {
    setSeek(player.howl?.seek() as number);
  }, 1000);

  // Remove the interval when the component unmounts.
  useEffect(() => {
    isMounted.current = true;
    return () => {
      clearInterval(trackInterval);
      isMounted.current = false;
    };
  });

  let trackDuration = player.playingTrack?.dataset.duration;
  if (!trackDuration) trackDuration = '0';
  return (
    <div id="duration">
      <span id="seek">{durationToTime(seek)}</span>
      <span id="seperator">/</span>
      <span id="remain">
        {`-${durationToTime(Number.parseInt(trackDuration, 10) - seek)}`}
      </span>
    </div>
  );
}
