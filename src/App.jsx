import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './components/personList';
import PersonInput from './components/personInput';

function App() {
  return (
    <div className="App">
      <PersonInput/>
      <PersonList/>
    </div>
  );
}

export default App;
