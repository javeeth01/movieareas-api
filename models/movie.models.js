import { Schema } from "mongoose";
import { model } from "mongoose";


//write the schema for the movie model
const schema = new Schema({
  title:{
    type: String,
    required: true,
    unique: true, // Ensure title is unique
    trim: true, // Remove leading and trailing whitespace
  },
  desc: {
    type: String,
    required: true,
  },
});


//create the model 
const movie = model("Movie", schema);

export default movie;