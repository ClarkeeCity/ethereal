import './interfacecontainer.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function InterfaceContainer({ children }: Props) {
  return <div id="interface-container">{children}</div>;
}
