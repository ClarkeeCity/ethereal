import { useState } from 'react';
import './components/main.scss';
import InterfaceContainer from './components/Containers/InterfaceContainer/InterfaceContainer';
import AppContainer from './components/Containers/AppContainer/AppContainer';
// import TitleBar from './components/TitleBar/TitleBar';
import Player from '../Player';

const player = new Player();

export default function App() {
  const [stream, setStream] = useState<string[]>(['']);
  // anytime the stream is updated, set new howl to play.
  player.setHowl(stream);

  return (
    <AppContainer>
      {/* If we want to have a custom titlebar */}
      {/* <TitleBar /> */}
      <InterfaceContainer player={player} setStream={setStream} />
    </AppContainer>
  );
}
