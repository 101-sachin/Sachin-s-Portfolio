import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { WindowSizeContextProvider } from './context/WindowSizeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowSizeContextProvider>
      <App />
    </WindowSizeContextProvider>
  </React.StrictMode>
);
