import { prisma } from "../../infrastructure/database/postgres.js";

export const orderRepository = {
    create: async (data) => {
        return prisma.order.create({
            data: {
                customer_name: data.customer_name,
                total: data.total,
                OrderItem: {
                    create: data.order_items
                },
            },
            include: {
                OrderItem: {
                    include: {
                        menu: true,
                    }
                }
            },
        });
    },

    findById: async (id) => {
        return prisma.order.findUnique({
            where: { id },
            include: { OrderItem: true },
        });
    },

    findAll: async () => {
        return prisma.order.findMany({
            select: {
                id: true,
                customer_name: true,
                total:true,
                OrderItem: {
                    select: {
                        id:true,
                        menu_id:true,
                        menu: {
                            select: {
                                name: true,
                                price: true
                            }
                        },
                        quantity:true
                    }
                },
                created_at:true,
                updated_at:true
            },
            orderBy: { created_at: "desc" },
        });
    },

    delete: async (id) => {
        return prisma.order.delete({
            where: { id },
            include: {
                OrderItem: true,
            },
        });
    },
};