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
import ThankYou from '../ThankYou/ThankYou';


function App() {

  // access store on app
  const feedbackRating = useSelector(store => store.feedbackRating);

  // Make app accessible on page load
  useEffect(() => {
    console.log('in useEffect');
  }, []);

  // Header displays on all the pages
  // Router encloses all the routes for different components
  // paths allow user to move throughout the components
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>
      <p>{JSON.stringify(feedbackRating)}</p>
      <Router>
        <Route exact path ='/'>
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
        <Route exact path='/thanks'>
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
