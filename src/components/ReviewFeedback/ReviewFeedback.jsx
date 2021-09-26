import { useSelector } from 'react-redux';
import axios from 'axios';
import { React } from 'react';
import { useHistory } from 'react-router-dom';

function ReviewFeedback() {
        // access the feedbackObject from the store
        const feedback = useSelector(store => store.feedbackRatings)
        const history = useHistory();

    const goBack = () => {
        history.push('/feeling');
    }

    const postFeedback = () => {
        event.preventDefault();
        axios({
          method: 'POST',
          url: '/feedback',
          data: {
            feeling: feedback.feelingRating,
            understanding: feedback.understandingRating,
            support: feedback.supportRating,
            comments: feedback.userComment
          }
        }).then(response => {
          console.log(response);
        }).catch(error => {
          console.log('there was an error posting to database', error);
        })
        history.push('/thanks')
      }



    return (
        <section>
            <h2>Review Ratings</h2>
            <p>Feelings: {feedback.feelingRating}</p>
            <p>Understanding: {feedback.understandingRating}</p>
            <p>Support: {feedback.supportRating}</p>
            <p> Comments: {feedback.userComment}</p>
            <button onClick={postFeedback}>Submit</button>
            <button onClick={goBack}>Edit Feedback</button>
        </section>
    );
}

export default ReviewFeedback;