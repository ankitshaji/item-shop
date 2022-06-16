//import mongoose to get schema object
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//ObjectId type
const ObjectId = mongoose.Schema.Types.ObjectId;

//create a new schema for wishlist
//products references - Product model and requires an ObjectId type
const wishList = new Schema({
  title: { type: String, default: "Default Wish List" },
  products: [{ type: ObjectId, ref: "Product" }],
});

//export after converting schema to model
module.exports = mongoose.model("WishList", wishList);
