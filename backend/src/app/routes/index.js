import express from "express";
import authRoutes from "./auth.route.js";
import categoryRoutes from "./category.route.js";
import menuRoutes from "./menu.route.js";
import orderRoutes from "./order.route.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/categories", categoryRoutes);
router.use("/menus", menuRoutes);
router.use("/orders", orderRoutes);

export default router;