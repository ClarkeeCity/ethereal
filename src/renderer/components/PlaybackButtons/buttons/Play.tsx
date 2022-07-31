import { IoMdPlay } from 'react-icons/io';
import PlayBackButton from '../PlaybackButton';

export default function Pause() {
  return (
    <PlayBackButton
      label={<IoMdPlay />}
      onClick={() => {
        console.log('Play');
      }}
    />
  );
}
