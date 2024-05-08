import OrdersSchema from "../models/orders.js";

export const listOrders = async () => await OrdersSchema.find();

export const getOrderById = async (id) => await OrdersSchema.findById(id);

export const createOrder = async (user) => await OrdersSchema.create(user);

export const updateOrder = async (id, user) =>
  await OrdersSchema.findByIdAndUpdate(id, user);

export const deleteOrder = async (id) =>
  await OrdersSchema.findOneAndDelete(id);
