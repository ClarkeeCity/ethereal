import './playlist.scss';
import Header from './Header';

interface PlaylistProps {
  children: JSX.Element | JSX.Element[];
}

export default function Playlist({ children }: PlaylistProps) {
  return (
    <div id="playlist">
      <Header />
      <div className="innerTable">
        <table className="list">
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}
