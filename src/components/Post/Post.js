import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: "10px",
      padding: "10px"
    }
  });

const Post = (props) => {
    const {title, body, id} = props.post;
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" color="secondary">
                            {title}
                    </Typography>
                    <Typography variant="body2" color="primary" component="p">
                        Body: {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={() => handleClick(id)}>
                    See More   
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;