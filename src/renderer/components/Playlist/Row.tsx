import { MetaDataInterface } from 'interface';
import Player from 'Player';
import React, { useState, useEffect, SetStateAction } from 'react';

interface RowInterface {
  player: Player;
  fileData: string;
  setStream: React.Dispatch<string[]>;
  setToggle: React.Dispatch<SetStateAction<boolean>>;
  prevClick: any;
}

export default function Row({
  player,
  fileData,
  setStream,
  setToggle,
  prevClick,
}: RowInterface) {
  const [fileMetadata, setFileMetadata] = useState<MetaDataInterface>();
  // Display metadata for this data row.
  useEffect(() => {
    const fetchData = async () => {
      const data = await window.electron.getMetadata(fileData);
      setFileMetadata(data);
    };
    fetchData();
  }, [fileData]);

  function handleClick(
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) {
    if (prevClick.current !== null) {
      prevClick.current.className = '';
    }
    prevClick.current = event.currentTarget;
    prevClick.current.className = 'selected';
    player.selected = prevClick.current;
  }

  function handleDoubleCick(
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) {
    // eslint-disable-next-line promise/catch-or-return, promise/always-return
    window.electron.getBuffer(fileData).then((resolve) => {
      setStream([`data:audio/x-mp3;base64,${resolve}`]);
    });

    setToggle(true);
    player.playingTrack = event.currentTarget;
  }
  return (
    <>
      <tr
        onClick={(event) => {
          // TODO: Multiple selections will need to be made here, listen for
          // keyboard-shift event to make a list of prevClicks?
          handleClick(event);
        }}
        onDoubleClick={(event) => {
          handleDoubleCick(event);
        }}
        data-filepath={fileData}
        data-title={fileMetadata?.title}
        data-artist={fileMetadata?.artist}
        data-album={fileMetadata?.album}
        data-genre={fileMetadata?.genre}
        data-year={fileMetadata?.year?.toString()}
        data-length={fileMetadata?.length?.toString()}
        data-plays={0}
      >
        <td>{fileMetadata?.title}</td>
        <td>{fileMetadata?.artist}</td>
        <td>{fileMetadata?.album}</td>
        <td>{fileMetadata?.genre}</td>
        <td>{fileMetadata?.year}</td>
        <td>{fileMetadata?.length}</td>
        <td>0</td>
      </tr>
    </>
  );
}
