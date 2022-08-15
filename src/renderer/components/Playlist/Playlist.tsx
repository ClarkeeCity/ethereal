import './playlist.scss';
import Row from './Row';

interface PlaylistInterface {
  playlistData: string[];
  setStream: React.Dispatch<string[]>;
}

export default function Playlist({
  playlistData,
  setStream,
}: PlaylistInterface) {
  const songs = playlistData
    ? playlistData.map((song) => (
        <Row key={song} fileData={song} setStream={setStream} />
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
            <td>Genre</td>
            <td>Year</td>
            <td>Time</td>
            <td>Plays</td>
          </tr>
        </thead>
        <tbody>{songs}</tbody>
      </table>
    </div>
  );
}
