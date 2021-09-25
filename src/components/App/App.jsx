import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FeelingRating from '../FeelingRating/FeelingRating';
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating';
import SupportRating from '../SupportRating/SupportRating';
import UserComment from '../UserComment/UserComment';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';


function App() {

  // access store on app
  const feedbackRating = useSelector(store => store.feedbackRating);

  // Make app accessible on page load
  useEffect(() => {
    console.log('in useEffect');
  }, []);

  // const testRoute = () => {
  //   axios({
  //     method: 'POST',
  //     url: '/feedback',
  //     data: {
  //       feeling: 1,
  //       understanding: 1,
  //       support: 1,
  //       comments: 'none'
  //     }
  //   }).then(response => {
  //     console.log(response);
  //   }).catch(error => {
  //     console.log('there was an error', error);
  //   })
  // }



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>
      <p>{JSON.stringify(feedbackRating)}</p>
      <Router>
        <Route exact path ='/feeling'>
          <FeelingRating />
        </Route>
        <Route exact path='/understanding'>
          <UnderstandingRating />
        </Route>
        <Route exact path='/support'>
          <SupportRating />
        </Route>
        <Route exact path='/comment'>
          <UserComment />
        </Route>
        <Route exact path='/review'>
          <ReviewFeedback />
        </Route>
      </Router>
    </div>
  );
}

export default App;
