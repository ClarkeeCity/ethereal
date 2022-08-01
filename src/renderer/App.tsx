import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MediaBar from './components/MediaBar/MediaBar';

export default function App() {
  return (
    <div>
      <MediaBar />
      <button type="button" onClick={() => window.electron.doAThing()}>
        CLICK ME
      </button>
    </div>
  );
}
