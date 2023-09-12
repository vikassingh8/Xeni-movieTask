import express from "express";
import cors from 'cors';
import axios from "axios";
import movieSchemas from "../Models/movieSchemas.js";



const app = express()
app.use(cors())
app.use(express.json())



app.get('/movie', async (req, res) => {

    try {
        const movie = await movieSchemas.find()

        res.status(201).json(movie);

    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "somthing wrong", error: true });
    }
});
app.post('/moviePost', async (req, res) => {
    const { poster_path, vote_average, release_date, original_language, title, movieId } = req.body;
    try {
        const addedMovie = await movieSchemas.findOne({ movieId })
        if (addedMovie) {
            res.status(200).json({ message: "Deleted" });
        } else {

            const movie = await movieSchemas.create({ poster_path, vote_average, release_date, original_language, title, movieId });
            res.status(201).json(movie);
        }

    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "somthing wrong", error: true });
    }
});
app.delete('/movieDelete/:id', async (req, res) => {



    try {
        const resourceId = req.params.id;
        await movieSchemas.deleteOne({ movieId: resourceId })
        res.status(204).json({ message: "Deleted" });
    } catch (error) {
        console.log(error)
    }
});

app.put('/movieUpdate', async (req, res) => {
    const { movieId, watch } = req.body;
    try {
        const updatedMovie = await movieSchemas.findOneAndUpdate(
            { movieId: movieId },
            { $set: { watch: watch } },
            { new: true }, // Return the updated document

        );
        if (updatedMovie) {
            res.status(200).json({ message: "Updated" });
        } else {
            res.status(400).json({ message: "Not update something wents wrong" });
        }
    } catch (error) {
        console.log(error)
    }
})

export default app;