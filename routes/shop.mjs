import express from "express";
import path from "path";
import rootDir from "../utils/root-dir.mjs";
import { products } from "./admin.mjs";
const router = express.Router();
router.get("/", (req, res, next) => {
  console.log(products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

export default router;