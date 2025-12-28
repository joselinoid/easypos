import logger from "../../infrastructure/logger/winston.js";
import { ApiError } from "../utils/responseHandler.js";
import multer from "multer";

export const errorMiddleware = (err, req, res, _next) => {
    let statusCode = 500;
    let message = "Internal Server Error";

    if (err instanceof ApiError) {
        statusCode = err.statusCode;
        message = err.message;

    } else if (err instanceof multer.MulterError) {
        statusCode = 400;
        message = err.message;

    } else {
        logger.error(err?.stack || err);
    }

    if (process.env.NODE_ENV === "development") {
        return res.status(statusCode).json({
            success: false,
            message: err?.message || message,
            stack: err?.stack,
        });
    }

    return res.status(statusCode).json({
        success: false,
        message,
    });
};
