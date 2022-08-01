import { IoMdPlay } from 'react-icons/io';
import PlayBackButton from '../PlaybackButton';

export default function Play() {
  return (
    <PlayBackButton onClick={() => console.log('play')} label={<IoMdPlay />} />
  );
}
