import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
    createCategoryController, deleteCategoryController,
    getAllCategoriesController, getCategoryByIdController, updateCategoryController,
} from "../controllers/category.controller.js";

const router = express.Router();

router.post("/", authenticate, createCategoryController);
router.get("/", authenticate, getAllCategoriesController);
router.get("/:id", authenticate, getCategoryByIdController);
router.put("/:id", authenticate, updateCategoryController);
router.delete("/:id", authenticate, deleteCategoryController);

export default router;