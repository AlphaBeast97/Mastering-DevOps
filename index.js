import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

const PROT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from a container",
    service: "hello-node",
    pod: process.env.POD_NAME || "unknown",
    time: new Date().toISOString(),
  });
});

app.get("/readyz", (req, res) => {
  res.status(200).send("ready");
});

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

app.listen(PROT, () => {
  console.log(`Server is running on port ${PROT}`);
});
