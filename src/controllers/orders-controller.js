"use strict";

const { Router } = require("express");
const {
  createOrder,
  listOrders,
  deleteOrder,
  updateOrder,
  getOrderById,
} = require("../services/orders.services.js");

const router = Router();

router.get("/", async (req, res) => {
  const orders = await listOrders();
  if (!orders)
    res
      .status(404)
      .json({ status: "fail", errorMessage: "No data available." });
  res.json(orders);
});

router.get("/:id", async (req, res) => {
  const order = await getOrderById(req.params.id);
  if (!order)
    res.status(404).json({ status: "fail", errorMessage: "Order not found!" });
  res.json(order);
});

router.post("/", async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json({ status: "success", object: order });
  } catch (error) {
    res.status(400).json({ status: "fail", errorMessage: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    await updateOrder(req.params.id, req.body);
    res.send();
  } catch (error) {
    res.status(400).json({ status: "fail", errorMessage: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  await deleteOrder(req.params.id);
  res.send();
});

module.exports = router;
