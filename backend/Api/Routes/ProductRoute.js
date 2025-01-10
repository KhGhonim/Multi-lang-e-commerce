import express from "express";
import { ProductDetailsService } from "../Controllers/ProductDetailsServiceController.js";
import { ProductSlidersService } from "../Controllers/ProductSlidersServiceController.js";
import { AddNewProductController } from "../Controllers/AddNewProductController.js";
import { uploadImage } from "../utils/Multer.js";
import { deleteProductController } from "../Controllers/deleteProductController.js";
const router = express.Router();

router.get("/product", ProductDetailsService);
router.get("/products", ProductSlidersService);
router.post("/addNewProduct", uploadImage, AddNewProductController);
router.delete("/deleteProduct", deleteProductController);

export default router;
