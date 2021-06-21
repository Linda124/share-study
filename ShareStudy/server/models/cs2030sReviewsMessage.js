import mongoose from 'mongoose';

const cs2030sReviewsSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const cs2030sReviewsMessage = mongoose.model('cs2030sReviewsMessage', cs2030sReviewsSchema);

export default cs2030sReviewsMessage;