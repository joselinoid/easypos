import { prisma } from "../../infrastructure/database/postgres.js";

export const categoryRepository = {
    findByName: async (name) => {
        return prisma.category.findUnique({
            where: { name },
        });
    },

    findById: async (id) => {
        return prisma.category.findUnique({
            where: { id },
        });
    },

    findAll: async () => {
        return prisma.category.findMany();
    },

    create: async (data) => {
        return prisma.category.create({ data });
    },

    update: async (id, data) => {
        return prisma.category.update({
            where: { id },
            data,
        });
    },

    delete: async (id) => {
        return prisma.category.delete({
            where: { id },
        });
    },
};
