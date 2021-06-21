import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createReview, updateReview } from '../../actions/reviews.js';

const Form = ({ currentId, setCurrentId}) => {
    const [reviewData, setReviewData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: '', });
    const review = useSelector((state) => (currentId ? state.reviews.find((message) => message._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(review) setReviewData(review);
    }, [review])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateReview(currentId, reviewData));
        } else {
            dispatch(createReview(reviewData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setReviewData({creator: '', title: '', message: '', tags: '', selectedFile: '' });
        
      };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Editing' : 'Creating' } a Review</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={reviewData.creator} onChange={(e) => setReviewData({ ...reviewData, creator: e.target.value })}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={reviewData.title} onChange={(e) => setReviewData({ ...reviewData, title: e.target.value })}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={reviewData.message} onChange={(e) => setReviewData({ ...reviewData, message: e.target.value })}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={reviewData.tags} onChange={(e) => setReviewData({ ...reviewData, tags: e.target.value })}/>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setReviewData({ ...reviewData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;