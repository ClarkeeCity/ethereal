import './components/main.scss';
import { MetaDataInterface } from 'interface';
import { SetStateAction, useState } from 'react';
import { IpcRendererEvent } from 'electron';
import { Howl } from 'howler';
import Playlist from './components/Playlist/Playlist';
import Experiences from './components/Experiences/Experiences';
import Sidebar from './components/Sidebar/Sidebar';
import BottomBar from './components/BottomBar/BottomBar';
import TitleBar from './components/TitleBar/TitleBar';

export default function App() {
  // After main is done processing the list of files, display the files to renderer.
  const [data, setData] = useState<string[]>([]);
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}
    >
      <TitleBar />
      <div id="app">
        <Experiences />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar />
            <Playlist playlistData={data} setStream={setStream} />
            <Sidebar />
          </div>
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
