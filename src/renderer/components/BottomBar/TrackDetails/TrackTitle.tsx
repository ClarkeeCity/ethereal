import Player from 'Player';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './trackdetails.scss';

interface TrackTitleProps {
  player: Player;
}

export default function TrackTitle({ player }: TrackTitleProps) {
  const titleContainer = useRef(null);
  const scrollContainer = useRef(null);
  const [trackTitle, setTrackTitle] = useState<string>();

  function resize() {
    const parentWidth = titleContainer.current.parentNode.offsetWidth;
    const nodeWidth = titleContainer.current.offsetWidth;

    // TODO: Correct this animation.
    titleContainer.current.className =
      nodeWidth >= parentWidth - 30 ? 'title-mask scroll-container' : '';
    scrollContainer.current.className =
      nodeWidth >= parentWidth - 30 ? 'scroll-text' : '';
  }

  useLayoutEffect(() => {
    // TODO: Find a way to just target the parent div and not the window.
    window.addEventListener('resize', resize);

    // TODO: Nessessary?
    return () => {
      window.removeEventListener('resize', resize, false);
    };
  });

  useEffect(() => {
    setTrackTitle(
      `${player.playingTrack?.dataset.artist} - ${player.playingTrack?.dataset.title}`
    );
  }, [player.playingTrack]);

  return (
    <div ref={titleContainer} id="track-title">
      <div ref={scrollContainer}>
        <b>{trackTitle}</b>
      </div>
    </div>
  );
}
