import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import useStyles from './styles.js';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteReview, likeReview } from '../../../actions/reviews'


const Review = ({ review, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (review.likes.length > 0) {
        return review.likes.find((like) => like === user?.result?._id)
            ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{review.likes.length > 2 ? `You and ${review.likes.length - 1} others` : `${review.likes.length} like${review.likes.length > 1 ? 's' : ''}` }</>
            ) : 
            (
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{review.likes.length} {review.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };


    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={review.selectedFile} title={review.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{review.name}</Typography>
                <Typography variant="body2">{moment(review.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?._id === review?.creator) && (
            <div className={classes.overlay2}>
                <Button 
                    style={{ color: 'white' }} 
                    size="small" 
                    onClick={() => setCurrentId(review._id)}>
                    <EditIcon /> Edit
                </Button>
            </div>)}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{review.tags.map((tag) => `${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{review.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{review.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likeReview(review._id))}>
            <Likes />
        </Button>
        {(user?.result?._id === review?.creator) && (
        <Button size="small" color="primary" onClick={() => dispatch(deleteReview(review._id))}>
            <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
    );
};

export default Review;