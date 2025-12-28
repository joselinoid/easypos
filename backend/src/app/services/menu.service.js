import {menuRepository} from "../repositories/menu.repository.js";
import {ApiError} from "../utils/responseHandler.js";
import {categoryRepository} from "../repositories/category.repository.js";
import {deleteFromCloudinary} from "../../infrastructure/storage/cloudinary.js";

export const getAllMenus = async () => {
    return menuRepository.findAll();
};

export const createMenu = async ({ name, price, image, image_public_id, category_id }) => {
    const existingCategory = await categoryRepository.findById(category_id);

    if (!existingCategory) {
        throw new ApiError(404, "Category not found");
    }

    const existingMenu = await menuRepository.findByName(name);

    if (existingMenu) {
        throw new ApiError(409, "Menu already exists");
    }

    return menuRepository.create({ name, price, image, image_public_id, category_id });
};

export const getMenuById = async (id) => {
    const menu = await menuRepository.findById(id);

    if(!menu) {
        throw new ApiError(404, "Menu not found");
    }

    return menuRepository.findById(id);
};

export const deleteMenu = async (id) => {
    const menu = await menuRepository.findById(id);

    if(!menu) {
        throw new ApiError(404, "Menu not found");
    }

    if (menu.image_public_id) {
        await deleteFromCloudinary(menu.image_public_id);
    }

    await menuRepository.delete(id);

    return null;
};