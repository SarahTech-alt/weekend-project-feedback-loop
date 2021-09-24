import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FeelingRating from '../FeelingRating/FeelingRating';


function App() {

  // Make app accessible on page load
  useEffect(() => {
    console.log('in useEffect');
  }, []);

  const testRoute = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling: 1,
        understanding: 1,
        support: 1,
        comments: 'none'
      }
    }).then(response =>{
      console.log(response);}).catch(error => {
        console.log('there was an error', error);
      })
  }

  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <button onClick={testRoute}>Test</button>
      </header>
      <FeelingRating />
    </div>
  );
}

export default App;
