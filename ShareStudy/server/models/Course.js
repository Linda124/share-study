// import { Schema, model } from "mongoose";
import mongoose from "mongoose";


const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Course = mongoose.model('course', courseSchema);

export default Course;

// export default Course;