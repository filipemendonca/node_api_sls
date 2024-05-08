import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  listUsers,
  updateUser,
} from "../services/users.services.js";

const router = Router();

router.get("/", async (req, res) => {
  const users = await listUsers();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) res.status(404).send({ errorMessage: "User not found!" });
  res.send(user);
});

router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await updateUser(req.params.id, req.body);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  await deleteUser(req.params.id);
  res.send();
});

export default router;
