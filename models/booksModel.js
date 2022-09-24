const { timeStamp } = require("console");
const mongoose = require("mongoose");

const booksSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("books", booksSchema);
