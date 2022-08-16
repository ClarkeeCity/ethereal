import './appcontainer.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function AppContainer({ children }: Props) {
  return <div id="app-container">{children}</div>;
}
