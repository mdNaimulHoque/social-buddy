import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './PostDetail.css';
import Comment from '../Comment/Comment';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(200),
        height: theme.spacing(16),
      },
    },
  }));

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    const {title, body} = post;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    
    const classes = useStyles();

    return (    
        <Paper className={classes.paper}>
            <Avatar aria-label="recipe" className={classes.avatar}>
                
            </Avatar>
            <Typography gutterBottom variant="h5" component="h2" color="secondary">
                Name: {title}
            </Typography>
            <Typography variant="body2" color="primary" component="p">
                Post: {body}
            </Typography>
            <Comment postId={postId}></Comment>
        </Paper> 
    );
};

export default PostDetail;