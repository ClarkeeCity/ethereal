import './playbackbutton.scss';

interface PlaybackProps {
  label: JSX.Element;
  onClick: () => void;
}

export const PlayBackButton = ({
  label,
  ...props
}: PlaybackProps) => {
  return (
    <div
      className={'playbackButton'}
      {...props}
    >
      {label}
    </div>
  );
};
