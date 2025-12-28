import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
    createMenuController, deleteMenuController,
    getAllMenusController, getMenuByIdController
} from "../controllers/menu.controller.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = express.Router();

router.get("/", authenticate, getAllMenusController);
router.post("/", authenticate, upload.single("image"), createMenuController,);
router.get("/:id", authenticate, getMenuByIdController);
router.delete("/:id", authenticate, deleteMenuController);

export default router;