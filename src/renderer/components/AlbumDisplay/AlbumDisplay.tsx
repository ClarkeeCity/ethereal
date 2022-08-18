import './albumdisplay.scss';
import { IoMdDisc } from 'react-icons/io';

interface AlbumDisplayProps {
  size: 'small' | 'medium' | 'large';
}

export default function AlbumDisplay({ size }: AlbumDisplayProps) {
  return (
    <div className={`album-display album-display--${size}`}>
      <IoMdDisc />
    </div>
  );
}
