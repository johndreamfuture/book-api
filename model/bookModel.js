let mongoose = require('mongoose')
//Create Mongoose Model

let BookModel = mongoose.model("book", new mongoose.Schema({
  name: String,
  author: String,
  year: Number
}))

module.exports = BookModel