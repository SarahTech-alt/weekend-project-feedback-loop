import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';

function SupportRating() {

    // Same concept as FeelingRating component
    // See code comments there

    const [supportScore, setSupportScore] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT_RATING',
            payload: { 
                supportRating: supportScore
        }
    })
        history.push('/comment');
    }

    const checkNumber = (number) => {
        if (number < 1 || number > 5){
            alert('Number must be between 1 and 5');
            setSupportScore('');
        } else {
            setSupportScore(event.target.value)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1> How well are you being supported?</h1>
            <input required type="number" value={supportScore} placeholder="1-5" onChange = {(event) => checkNumber(event.target.value)} />
            <button type="submit">Next</button>
        </form>
        </>
    );
}

export default SupportRating;