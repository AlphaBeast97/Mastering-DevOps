import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from mastering DevOps!");
});

export default app;
