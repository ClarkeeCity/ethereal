import { IoMdPause } from 'react-icons/io';
import { PlayPauseControlProps } from '../interface';
import '../playbackbutton.scss';

export default function Pause({ player, setToggle }: PlayPauseControlProps) {
  return (
    <button
      type="button"
      onClick={() => {
        setToggle(false);
        player.pause();
      }}
      className="playbackButton"
    >
      <IoMdPause />
    </button>
  );
}
