import './interfacemain.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function InterfaceMain({ children }: Props) {
  return <div id="interface-main">{children}</div>;
}
