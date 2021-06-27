import mongoose from 'mongoose';

const cs2030sReviewsSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const cs2030sReviewsMessage = mongoose.model('cs2030sReviewsMessage', cs2030sReviewsSchema);

export default cs2030sReviewsMessage;