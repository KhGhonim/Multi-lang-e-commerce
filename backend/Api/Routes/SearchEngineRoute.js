import express from "express";
import { SearchHandler } from "../Controllers/SearchHandlerController.js";
import { SearchHandlertoolbar } from "../Controllers/SearchHandlertoolbarController.js";

const router = express.Router();

router.get("/search", SearchHandler);
router.get("/search/toolbar", SearchHandlertoolbar);

export default router