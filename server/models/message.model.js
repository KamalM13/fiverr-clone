import mongoose from 'mongoose';
const { Schema } = mongoose;

const chatSchema = new Schema({
    chatId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});

export default mongoose.model('Chat', chatSchema);