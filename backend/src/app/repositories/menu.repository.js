import {prisma} from "../../infrastructure/database/postgres.js";

export const menuRepository = {
    findAll: async () => {
        return prisma.menu.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                image: true,
                category_id: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            },
            orderBy: {
                created_at: "desc",
            }
        });
    },

    findByName: async (name) => {
        return prisma.menu.findUnique({
            where: { name }
        });
    },

    findById: async (id) => {
        return prisma.menu.findUnique({
            where: { id },
            include: {
                category: true,
            }
        });
    },

    create: async (data) => {
        return prisma.menu.create({ data });
    },

    delete: async (id) => {
        return prisma.menu.delete({ where: { id } });
    },
}