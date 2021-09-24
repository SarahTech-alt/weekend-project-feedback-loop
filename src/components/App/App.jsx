import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  // Make app accessible on page load
  useEffect(() => {
    console.log('in useEffect');
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
