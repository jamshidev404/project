const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    isFree: {
      type: Boolean,
      default: true,
    },
    book_id: {
      type: mongoose.Schema.ObjectId,
      ref: "books",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", usersSchema);
