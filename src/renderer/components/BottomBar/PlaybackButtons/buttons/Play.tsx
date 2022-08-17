import { IoMdPlay } from 'react-icons/io';
import { PlayPauseControlProps } from '../interface';
import '../playbackbutton.scss';

export default function Play({ player, setToggle }: PlayPauseControlProps) {
  return (
    <button
      type="button"
      onClick={() => {
        setToggle(true);
        player.play();
        console.log('playing');
      }}
      className="playbackButton"
    >
      <IoMdPlay />
    </button>
  );
}
