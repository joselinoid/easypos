import {orderRepository} from "../repositories/order.repository.js";
import {menuRepository} from "../repositories/menu.repository.js";
import {ApiError} from "../utils/responseHandler.js";

export const createOrder = async ({ customer_name, order_items }) => {
    if (!order_items || order_items.length === 0) {
        throw new ApiError(400, "Order Items is required");
    }

    let total = 0;

    for (const item of order_items) {
        const menu = await menuRepository.findById(item.menu_id);
        if (!menu) {
            throw new ApiError(404, "Menu not found");
        }
        total += menu.price * item.quantity;
    }

    return orderRepository.create({ customer_name, total, order_items });
};

export const getAllOrders = async () => {
    return orderRepository.findAll();
};

export const deleteOrder = async (id) => {
    const orderId = await orderRepository.findById(id);

    if (!orderId) {
        throw new ApiError(404, "Order not found");
    }

    await orderRepository.delete(id);

    return null;
};