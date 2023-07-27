const express = require("express");
const Product = require("../models/product");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Hello from server" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ videoId: id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/comments/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ videoId: id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/comment", (req, res) => {
  try {
    const { username, comment, videoId } = req.body;
    if (!username || !comment || !videoId) {
      throw new Error("Insufficient Parameter");
    }

    res.status(200).json({ username, comment, videoId });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
