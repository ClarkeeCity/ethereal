import { IoMdSkipForward } from 'react-icons/io';
import PlayBackButton from '../PlaybackButton';

export default function SkipForward() {
  return (
    <PlayBackButton
      onClick={() => console.log('forward')}
      label={<IoMdSkipForward />}
    />
  );
}
