import './upcoming.scss';
import UpcomingTrack from './UpcomingTrack';

interface UpcommingProps {
  children: JSX.Element | JSX.Element[];
}

export default function Upcoming({ children }: UpcommingProps) {
  return (
    <>
      <div id="upcoming-header">
        <span>Upcoming Tracks</span>
      </div>
      <div id="upcoming">{children}</div>
    </>
  );
}
