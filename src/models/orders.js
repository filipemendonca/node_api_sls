import mongoose from "mongoose";
import {
  createUser,
  deleteUser,
  getUserById,
  listUsers,
  updateUser,
} from "../services/users.services.js";

const ordersSchema = mongoose.Schema({
  description: { type: String, required: true },
  user_id: {
    type: String,
    required: true,
    validate: {
      validator: async function (value) {
        const user = await getUserById(value);
        return user == null ? false : true;
      },
      message: "This is a invalid user.",
    },
  },
});

export default mongoose.models.Orders || mongoose.model("Orders", ordersSchema);
