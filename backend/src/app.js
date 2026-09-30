const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
 
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "ByYourSide backend is running",
  });
});

app.use("/api/auth", authRoutes);

 

module.exports = app;