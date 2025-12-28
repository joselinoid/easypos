import express from "express";
import {
    getProfileController,
    loginController,
} from "../controllers/auth.controller.js";
import {authenticate} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", loginController);
router.get("/profile", authenticate, getProfileController);

export default router;
