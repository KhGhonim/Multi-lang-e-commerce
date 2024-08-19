import express from "express";
import { ProductDetailsService } from "../Controllers/ProductDetailsServiceController.js";
import { ProductSlidersService } from "../Controllers/ProductSlidersServiceController.js";
const router = express.Router();

router.get("/products/:id", ProductDetailsService);
router.get("/products", ProductSlidersService);

export default router;
