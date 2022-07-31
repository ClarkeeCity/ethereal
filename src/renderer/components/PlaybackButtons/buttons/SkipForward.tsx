import { IoMdSkipForward } from 'react-icons/io';
import PlayBackButton from '../PlaybackButton';

export default function Pause() {
  return (
    <PlayBackButton
      label={<IoMdSkipForward />}
      onClick={() => {
        console.log('Skip Forward');
      }}
    />
  );
}
