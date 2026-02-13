const express = require("express");
const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("FlatBuddy Backend Running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const roomRoutes = require("./routes/roomRoutes");
app.use("/api/rooms", roomRoutes);

