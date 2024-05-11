// import OrdersSchema from "../models/orders.js";
const OrdersSchema = require("../models/orders.js");

const listOrders = async () => await OrdersSchema.find();

const getOrderById = async (id) => await OrdersSchema.findById(id);

const createOrder = async (user) => await OrdersSchema.create(user);

const updateOrder = async (id, user) =>
  await OrdersSchema.findByIdAndUpdate(id, user);

const deleteOrder = async (id) => await OrdersSchema.findOneAndDelete(id);

module.exports = {
  listOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
