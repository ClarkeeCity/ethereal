import './playbackbutton.scss';

interface PlaybackProps {
  label: JSX.Element;
  onClick: () => void;
}

export default function PlayBackButton({ label, onClick }: PlaybackProps) {
  return (
    <button type="button" onClick={onClick} className="playbackButton">
      {label}
    </button>
  );
}
