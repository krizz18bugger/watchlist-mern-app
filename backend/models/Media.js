import mongoose from "mongoose";

const mediaSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true},
    category: {
        type: String},
    status: {
        type: String},
    rating: {
        type: Number,
        default: 0}
});
export default mongoose.model("Media", mediaSchema);