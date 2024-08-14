import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GameOfMemory from './GameOfMemory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameOfMemory />
  </React.StrictMode>
);
