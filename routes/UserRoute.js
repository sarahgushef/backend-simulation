import express from "express";
import User from "../models/UserModel.js";

const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    let user = {
      name: req.body.name,
      email: req.body.email,
    };

    await User.create(user);

    res.status(201).send({ msg: "User Created" });
  } catch (error) {
    res.send(error);
  }
});

export default router;
