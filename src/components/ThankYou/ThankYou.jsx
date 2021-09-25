import { useHistory } from 'react-router-dom';

function ThankYou() {
    const history = useHistory();

    const restartSurvey = () => {
        event.preventDefault();
        history.push('/feeling');
    }

    return (
        <>
        <h1>Thank you!</h1>
        <button onClick={restartSurvey}>Leave New Feedback</button>
        </>
    );
}

export default ThankYou;