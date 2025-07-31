import Movie from "../models/movie.models.js";
 
 
export const movieIndex = async (req, res) => {
   try {
    const movies = await Movie.find();
   res.json(movies);
   } catch (error) {
    res.status(500).json({ message: "Error fetching movies", error: error.message });
   }
};

export const movieCreate = async (req, res) => {
    //id, title, description 
    //validate the request body

   const newMovie = new Movie ({
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

export const movieDetail = async (req, res) => {
  try {
     const movie = await Movie.findById(req.params.id)
     if (movie == null){
        return res.status(404).json({ message: "Movie not found" });
     } else {
      res.json(movie);
     }

    } catch (error) {
        res.status(500).json({ message: "Error updating movie", error: error.message });
    }
}

export const movieUpdate = async (req, res) => {
  //validate the request body

  try {
    const updatedMovie = await Movie.findById({_id: req.params.id} ,{
    title: req.body.title,
    desc: req.body.desc
  },{
      upsert: true,
      new: true,
  });
   res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: "Error updating movie", error: error.message });
  }


/*   if(req.body.title != null ) {
    res.movie.title = req.body.title;
  }

  if(req.body.desc != null ) {
    res.movie.desc = req.body.desc;
  }
 */
 /*  try {
    const updatedMovie = await req.movie.save();
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: "Error updating movie", error: error.message });
  } */
};

export const movieDelete = async (req, res) => {
  const movieId = req.params.id;
  const foundMovie = Movie.findOne({ _id: movieId })

  try{
    await Movie.findOne({ _id: movieId }).deleteOne();
    res.json({message: "Movie deleted successfully"});
  } catch (error) {
    return res.status(404).json({ message: "Movie not found", error: error.message });
  }


  res.send('Movie deleted successfully');
};
