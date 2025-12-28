import { z } from "zod";
import { ApiError } from "../utils/responseHandler.js";

const handleValidation = (schema, data) => {
    const result = schema.safeParse(data);

    if (!result.success) {
        const message =
            Array.isArray(result.error.issues) && result.error.issues.length > 0
                ? result.error.issues[0].message
                : "Invalid input";

        throw new ApiError(400, message);
    }

    return result.data;
};

export const validateOrderInput = (data) => {
    const schema = z.object({
        customer_name: z.string().min(1, "Customer name is required"),
        order_items: z
            .array(
                z.object({
                    menu_id: z.string().min(1, "menu_id is required"),
                    quantity: z.number().int().positive("quantity must be greater than 0"),
                })
            )
            .min(1, "order_items cannot be empty"),
    });

    return handleValidation(schema, data);
};