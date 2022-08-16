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
  // Passing props down to the UI to individually play songs, that way globally,
  // we can access song information.
  const [stream, setStream] = useState<string[]>(['']);
  const sound = new Howl({
    src: stream,
    html5: true,
  });
  sound.play();

  return (
    <AppContainer>
      {/* If we want to have a custom titlebar */}
      {/* <TitleBar /> */}
      <InterfaceContainer>
        <Experiences />
        <InterfaceMain>
          <PlaylistContainer>
            <Sidebar />
            <Playlist playlistData={data} setStream={setStream} />
            <Sidebar />
          </PlaylistContainer>
          <BottomBar />
        </InterfaceMain>
      </InterfaceContainer>
    </AppContainer>
  );
}
