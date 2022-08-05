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
    <div id="playlist">
      <table className="list">
        <thead>
          <tr>
            <td>Title</td>
            <td>Artist</td>
            <td>Album</td>
            <td>Year</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>{songs}</tbody>
      </table>
    </div>
  );
}
