import Player from 'Player';
import './bottombar.scss';

interface BottomBarProps {
  children: JSX.Element | JSX.Element[];
}

export default function BottomBar({ children }: BottomBarProps) {
  return <div id="bottombar">{children}</div>;
}
