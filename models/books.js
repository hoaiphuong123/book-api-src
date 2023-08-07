const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  page: Number,
  genres: [String],
  rating: Number,
});

const BookModel = mongoose.model('books', BookSchema);

module.exports =BookModel;
