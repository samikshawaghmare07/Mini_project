const express = require("express");
const router = express.Router();

// Temporary in-memory storage
let rooms = [];

// Add room (OWNER)
router.post("/add", (req, res) => {
  const room = req.body; // 👈 THIS JSON COMES HERE
  rooms.push(room);

  res.json({ message: "Room added successfully", room });
});

// Get all rooms (USER)
router.get("/", (req, res) => {
  res.json(rooms);
});

module.exports = router;
