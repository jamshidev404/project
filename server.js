const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/users", require("./routes/UsersRoute"));
app.use("/api/books", require("./routes/BookRoute"));

//connecting
const port = process.env.PORT;
const database = process.env.DATABASE;

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Server connecting");
  })
  .catch((err) => {
    console.log(err, "Disconnected");
  });

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
