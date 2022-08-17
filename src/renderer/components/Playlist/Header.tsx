import './playlist.scss';

export default function Header() {
  return (
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
    </table>
  );
}
