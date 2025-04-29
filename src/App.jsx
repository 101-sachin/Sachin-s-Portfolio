import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { WindowSizeContextProvider } from './context/WindowSizeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowSizeContextProvider>
      <h1>Hello World</h1>
    </WindowSizeContextProvider>
  </React.StrictMode>
);
