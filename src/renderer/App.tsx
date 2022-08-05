import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MetaDataInterface } from 'interface';
import { SetStateAction, useState } from 'react';
import { IpcRendererEvent } from 'electron';
import MediaBar from './components/MediaBar/MediaBar';
import Playlist from './components/Playlist/Playlist';

export default function App() {
  const [data, setData] = useState<MetaDataInterface[]>([
    { filePath: 'dsdd', title: 'heelo', artist: 'world' },
  ]);

  window.electron.updatePlaylist(
    (_event: IpcRendererEvent, value: SetStateAction<MetaDataInterface[]>) => {
      console.log('window.electron.updatePlayList(): ', value);
      setData(value);
    }
  );
  return (
    <>
      <div>
        <Playlist playlistData={data} />
        <MediaBar />
      </div>
    </>
  );
}
