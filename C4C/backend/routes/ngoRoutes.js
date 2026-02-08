const express = require("express");
const NGO = require("../models/NGO");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ngos = await NGO.find();
    res.json(ngos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
