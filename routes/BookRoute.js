const router = require("express").Router();
const Book = require("../controllers/booksController");

router.post("/add", Book.createBook);
router.get("/getAll", Book.getAllBooks);
router.get("/getOne/:id", Book.getOneBook);
router.put("/updateOne/:id", Book.updateBook);
router.delete("/deleteOne/:id", Book.deleteBook);

module.exports = router;
