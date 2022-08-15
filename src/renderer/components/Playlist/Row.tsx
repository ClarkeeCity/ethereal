import { MetaDataInterface } from 'interface';
import React, { useState, useEffect } from 'react';

interface RowInterface {
  fileData: string;
  setStream: React.Dispatch<string[]>;
}

export default function Row({ fileData, setStream }: RowInterface) {
  const [fileMetadata, setFileMetadata] = useState<MetaDataInterface>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await window.electron.getMetadata(fileData);
      setFileMetadata(data);
    };
    fetchData();
  }, [fileData]);
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
        <td title={fileMetadata?.title}>{fileMetadata?.title}</td>
        <td title={fileMetadata?.artist}>{fileMetadata?.artist}</td>
        <td title={fileMetadata?.album}>{fileMetadata?.album}</td>
        <td title={fileMetadata?.genre}>{fileMetadata?.genre}</td>
        <td title={fileMetadata?.year?.toString()}>{fileMetadata?.year}</td>
        <td title={fileMetadata?.length?.toString()}>{fileMetadata?.length}</td>
        <td title="Playcount">0</td>
      </tr>
    </>
  );
}
