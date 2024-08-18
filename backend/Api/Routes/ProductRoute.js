import express from "express";
import { ProductDetailsService } from "../Controllers/ProductDetailsServiceController.js";
const router = express.Router();

router.get("/products/:id", ProductDetailsService);

export default router;
