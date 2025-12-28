import * as orderService from "../services/order.service.js";
import {validateOrderInput} from "../validators/order.validation.js";
import {successResponse} from "../utils/responseHandler.js";

export const createOrderController = async (req, res, next) => {
    try {
        const validatedInput = validateOrderInput(req.body);
        const order = await orderService.createOrder(validatedInput);

        successResponse(res, "Order created successfully", order, 201);
    } catch (err) {
        next(err);
    }
};

export const getAllOrdersController = async (req, res, next) => {
    try {
        const orders = await orderService.getAllOrders();

        if (orders.length === 0) {
            return successResponse(res, "Order fetched successfully", null);
        }

        successResponse(res, "Order fetched successfully", orders);
    }catch (err) {
        next(err);
    }
}

export const deleteOrderController = async (req, res, next) => {
    try {
        const order = await orderService.deleteOrder(req.params.id);

        successResponse(res, "Order deleted successfully", order);
    } catch (err) {
        next(err);
    }
}