import UserSchema from "../models/users.js";

export const listUsers = async () => await UserSchema.find();

export const getUserById = async (id) => await UserSchema.findById(id);

export const createUser = async (user) => await UserSchema.create(user);

export const updateUser = async (id, user) =>
  await UserSchema.findByIdAndUpdate(id, user);

export const deleteUser = async (id) => await UserSchema.findOneAndDelete(id);
