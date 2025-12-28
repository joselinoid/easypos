import * as authService from "../services/auth.service.js";
import {validateLoginInput} from "../validators/auth.validation.js";
import {successResponse} from "../utils/responseHandler.js";

export const loginController = async (req, res, next) => {
    try {
        const validatedInput = validateLoginInput(req.body);
        const user = await authService.login(validatedInput);
        successResponse(res, "Login successfully", user);
    } catch (err) {
        next(err);
    }
};

export const getProfileController = async (req, res, next) => {
    try {
        const user = await authService.getProfile(req.user.id);
        successResponse(res, "User profile retrieved successfully", user);
    } catch (err) {
        next(err);
    }
};