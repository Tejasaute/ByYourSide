const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "ByYourSide backend is running",
  });
});

 

module.exports = app;