import { useSelector } from 'react-redux';
import axios from 'axios';
import { React } from 'react';

function ReviewFeedback() {


    // access the feedbackObject from the store
    const feedback = useSelector(store => store.feedbackRatings)
    return (
        <section>
            <h2>Review Ratings</h2>
            <p>Feelings: {feedback.feelingRating}</p>
            <p>Understanding: {feedback.understandingRating}</p>
            <p>Support: {feedback.supportRating}</p>
            <p> Comments: {feedback.userComment}</p>
        </section>
    );
}

export default ReviewFeedback;