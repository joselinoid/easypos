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

export const validateCategoryInput = (data) => {
    const schema = z.object({
        name: z.string().min(1, "Category name is required"),
    });
    return handleValidation(schema, data);
};

export const validateCategoryUpdate = (data) => {
    const schema = z.object({
        name: z.string().optional(),
    });
    return handleValidation(schema, data);
};