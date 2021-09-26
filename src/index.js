import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux'; 

const feedbackObject = {feelingRating: '', 
understandingRating: '', 
supportRating: '', 
userComment: '', 
};

// Looks for dispatch actions and updates the feedbackObject
// if there is a matching action

const feedbackRatings = (state = feedbackObject, action) => {
    if(action.type==='ADD_FEELING_RATING'){
        return { ...state, ...action.payload};
    } else if (action.type==='ADD_UNDERSTANDING_RATING') {
        return {...state, ...action.payload};
    } else if (action.type==='ADD_SUPPORT_RATING') {
        return {...state, ...action.payload};
    } else if (action.type==='ADD_USER_COMMENT') {
        return {...state, ...action.payload};
    }
    return state;
}

// Creates a store to be accessed for the POST request
// in ReviewFeedback

const reduxStore = createStore(
    combineReducers(
    {feedbackRatings
    }),
    applyMiddleware(logger)
);

// Renders the app on the dom
// provider makes the store available to everything within the app
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
