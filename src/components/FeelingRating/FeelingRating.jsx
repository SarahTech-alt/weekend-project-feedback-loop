import { React, useState } from 'react';

function FeelingRating() {
    const [feelingScore, setFeelingScore] = useState(0);
    return (
        <>
        <h1>How are you feeling today?</h1>
        <form>
        <input type="number" value={feelingScore} placeholder="1-5" onChange = {(event) => setFeelingScore(event.target.value)} />
        <button type="submit">NEXT</button>
        </form>
        </>
    );
}

export default FeelingRating;