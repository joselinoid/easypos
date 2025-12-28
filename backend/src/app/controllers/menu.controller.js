import * as menuService from "../services/menu.service.js";
import {ApiError, successResponse} from "../utils/responseHandler.js";
import {uploadToCloudinary} from "../../infrastructure/storage/cloudinary.js";
import {validateMenuInput} from "../validators/menu.validation.js";

export const getAllMenusController = async (req, res, next) => {
    try {
        const menus = await menuService.getAllMenus();

        if (menus.length === 0) {
            return successResponse(res, "Menu fetched successfully", null);
        }

        successResponse(res, "Menu fetched successfully", menus);
    } catch (err) {
        next(err);
    }
};

export const createMenuController = async (req, res, next) => {
    try {
        const file = req.file;
        if (!file) throw new ApiError(400, "Image is required");

        const { url, public_id } = await uploadToCloudinary(file.buffer);

        const input = {
            ...req.body,
            image: url,
            image_public_id: public_id,
        };

        const validatedInput = validateMenuInput(input);
        const menu = await menuService.createMenu(validatedInput);

        successResponse(res, "Menu created successfully", menu, 201);
    } catch (err) {
        next(err);
    }
}

export const getMenuByIdController = async (req, res, next) => {
    try {
        const menu = await menuService.getMenuById(req.params.id);

        successResponse(res, "Menu fetched successfully", menu);
    } catch (err) {
        next(err);
    }
}

export const deleteMenuController = async (req, res, next) => {
    try {
        const menu = await menuService.deleteMenu(req.params.id);

        successResponse(res, "Menu deleted successfully", menu);
    } catch (err) {
        next(err);
    }
}