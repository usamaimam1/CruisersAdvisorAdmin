import React from 'react';
import logo from './Logo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{ width: 150, height: 100 }} />
        <text style={{ padding: 10 }}>CruisersADVISOR ADMIN</text>
        <text style={{ padding: 10 }}>Build Here</text>
      </header>
    </div>
  );
}

export default App;
