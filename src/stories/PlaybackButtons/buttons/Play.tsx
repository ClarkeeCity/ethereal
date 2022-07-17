import { PlayBackButton } from '../PlaybackButton'
import { IoMdPlay } from 'react-icons/io'

export const Play = () => {
  return (
    <PlayBackButton 
      label={<IoMdPlay />}
      onClick={()=>{console.log("Play")}}
    />
  );
};
