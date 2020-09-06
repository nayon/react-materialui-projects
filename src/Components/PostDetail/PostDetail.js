import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            
            <h2>Posted Id : {post.id}</h2>
            <h2>Posted Title : {post.title}</h2>
            <h2>Post Details : {post.body}</h2>
            <Comments postid ={postId}></Comments>

                        

        </div>
    );
};

export default PostDetail;