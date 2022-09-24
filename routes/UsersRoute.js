const router = require("express").Router();
const Users = require("../controllers/usersController");

router.post("/add", Users.createUser);
router.get("/getAll", Users.getAllUsers);
router.get("/getOne/:id", Users.getOneUser);
router.put("/updateOne/:id", Users.updateUser);
router.delete("/deleteOne/:id", Users.deleteUser);

module.exports = router;
