import './albumdisplay.scss';
import { IoMdDisc } from 'react-icons/io';
import { useEffect, useState } from 'react';
import Player from 'Player';
import { IPicture } from 'music-metadata';

interface AlbumDisplayProps {
  player: Player;
  size: 'small' | 'medium' | 'large';
}

export default function AlbumDisplay({ player, size }: AlbumDisplayProps) {
  const [albumArt, setAlbumArt] = useState<IPicture>();
  // TODO: For N amount of Album displays, the useeffect will call it N times.
  //       Instead, should call once, and have the albums display where needed.
  useEffect(() => {
    async function getAlbumArt() {
      if (player?.playingTrack) {
        const data = (await window.electron.getMetadata(
          player?.playingTrack?.dataset.filepath as string,
          'image'
        )) as IPicture;

        setAlbumArt(data);
      }
    }

    getAlbumArt();
  }, [player?.playingTrack]);
  return albumArt ? (
    <img
      className={`album-display album-display--${size}`}
      alt={albumArt.type}
      src={URL.createObjectURL(new Blob([albumArt.data]))}
      itemType={albumArt.format}
    />
  ) : (
    <div className={`album-display album-display--${size}`}>
      <IoMdDisc />
    </div>
  );
}
