import { IoMdPause } from 'react-icons/io';
import PlayBackButton from '../PlaybackButton';

export default function Pause() {
  return (
    <PlayBackButton
      onClick={() => console.log('pause')}
      label={<IoMdPause />}
    />
  );
}
