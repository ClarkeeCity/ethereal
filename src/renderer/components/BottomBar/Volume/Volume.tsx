import './volume.scss';
import {
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
  IoMdVolumeOff,
} from 'react-icons/io';
import Slider from 'renderer/components/Slider/Slider';
import { useState } from 'react';
import Player from 'Player';

interface VolumeProps {
  player: Player;
}

type SliderValues = {
  value: string;
  icon: JSX.Element;
};

export default function Volume({ player }: VolumeProps) {
  const [slider, setSlider] = useState<SliderValues>({
    value: '50',
    icon: <IoMdVolumeMute />,
  });

  player.volume(Number(slider.value));

  function setIcon(valueStr: string): JSX.Element {
    const value = Number.parseInt(valueStr, 10) - 1;
    // eslint-disable-next-line no-nested-ternary
    if (value <= 100 && value > 66) return <IoMdVolumeHigh />;
    if (value <= 66 && value > 33) return <IoMdVolumeLow />;
    return <IoMdVolumeMute />;
  }
  return (
    <>
      <div id="volume">
        {slider.icon}
        <Slider>
          <input
            type="range"
            min="0"
            value={slider.value}
            max="100"
            className="slider"
            width="10px"
            onInput={(event) => {
              const updateObj = {} as SliderValues;
              // eslint-disable-next-line react/no-this-in-sfc
              updateObj.value = (event.target as HTMLInputElement).value;
              updateObj.icon = setIcon(slider.value);
              setSlider(updateObj);
            }}
          />
        </Slider>
      </div>
    </>
  );
}
