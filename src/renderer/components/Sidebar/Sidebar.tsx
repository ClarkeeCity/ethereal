import AlbumDisplay from '../AlbumDisplay/AlbumDisplay';
import './sidebar.scss';

interface SidebarProps {
  children: JSX.Element | JSX.Element[];
}

export default function Sidebar({ children }: SidebarProps) {
  return <div className="sidebar">{children}</div>;
}
