import React, { useState } from 'react';
import { useEffect } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comments = (props) => {
    const [comments, setComments] = useState([])
 
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postid}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            {
                comments.map(comment => <CommentDetail comment ={comment}></CommentDetail>)
            }
        </div>
    );
};

export default Comments;