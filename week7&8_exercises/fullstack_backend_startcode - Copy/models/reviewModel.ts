import mongoose, { Mongoose } from "mongoose";

const reviewModel = new mongoose.Schema({

    review: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Review = mongoose.model('Review', reviewModel);
export default Review;