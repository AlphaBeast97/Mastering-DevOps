import express from "express";

const router = express.Router();

router.post("/sign-up", (res, req) => {
  res.send("Sign up route");
});

router.post("/sign-in", (res, req) => {
  res.send("Sign in route");
});

router.post("/sign-out", (res, req) => {
  res.send("Sign out route");
});

export default router;
