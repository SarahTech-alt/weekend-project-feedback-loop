import { useDispatch } from 'react-redux';
import { React, useState } from 'react';

function SupportRating() {

    const [supportScore, setSupportScore] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING_RATING',
            payload: { 
                supportRating: supportRating
        }
    })
        history.push('/feeling');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="number" value={supportScore} onChange={() => {(event) => setSupportScore(event.target.value)}} />
            <button type="submit">Next</button>
        </form>
        </>
    );
}

export default SupportRating;