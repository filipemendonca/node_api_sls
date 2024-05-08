import { Router } from "express";
import {
  createOrder,
  listOrders,
  deleteOrder,
  updateOrder,
  getOrderById,
} from "../services/orders.services.js";

const router = Router();

router.get("/", async (req, res) => {
  const orders = await listOrders();
  res.send(orders);
});

router.get("/:id", async (req, res) => {
  const order = await getOrderById(req.params.id);
  if (!order) res.status(404).send({ errorMessage: "Order not found!" });
  res.send(order);
});

router.post("/", async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await updateOrder(req.params.id, req.body);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  await deleteOrder(req.params.id);
  res.send();
});

export default router;
