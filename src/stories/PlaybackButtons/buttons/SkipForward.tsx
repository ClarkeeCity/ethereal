import { PlayBackButton } from '../PlaybackButton'
import { IoMdSkipForward } from 'react-icons/io'

export const SkipForward = () => {
  return (
    <PlayBackButton 
      label={<IoMdSkipForward />}
      onClick={()=>{console.log("Skip Forward")}}
    />
  );
};
