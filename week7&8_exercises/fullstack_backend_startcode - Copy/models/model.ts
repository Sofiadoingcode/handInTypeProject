import mongoose from "mongoose";
import Review from '../models/reviewModel'

const carSchema = new mongoose.Schema({
    model: {
        type: String, 
        required: [true, "A car has to have a model"],
        trim: true, 
        maxLength: [20, "A car must have less than 21 characters"], 
        minLength: [2, "A car must have more than 1 characters"]
    }, 

    year: Number, 
    price: Number, 
    color: {
        type: String,
        enum: ['red', 'blue'],
        message: "Color needs to be red or blue"
    },
    createdAt: {
        type: Date, 
        default: Date.now(),
        select: false

    }, 
    //reviews: Array
}, {
    toJSON: {virtuals: true}, 
    toObject: {virtuals: true}
}
)

/*carSchema.pre('save', async function(next) {
    const reviewsPromises = this.reviews.map(id => Review.findById(id));
    this.reviews = await Promise.all(reviewsPromises);
    next();

}) */

/*carSchema.pre(/^find/, function() {
    this.populate({
        path: 'reviews', 
        select: '-__v -createdAt'
    })
}) */

carSchema.virtual('discount').get(function() {
    
    //@ts-ignore
    return this.price * 0.25;

})

const Car = mongoose.model('Car', carSchema);

export default Car;