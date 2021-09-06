const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json({
      success: true,
      data: users,
      msg: "show all users",
    });
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
      msg: `show user with id ${id}`,
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, age, hobbies } = req.body;
    const user = await User.create({ firstName, lastName, age, hobbies });

    res.json({
      msg: `user with id ${user.id}`,
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    res.json({
      msg: `user with id ${user.id} deleted`,
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age, hobbies } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, age, hobbies },
      { new: true }
    );

    res.json({
      msg: `user with id ${id} updated`,
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
