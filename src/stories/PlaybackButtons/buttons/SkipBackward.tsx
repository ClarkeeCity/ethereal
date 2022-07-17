import { PlayBackButton } from '../PlaybackButton'
import { IoMdSkipBackward } from 'react-icons/io'

export const SkipBackward = () => {
  return (
    <PlayBackButton 
      label={<IoMdSkipBackward />}
      onClick={()=>{console.log("Skip Backward")}}
    />
  );
};
