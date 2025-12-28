import express from "express";
import {authenticate} from "../middlewares/auth.middleware.js";
import {createOrderController, deleteOrderController, getAllOrdersController} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", authenticate, createOrderController);
router.get("/", authenticate, getAllOrdersController);
router.delete("/:id", authenticate, deleteOrderController);

export default router;