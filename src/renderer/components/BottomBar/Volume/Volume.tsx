import './volume.scss';
import {
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
  IoMdVolumeOff,
} from 'react-icons/io';
import Slider from 'renderer/components/Slider/Slider';

export default function Volume() {
  return (
    <>
      <div id="volume">
        <IoMdVolumeLow />
        <Slider />
      </div>
    </>
  );
}
