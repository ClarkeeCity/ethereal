import './playlistcontainer.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function PlaylistContainer({ children }: Props) {
  return <div id="playlist-container">{children}</div>;
}
