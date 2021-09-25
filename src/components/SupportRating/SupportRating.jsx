import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';

function SupportRating() {

    const [supportScore, setSupportScore] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING_RATING',
            payload: { 
                supportRating: supportScore
        }
    })
        history.push('/feeling');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1> How well are you being supported?</h1>
            <input type="number" value={supportScore} onChange={() => {(event) => setSupportScore(event.target.value)}} />
            <button type="submit">Next</button>
        </form>
        </>
    );
}

export default SupportRating;