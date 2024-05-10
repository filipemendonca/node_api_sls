import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  listUsers,
  updateUser,
} from "../services/users.services.js";
import { listOrders } from "../services/orders.services.js";

const router = Router();

router.get("/", async (req, res) => {
  const users = await listUsers();
  if (!users)
    res
      .status(404)
      .json({ status: "fail", errorMessage: "No data available." });
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user)
    res.status(404).json({ status: "fail", errorMessage: "User not found!" });
  res.json(user);
});

router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ status: "success", object: user });
  } catch (error) {
    res.status(400).json({ status: "fail", errorMessage: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    await updateUser(req.params.id, req.body);
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ status: "fail", errorMessage: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  const hasAnyOrderWithThisUser = (await listOrders()).some(
    (x) => x.user_id == userId
  );

  if (hasAnyOrderWithThisUser)
    res.status(400).json({
      status: "fail",
      errorMessage: "This user has one or more orders.",
    });

  await deleteUser(userId);
  res.send();
});

export default router;
