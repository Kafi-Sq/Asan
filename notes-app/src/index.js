import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import { NotesContextProvider } from './store/notes-context';

ReactDOM.render(
  <NotesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </NotesContextProvider>,
  document.getElementById('root')
);