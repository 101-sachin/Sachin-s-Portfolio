const express = require("express");
const router = express.Router();
const db = require("../dbconfig/dbconfig");

router.get("/", async (req, res) => {
  try {
    const [skills] = await db.query("SELECT skills FROM profile");
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills" });
  }
});

module.exports = router;
