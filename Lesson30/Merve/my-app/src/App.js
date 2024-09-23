import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo className="App-logo" alt="logo" />
        <h1>Hello, y'all!</h1>
        <p>This is my first step to magical world of React!</p>
      </header>
    </div>
  );
}

export default App;