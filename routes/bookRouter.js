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

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to get book by ID" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id, // which book to update
      req.body, // the new information
      { new: true }, //gives us the updated book
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to update book" });
  }
});

module.exports = router;
