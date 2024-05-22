import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    desc: {
        type: String,
        required: false,
    },
    billingInformation: [{
        fullName: {
            type: String,
            required: true,
        },
        companyName: String,
        stateRegion: String,
        address: String,
        city: String,
        postalCode: String,
        error: String,
        gigId: {
            type: String,
            required: true,
        }
    }],
    isSeller: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

export default mongoose.model('User', userSchema);