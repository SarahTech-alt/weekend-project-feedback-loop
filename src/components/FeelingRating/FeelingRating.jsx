import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// want to take the score inputted from
// the user input and dispatch it to the variable
// on the store in order to post it to the database

// to do this need to be able to dispatch the information
// create temporary storage variable to set the value of
// send the value of that storage variable to the store
// with an action

// submit button calls function to set variable value
// prevent default on button click



function FeelingRating() {
    // access useDispatch from react-redux
    // to dispatch information to the reducer on index.js

    const dispatch = useDispatch();

    // access useHistory from react-redux-dom
    // to navigate user to the next page on submit
    const history = useHistory();

    // declare a variable to hold the data
    // that will be dispatched to the reducer
    const [feelingScore, setFeelingScore] = useState('');

    // on form submit send object parameter 
    // and value to the reducer on index.js
    const handleSubmit = () => {
        event.preventDefault();

        dispatch({
            type: 'ADD_FEELING_RATING',
            payload: {
                feelingRating: feelingScore
            }
        })
        history.push('/understanding')
    }

    return (
        <>
        <h1>How are you feeling today?</h1>
        <form onSubmit={handleSubmit}>
        <input required type="number" value={feelingScore} placeholder="1-5" onChange = {(event) => setFeelingScore(event.target.value)} />
        <button type="submit">NEXT</button>
        </form>
        </>
    );
}

export default FeelingRating;