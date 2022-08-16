import { useEffect, SetStateAction, useState } from 'react';
import './components/main.scss';
import { IpcRendererEvent } from 'electron';
import { Howl } from 'howler';
import Playlist from './components/Playlist/Playlist';
import Experiences from './components/Experiences/Experiences';
import Sidebar from './components/Sidebar/Sidebar';
import BottomBar from './components/BottomBar/BottomBar';
import InterfaceContainer from './components/Containers/InterfaceContainer/InterfaceContainer';
import InterfaceMain from './components/Containers/InterfaceMain/InterfaceMain';
import AppContainer from './components/Containers/AppContainer/AppContainer';
import PlaylistContainer from './components/Containers/PlaylistContainer/PlaylistContainer';
// import TitleBar from './components/TitleBar/TitleBar';
import Player from '../Player';
import Row from './components/Playlist/Row';

const player = new Player();

export default function App() {
  // List of files to render on playlist.
  const [data, setData] = useState<string[]>([]);
  // Fetch files from Ethereal.library if it exists onmount.
  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return, promise/always-return
    window.electron.initPlaylist().then((resolve) => {
      setData(resolve);
    });
  }, []);
  window.electron.updatePlaylist(
    (_event: IpcRendererEvent, value: SetStateAction<string[]>) => {
      setData(value);
    }
  );

  const [stream, setStream] = useState<string[]>(['']);
  player.playlist = data;
  // anytime the stream is updated, set new howl to play.
  player.setHowl(stream);
  player.play();

  const songs = data
    ? data.map((song) => (
        <Row key={song} fileData={song} setStream={setStream} />
      ))
    : [];

  return (
    <AppContainer>
      {/* If we want to have a custom titlebar */}
      {/* <TitleBar /> */}
      <InterfaceContainer>
        <Experiences />
        <InterfaceMain>
          <PlaylistContainer>
            <Sidebar />
            {/* <Playlist playlistData={data} setStream={setStream} /> */}
            <Playlist>{songs}</Playlist>
            <Sidebar />
          </PlaylistContainer>
          <BottomBar />
        </InterfaceMain>
      </InterfaceContainer>
    </AppContainer>
  );
}
