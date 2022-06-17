//import mongoose to get schema object
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a new schema for product
const product = new Schema({
  title: String,
  price: Number,
  likes: { type: Number, default: 0 },
});

//export after converting schema to model
module.exports = mongoose.model("Product", product);
