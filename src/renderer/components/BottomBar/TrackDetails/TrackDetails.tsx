import './trackdetails.scss';

interface TrackDetailsProps {
  children: JSX.Element | JSX.Element[];
}

export default function TrackDetails({ children }: TrackDetailsProps) {
  return <div id="track-details">{children}</div>;
}
