import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/shared/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
