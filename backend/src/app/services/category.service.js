import {categoryRepository} from "../repositories/category.repository.js";
import {ApiError} from "../utils/responseHandler.js";

export const createCategory = async ({ name }) => {
    const existingCategory = await categoryRepository.findByName(name);

    if (existingCategory) {
        throw new ApiError(409, "Category already exists");
    }

    return categoryRepository.create({ name });
};

export const getAllCategories = async () => {
    return categoryRepository.findAll();
};

export const getCategoryById = async (id) => {
    const category = await categoryRepository.findById(id);

    if (!category) {
        throw new ApiError(404, "Category not found");
    }

    return category;
};

export const updateCategory = async (id, data) => {
    const categoryId = await categoryRepository.findById(id);

    if (!categoryId) {
        throw new ApiError(404, "Category not found");
    }

    const existingCategory = await categoryRepository.findByName(data.name);

    if (existingCategory) {
        throw new ApiError(409, "Category already exists");
    }

    return categoryRepository.update(id, data);
};

export const deleteCategory = async (id) => {
    const categoryId = await categoryRepository.findById(id);

    if (!categoryId) {
        throw new ApiError(404, "Category not found");
    }

    await categoryRepository.delete(id);

    return null;
};