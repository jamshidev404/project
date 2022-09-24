const Users = require("../models/usersModel");

//Create User
exports.createUser = async (req, res) => {
  const user = new Users(req.body);

  await user
    .save()
    .then(() => {
      return res
        .status(201)
        .json({ success: true, message: "User created", user });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

//Get All users
exports.getAllUsers = async (req, res) => {
  await Users.find().exec((err, data) => {
    if (err)
      return res
        .status(404)
        .json({ success: false, message: "Users not found!" });
    return res.status(200).json({ success: true, data: data });
  });
};

//Get One User
exports.getOneUser = async (req, res) => {
  await Users.findOne({ _id: req.params.id })
    .populate({ path: "book_id", select: ["title", "author"] })
    .exec((err, data) => {
      if (err)
        return res
          .status(404)
          .json({ success: false, message: "User not found!" });
      return res.status(200).json({ success: true, data: data });
    });
};

//Update User
exports.updateUser = async (req, res) => {
  await Users.updateOne(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  ).exec((err, data) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, data: data });
  });
};

//Delete User
exports.deleteUser = async (req, res) => {
  await Users.deleteOne({ _id: req.params.id }).exec((err, data) => {
    if (err)
      return res.status(400).json({ success: false, message: "Went wrong" });
    return res.status(200).json({ success: true, data: [] });
  });
};
