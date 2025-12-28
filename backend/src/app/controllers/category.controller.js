import * as categoryService from "../services/category.service.js";
import {validateCategoryInput, validateCategoryUpdate} from "../validators/category.validation.js";
import {successResponse} from "../utils/responseHandler.js";

export const createCategoryController = async (req, res, next) => {
    try {
        const validatedInput = validateCategoryInput(req.body);
        const category = await categoryService.createCategory(validatedInput);

        successResponse(res, "Category created successfully", category, 201);
    } catch (err) {
        next(err);
    }
};

export const getAllCategoriesController = async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();

        if (categories.length === 0) {
            return successResponse(res, "Category fetched successfully", null);
        }

        successResponse(res, "Category fetched successfully", categories);
    } catch (err) {
        next(err);
    }
};

export const getCategoryByIdController = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);

        const category = await categoryService.getCategoryById(id);

        successResponse(res, "Category fetched successfully", category);
    }catch (err) {
        next(err);
    }
}

export const updateCategoryController = async (req, res, next) => {
    try {
        const validatedInput = validateCategoryUpdate(req.body)
        const id = parseInt(req.params.id, 10);

        const category = await categoryService.updateCategory(id, validatedInput);

        successResponse(res, "Category updated successfully", category);
    } catch (err) {
        next(err);
    }
}

export const deleteCategoryController = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);

        const category = await categoryService.deleteCategory(id);

        successResponse(res, "Category deleted successfully", category);
    } catch (err) {
        next(err);
    }
}