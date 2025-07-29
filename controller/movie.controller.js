 import express from 'express';
 
 
export const movieIndex = (req, res) => {
    res.send("GET request received for movies");
};

export const movieCreate = (req, res) => {
    res.send("POST request received for movies");
};

export const movieUpdate = (req, res) => {
    const movieId = req.params.id;
    res.send(`PUT request received for movies with ID: ${movieId}`);
};

export const movieDelete = (req, res) => {
    const movieId = req.params.id;
    res.send(`DELETE request received for movies with ID: ${movieId}`);
};
