import './fivestar.scss';
import { IoMdStarOutline, IoMdStarHalf, IoMdStar } from 'react-icons/io';

export default function FiveStar() {
  return (
    <div className="inline-stars">
      <IoMdStar />
      <IoMdStar />
      <IoMdStar />
      <IoMdStar />
      <IoMdStar />
    </div>
  );
}
