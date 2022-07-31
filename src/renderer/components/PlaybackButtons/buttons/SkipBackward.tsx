import { IoMdSkipBackward } from 'react-icons/io';
import PlayBackButton from '../PlaybackButton';

export default function Pause() {
  return (
    <PlayBackButton
      label={<IoMdSkipBackward />}
      onClick={() => {
        console.log('Skip Back');
      }}
    />
  );
}
