import './mediactrl.scss';

interface MediaCtrlProps {
  children: JSX.Element | JSX.Element[];
}

export default function MediaCtrl({ children }: MediaCtrlProps) {
  return <div className="mediabar">{children}</div>;
}
