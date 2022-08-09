import { IoMdSkipBackward } from 'react-icons/io';
import PlayBackButton from '../PlaybackButton';

export default function SkipBackward() {
  return (
    <PlayBackButton
      onClick={() => console.log('backward')}
      label={<IoMdSkipBackward />}
    />
  );
}
