import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

function UserComment() {

    // Same concept as FeelingRating component
    // Refer there for code comments

    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('');

    const handleSubmit = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_USER_COMMENT',
            payload: {
                userComment: newComment
            }
        })
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