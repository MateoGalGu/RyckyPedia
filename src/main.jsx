import React from 'react';
import ReactDOM from 'react-dom/client';


import './styles.css';
import { PersonajesApp } from './PersonajesApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <PersonajesApp />
      </BrowserRouter>
  </React.StrictMode>,
)
