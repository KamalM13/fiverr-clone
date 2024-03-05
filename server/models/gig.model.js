import mongoose from 'mongoose';
const { Schema } = mongoose;

const gigSchema = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    imgs: {
        type: [String],
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
    shortTitle: {
        type: String,
        required: true,
    },
    shortDesc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    delivery: {
        type: Number,
        required: true,
    },
    revisions: {
        type: Number,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    ratingNumber: {
        type: Number,
        default: 0,
    },
    sales: {
        type: Number,
        default: 0,
    },
    comments: {
        type: [],
        required: false,
    }

}, {
    timestamps: true,
});

export default mongoose.model('Gig', gigSchema);