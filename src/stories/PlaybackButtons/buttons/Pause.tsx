import { PlayBackButton } from '../PlaybackButton'
import { IoMdPause } from 'react-icons/io'

export const Pause = () => {
  return (
    <PlayBackButton 
      label={<IoMdPause />}
      onClick={()=>{console.log("Pause")}}
    />
  );
};
