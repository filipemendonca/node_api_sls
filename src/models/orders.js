import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
  description: { type: String, required: true },
  user_id: { type: String, required: true },
});

export default mongoose.models.Orders || mongoose.model("Orders", ordersSchema);
