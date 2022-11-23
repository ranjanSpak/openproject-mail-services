import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './components/mails/sendMails'
import './App.css';

function App() {
  return (
    <div className="App m-4">
      <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>
    </div>
  );
}

export default App;
