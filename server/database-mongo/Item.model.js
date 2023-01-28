const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  category: String,
  itemName: String,
  urlImage: String,
  description: String,
  ownerName: String,
  ownerTel: Number,
  ownerAdress: String,
  state: String,
  createdAt:{
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model("Item", itemSchema);


module.exports = Item;
