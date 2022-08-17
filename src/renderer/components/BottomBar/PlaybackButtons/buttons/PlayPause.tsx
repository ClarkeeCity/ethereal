import Player from 'Player';
import { SetStateAction } from 'react';
import Pause from './Pause';
import Play from './Play';

interface PlayPauseProps {
  toggle: boolean;
  setToggle: React.Dispatch<SetStateAction<boolean>>;
  player: Player;
}

export default function PlayPause({
  toggle,
  setToggle,
  player,
}: PlayPauseProps) {
  return (
    <>
      {toggle ? (
        <Pause setToggle={setToggle} player={player} />
      ) : (
        <Play setToggle={setToggle} player={player} />
      )}
    </>
  );
}
