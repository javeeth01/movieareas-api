import express from 'express';
import { movieCreate, movieDelete, movieIndex, movieUpdate } from '../controller/movie.controller.js';

const router = express.Router();

// /movies/movies

router.get("/", movieIndex)

router.post("/", movieCreate)


router.put("/:id", movieUpdate)


router.delete("/:id", movieDelete)

export default router;