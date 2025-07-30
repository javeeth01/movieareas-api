 import express from 'express';
 
 
export const movieIndex = (req, res) => {
    res.send("GET request received for movies");
};

export const movieCreate = (req, res) => {
    //create a movie
    //id, title, description 
    console.log(req.body);

    return res.json(req.body);
    
};

export const movieUpdate = (req, res) => {
    const movieId = req.params.id;
    res.send(`PUT request received for movies with ID: ${movieId}`);
};

export const movieDelete = (req, res) => {
    const movieId = req.params.id;
    res.send(`DELETE request received for movies with ID: ${movieId}`);
};
