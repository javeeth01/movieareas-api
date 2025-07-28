import express from 'express';

const router = express.Router();

// /movies/movies

router.get('/', (req , res) => {
  res.send("GET request received for movies");
  
})

router.post('/', (req, res) => {
    res.send("POST request received for movies");
})


router.put('/:id', (req, res) => {
    res.send("PUT request received for movies with ID");
})


router.delete('/:id', (req, res) => {
    res.send("DELETE request received for movies with ID");
})

export default router;