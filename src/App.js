import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PersonForm } from './features/person/PersonForm';
import { PersonCard } from './features/person/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonForm></PersonForm>
        <PersonCard></PersonCard>
      </header>
    </div>
  );
}

export default App;
