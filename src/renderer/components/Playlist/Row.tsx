import React, { useState, useEffect } from 'react';

interface RowInterface {
  fileData: string;
  setStream: React.Dispatch<string[]>;
}

export default function Row({ fileData, setStream }: RowInterface) {
  const [fileMetadata, setFileMetadata] = useState<string>('');

  // TODO: We will ned to go into main, and fetch the file metadata that way,
  // when done, useEffect will update this JSX.
  return (
    <>
      <tr
        onDoubleClick={() => {
          // eslint-disable-next-line promise/catch-or-return, promise/always-return
          window.electron.getBuffer(fileData).then((resolve) => {
            setStream([`data:audio/x-mp3;base64,${resolve}`]);
          });
        }}
        data-filepath={fileData}
      >
        <td title={fileData}>{fileData}</td>
        {/* <td title={fileData.title}>{fileData.title}</td>
        <td title={fileData.artist}>{fileData.artist}</td>
        <td title={fileData.album}>{fileData.album}</td>
        <td>{fileData.year}</td>
        <td>{fileData.length}</td> */}
      </tr>
    </>
  );
}
