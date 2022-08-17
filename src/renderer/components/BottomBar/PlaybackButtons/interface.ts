import Player from 'Player';
import { SetStateAction } from 'react';

export default interface MediaControlProps {
  player: Player;
}

export interface PlayPauseControlProps extends MediaControlProps {
  setToggle: React.Dispatch<SetStateAction<boolean>>;
}
