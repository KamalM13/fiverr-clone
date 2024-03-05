import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
    gigId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1, 
        max: 5,
    },
    desc: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Review', reviewSchema);