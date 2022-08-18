import './upcoming.scss';
import UpcomingTrack from './UpcomingTrack';

export default function Upcoming() {
  return (
    <>
      <div id="upcoming-header">
        <span>Upcoming Tracks</span>
      </div>
      <div id="upcoming">
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
        <UpcomingTrack />
      </div>
    </>
  );
}
