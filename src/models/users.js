import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Name is a required field."] },
  email: {
    type: String,
    required: [true, "Email is a required field."],
    unique: true,
    validate: [validator.isEmail, "This is not a valid e-mail!"],
  },
});

export default mongoose.models.Users || mongoose.model("Users", userSchema);
