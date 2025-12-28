import { prisma } from "../../infrastructure/database/postgres.js";

export const userRepository = {
    findByEmail: async (email) => {
        return prisma.user.findUnique({
            where: { email },
        });
    },

    findById: async (id) => {
        return prisma.user.findUnique({
            where: { id },
        });
    },
};
