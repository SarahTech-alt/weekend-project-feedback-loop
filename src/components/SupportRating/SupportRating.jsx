import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';

function SupportRating() {

    // Same concept as FeelingRating component
    // See code comments there

    const [supportScore, setSupportScore] = useState();
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

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1> How well are you being supported?</h1>
            <input required type="number" value={supportScore} onChange = {(event) => setSupportScore(event.target.value)} />
            <button type="submit">Next</button>
        </form>
        </>
    );
}

export default SupportRating;