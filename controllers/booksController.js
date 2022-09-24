const Book = require("../models/booksModel");

//Create Book
exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  await book
    .save()
    .then(() => {
      return res
        .status(201)
        .json({ success: true, message: "Book created", book });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

//Get All Books
exports.getAllBooks = async (req, res) => {
  await Book.find().exec((err, data) => {
    if (err)
      return res
        .status(404)
        .json({ success: false, message: "Books not found!" });
    return res.status(200).json({ success: true, data: data });
  });
};

//Get One Book
exports.getOneBook = async (req, res) => {
  await Book.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err)
      return res
        .status(404)
        .json({ success: false, message: "Book not found!" });
    return res.status(200).json({ success: true, data: data });
  });
};

//Update Book
exports.updateBook = async (req, res) => {
  await Book.updateOne(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  ).exec((err, data) => {
    if (err)
      return res.status(400).json({ success: false, message: "Went wrong!" });
    return res.status(200).json({ success: true, data: data });
  });
};

//Delete Book
exports.deleteBook = async (req, res) => {
  await Book.deleteOne({ _id: req.params.id }).exec((err, data) => {
    if (err)
      return res.status(400).json({ success: false, message: "Went wrong!" });
    return res.status(200).json({ success: true, data: [] });
  });
};
