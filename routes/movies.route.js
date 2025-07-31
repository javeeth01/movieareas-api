import express from 'express';
import { movieCreate, movieDelete, movieIndex, movieUpdate , movieDetail} from '../controller/movie.controller.js';

const router = express.Router();

// /movies/movies

router.get("/", movieIndex)

router.post("/", movieCreate)

router.get("/:id", movieDetail) // This should be a GET request, but the function is named movieUpdate, which is misleading. It should probably be movieShow or similar.

router.put("/:id", movieUpdate)


router.delete("/:id", movieDelete)

export default router;