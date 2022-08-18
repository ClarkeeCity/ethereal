import AlbumDisplay from '../AlbumDisplay/AlbumDisplay';
import './upcoming.scss';

export default function Upcoming() {
  return (
    <div className="upcoming-track">
      <AlbumDisplay size="small" />
      <div className="upcoming-track-details">
        <span>
          <b>Track name</b>
        </span>
        <span className="details-secondary">Artist</span>
        <span className="details-secondary">2:26</span>
      </div>
    </div>
  );
}
