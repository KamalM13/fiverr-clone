import mongoose from "mongoose";
const { Schema } = mongoose;
const imageSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})
export default mongoose.model("Image", imageSchema);