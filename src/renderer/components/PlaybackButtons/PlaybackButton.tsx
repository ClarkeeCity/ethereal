import './playbackbutton.scss';

interface PlaybackProps {
  label: JSX.Element;
  // eslint-disable-next-line react/no-unused-prop-types
  onClick: () => void;
}

export default function PlayBackButton({ label }: PlaybackProps) {
  return <div className="playbackButton">{label}</div>;
}
