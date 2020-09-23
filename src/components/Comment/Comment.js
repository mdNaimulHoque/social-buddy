import React, { useEffect, useState } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comment = (props) => {
    const {postId} = props;
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h2>Comment |</h2>
            {
                comment.map(comment => <CommentDetail comment={comment} key={comment.id}></CommentDetail>)
            }
        </div>
    );
};

export default Comment;