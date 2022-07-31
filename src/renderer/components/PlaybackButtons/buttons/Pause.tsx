import { IoMdPause } from 'react-icons/io';
import PlayBackButton from '../PlaybackButton';

export default function Pause() {
  return (
    <PlayBackButton
      label={<IoMdPause />}
      onClick={() => {
        console.log('Pause');
      }}
    />
  );
}
