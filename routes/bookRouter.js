const express = require("express");

const router = express.Router();

const Book = require("../models/Book.js");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find(); //Find all books in MongoDB, wait till u get them
    res.json(books); //send those books back to client once the're here.
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
});

router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: "Failed to create book" });
  }
});

module.exports = router;
