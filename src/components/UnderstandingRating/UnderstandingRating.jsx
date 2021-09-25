
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

// want to take the score inputted from
// the user input and dispatch it to the variable
// on the store in order to post it to the database

// to do this need to be able to dispatch the information
// create temporary storage variable to set the value of
// send the value of that storage variable to the store
// with an action

// submit button calls function to set variable value
// prevent default on button click



function UnderstandingRating() {
    // access useDispatch from react-redux
    // to dispatch information to the reducer on index.js

    const dispatch = useDispatch();

    // declare a variable to hold the data
    // that will be dispatched to the reducer
    const [understandingScore, setUnderstandingScore] = useState(0);

    // on form submit send object parameter 
    // and value to the reducer on index.js
    const handleSubmit = () => {
        event.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTANDING_RATING',
            payload: {
                understandingRating: understandingScore,
            }
        })
    }

    return (
        <>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={handleSubmit}>
        <input type="number" value={understandingScore} placeholder="1-5" onChange = {(event) => setUnderstandingScore(event.target.value)} />
        <button type="submit">NEXT</button>
        </form>
        </>
    );
}

export default UnderstandingRating;