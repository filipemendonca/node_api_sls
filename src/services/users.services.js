// import UserSchema from "../models/users.js";
const UserSchema = require("../models/users.js");

const listUsers = async () => await UserSchema.find();
const getUserById = async (id) => await UserSchema.findById(id);
const createUser = async (user) => await UserSchema.create(user);
const updateUser = async (id, user) =>
  await UserSchema.findByIdAndUpdate(id, user);
const deleteUser = async (id) => await UserSchema.findOneAndDelete(id);

module.exports = {
  listUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
