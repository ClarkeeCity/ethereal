import './App.scss';
import { MetaDataInterface } from 'interface';
import { SetStateAction, useState } from 'react';
import { IpcRendererEvent } from 'electron';
import { Howl } from 'howler';
import MediaBar from './components/MediaBar/MediaBar';
import Playlist from './components/Playlist/Playlist';
import Experiences from './components/Experiences/Experiences';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  // After main is done processing the list of files, display the files to renderer.
  const [data, setData] = useState<MetaDataInterface[]>([]);
  window.electron.updatePlaylist(
    (_event: IpcRendererEvent, value: SetStateAction<MetaDataInterface[]>) => {
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
    <>
      <div id="app">
        <div>
          <Experiences />
        </div>
        <div style={{ display: 'flex', width: '100%' }}>
          <Sidebar />
          <Playlist setStream={setStream} playlistData={data} />
          <Sidebar />
        </div>
      </div>
    </>
  );
}
