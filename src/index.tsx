import App from './App';
import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);