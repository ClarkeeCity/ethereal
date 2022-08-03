import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MediaBar from './components/MediaBar/MediaBar';
import Playlist from './components/Playlist/Playlist';

export default function App() {
  return (
    <div>
      <Playlist />
      <MediaBar />
      <button type="button" onClick={() => window.electron.doAThing()}>
        CLICK ME
      </button>
    </div>
  );
}
