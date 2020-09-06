import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



const Posts = (props) => {
    const {userId, id, title} = props.post;
    return (
        <div style={{border: '2px solid red', margin:'20px', padding:'20px', borderRadius:'20px'}}>
        
            <h3>Post Id : {id} </h3>
            <h2>Post Title : {title}</h2>
            <Link to={`/post/${id}`} style={{textDecoration:'none'}}><Button variant="contained" color="Secondary">READ MORE</Button></Link>

        </div>
    );
};

export default Posts;