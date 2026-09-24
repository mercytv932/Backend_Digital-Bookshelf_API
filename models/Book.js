const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, unique: true },
  inStock: { type: Boolean, default: true },
  publishedDate: Date,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
