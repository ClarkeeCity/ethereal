import './App.css';
import { MetaDataInterface } from 'interface';
import { SetStateAction, useState } from 'react';
import { IpcRendererEvent } from 'electron';
import { Howl } from 'howler';
import MediaBar from './components/MediaBar/MediaBar';
import Playlist from './components/Playlist/Playlist';

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
      <div>
        <Playlist setStream={setStream} playlistData={data} />
        <MediaBar />
      </div>
    </>
  );
}
