import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    gigId: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    buyerId: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    billingInfo:{
        fullName: {
            type: String,
            required: true,
        },
        companyName: String,
        stateRegion: String,
        address: String,
        city: String,
        postalCode: String,
    }
}, {
    timestamps: true,
});

export default mongoose.model('Order', orderSchema);