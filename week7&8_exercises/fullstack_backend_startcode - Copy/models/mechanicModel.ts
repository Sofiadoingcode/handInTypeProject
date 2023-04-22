import mongoose from "mongoose";
import slugify from 'slugify';

const mechanicModel = new mongoose.Schema (
    {
        name: {
            type: String,
            trim: true, 
            required: [true, 'A mechanic must have a name'],
        },

        email: {
            type: String, 
            validate: {
                validator: function(email: string) {
                    return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
                }, 
                message: (props: {value: string;}) => `${props.value} is not a valid email address`
            }

        },

        role: {
            type: String, 
            enum: ['intern', 'mechanic', 'lead'],
            default: 'mechanic',

        },

        password: {
            type: String, 
            require: [true, 'Not valid pass'],
            minlength: [8, 'Must be 8 characters'],
            select: false,
        },

        createdAt: {
            type: Date,
            default: Date.now
        },

        car: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Car',
            required: [true, 'A mechanic must be assigned to a car']
        },

        slug: String


    }

)

mechanicModel.pre('save', function(next) {
    this.slug = slugify(this.name, {lower: true});
    next();
})

mechanicModel.pre(/^find/, function(next){
    this.populate({
        path: 'car'
    })
    next();
})

mechanicModel.post('save', function(doc, next) {
    console.log(doc);
    next();
})

const Mechanic = mongoose.model('Mechanic', mechanicModel);
export default Mechanic;