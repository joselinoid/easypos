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

export const validateMenuInput = (data) => {
    const schema = z.object({
        name: z.string().min(1, "Menu name is required"),
        price: z.coerce.number().min(1, "Menu price is required"),
        image: z.string().url("Menu image is required"),
        image_public_id: z.string().min(1, "image_public_id is required"),
        category_id: z.coerce.number().min(1, "Menu category is required"),
    });

    return handleValidation(schema, data);
};
