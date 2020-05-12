import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tank from "./components/tank/Tank";
import FishMake from "./components/fishSubmit/fishMake";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FishMake />
        <Tank/>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
