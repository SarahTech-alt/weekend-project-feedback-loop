import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux'; 

const feedbackObject = {FeelingRating: '', 
UnderstandingRating: '', 
SupportRating: '', 
UserComment: '', 
ReviewFeedback: '',}

const feedbackReducer = (state = [feedbackObject], action) => {
    return state;
}

const reduxStore = createStore(
    combineReducers(
    {feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
