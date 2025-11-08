import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@gatewatcher/skin/style.css';

import { App } from './App';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
