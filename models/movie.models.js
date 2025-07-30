import { Schema } from "mongoose";
import { model } from "mongoose";


//write the schema for the movie model
const schema = new Schema({
  title: String,
  desc: String,
});


//create the model 
const movie = model("Movie", schema);

export default movie;