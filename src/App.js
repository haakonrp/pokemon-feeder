import React from 'react';
import Pokemon from './components/Pokemon'
import Logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <img src={Logo} className="logo" alt="Pokemon Logo" />
      <Pokemon/>
    </div>
  );
}

export default App;
