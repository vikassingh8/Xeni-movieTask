import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    original_language:
    {
        type: String,
        required: true
    },
    release_date:
    {
        type: String,
        required: true
    },
    vote_average:
    {
        type: String,
        required: true
    },
    poster_path:
    {
        type: String,
        required: true
    },
    watch:
    {
        type: String,
        default:"false"
    },
});
export default mongoose.model('Movies', movieSchema);