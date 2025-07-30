import movie from "../models/movie.models.js";
 
 
export const movieIndex = (req, res) => {
    res.send("GET request received for movies");
};

export const movieCreate = async(req, res) => {
    //id, title, description 
    //validate the request body

   const newMovie = new movie ({
        title: req.body.title,
        desc: req.body.desc
    });

   try {
     const movie = await newMovie.save()
     return res.status(201).json(movie);
   } catch (error) {
     return res.status(400).json({ message: error.message });
   }
};

export const movieUpdate = (req, res) => {
    const movieId = req.params.id;
    res.send(`PUT request received for movies with ID: ${movieId}`);
};

export const movieDelete = (req, res) => {
    const movieId = req.params.id;
    res.send(`DELETE request received for movies with ID: ${movieId}`);
};
