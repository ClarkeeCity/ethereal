import './playlist.scss';
import Row from './Row';

interface PlaylistInterface {
  children: JSX.Element | JSX.Element[];
}

export default function Playlist({ children }: PlaylistInterface) {
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
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
