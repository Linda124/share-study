import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import cs2030sReviewsMessage from '../models/cs2030sReviewsMessage.js'

export const getCS2030sReviews = async (req, res) => {
    try {
        const cs2030sMessages = await cs2030sReviewsMessage.find();
        const sortedByCreationDate = cs2030sMessages.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
        res.status(200).json(cs2030sMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
}

export const createCS2030sReviews = async (req, res) => {
    const cs2030sReview = req.body;

    const newcs2030sReviewsMessage = new cs2030sReviewsMessage({ ...cs2030sReview, creator: req.userId, createdAt: new Date().toISOString() });

    try {
        await newcs2030sReviewsMessage.save();

        //res.status(201).json(newCs2030sReview);
        res.status(201).json(newcs2030sReviewsMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCS2030sReview = async (req, res) => {
    const { id: _id } = req.params;
    const review = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No review with that id`);

    const updatedReview = await cs2030sReviewsMessage.findByIdAndUpdate(_id, { ...review, _id }, { new: true });

    res.json(updatedReview);
}

export const deleteCS2030sReview = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No review with that id`);

    await cs2030sReviewsMessage.findByIdAndRemove(id);

    res.json({ message: "Review deleted successfully." });
}
                                                                                 

export const likeCS2030sReview = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) return res.json({ message: 'Unauthenticated' });

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No review with that id`);
    
    const review = await cs2030sReviewsMessage.findById(id);

    const index = review.likes.findIndex((id) => id === String(req.userId));

    if(index === -1) {
        // like the post
        review.likes.push(req.userId);
    } else {
        review.likes = review.likes.filter((id) => id !== String(req.userId));
    }

    const updatedReview = await cs2030sReviewsMessage.findByIdAndUpdate(id, review, { new: true });
    
    res.status(200).json(updatedReview);
}