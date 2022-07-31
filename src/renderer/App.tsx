import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MediaBar from './components/MediaBar/MediaBar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MediaBar />} />
      </Routes>
    </Router>
  );
}
