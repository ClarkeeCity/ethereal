import { MetaDataInterface } from '../../../interface';

interface RowInterface {
  fileData: MetaDataInterface;
  setStream: React.Dispatch<string[]>;
}

export default function Row({ fileData, setStream }: RowInterface) {
  return (
    <>
      <tr
        onDoubleClick={() => {
          // eslint-disable-next-line promise/catch-or-return, promise/always-return
          window.electron.getBuffer(fileData.filePath).then((resolve) => {
            setStream([`data:audio/x-mp3;base64,${resolve}`]);
          });
        }}
        data-filepath={fileData.filePath}
      >
        <td title={fileData.title}>{fileData.title}</td>
        <td title={fileData.artist}>{fileData.artist}</td>
        <td title={fileData.album}>{fileData.album}</td>
        <td>{fileData.year}</td>
        <td>{fileData.length}</td>
      </tr>
    </>
  );
}
