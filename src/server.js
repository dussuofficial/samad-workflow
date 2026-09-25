const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Express API is running on Vercel 🚀"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

module.exports = app;
