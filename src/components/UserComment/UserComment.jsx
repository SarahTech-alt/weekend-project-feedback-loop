import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function UserComment() {

    // Same concept as FeelingRating component
    // Input here is text and is not required

    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_USER_COMMENT',
            payload: {
                userComment: newComment
            }
        })
        history.push('/review');
    }
    

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newComment} onChange={ (event) => setNewComment(event.target.value) } />
                <button type="submit">Next</button>
            </form>
        </>
    );
}

export default UserComment;