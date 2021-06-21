import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteReview, likeReview } from '../../../actions/reviews'


const Review = ({ review, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={review.selectedFile} title={review.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{review.creator}</Typography>
                <Typography variant="body2">{moment(review.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{ color: 'white' }} 
                    size="small" 
                    onClick={() => setCurrentId(review._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{review.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{review.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{review.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likeReview(review._id))}><ThumbUpAltIcon fontSize="small" /> Like {review.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deleteReview(review._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
    );
};

export default Review;