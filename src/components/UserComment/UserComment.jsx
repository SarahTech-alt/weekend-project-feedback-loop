import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UserComment() {

    // Same concept as FeelingRating component
    // Refer there for code comments

    const dispatch = useDispatch();
    const [userComment, setUserComment] = useState('');

    const handleSubmit = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_USER_COMMENT',
            payload: {
                comment: userComment
            }
        })
        history.push('/feeling');
    }


    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userComment} onChange={() => { (event) => setUserComment(event.target.value) }} />
                <button type="submit">Next</button>
            </form>
        </>
    );
}

export default UserComment;