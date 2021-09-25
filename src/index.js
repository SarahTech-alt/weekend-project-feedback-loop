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
reviewFeedback: '',};

const feedbackRatings = (state = feedbackObject, action) => {
    if(action.type='ADD_FEELING_RATING'){
        return { ...state, ...action.payload};
    }
    return state;
}

const reduxStore = createStore(
    combineReducers(
    {feedbackRatings
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
