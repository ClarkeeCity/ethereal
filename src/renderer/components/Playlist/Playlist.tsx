import './playlist.scss';
import { MetaDataInterface } from 'interface';
import Row from './Row';

interface PlaylistInterface {
  playlistData: MetaDataInterface[];
  setStream: React.Dispatch<string[]>;
}

export default function Playlist({
  playlistData,
  setStream,
}: PlaylistInterface) {
  const songs = playlistData
    ? playlistData.map((song) => (
        <Row key={song.filePath} fileData={song} setStream={setStream} />
      ))
    : [];
  return (
    <div>
      <table className="list">
        <thead>
          <tr>
            <td>
              <span>Title</span>
            </td>
            <td>
              <span>Artist</span>
            </td>
            <td>
              <span>Album</span>
            </td>
            <td>
              <span>Year</span>
            </td>
            <td>
              <span>Time</span>
            </td>
          </tr>
        </thead>
        <tbody>{songs}</tbody>
      </table>
    </div>
  );
}
