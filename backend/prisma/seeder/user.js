import logger from "../../src/infrastructure/logger/winston.js";
import bcrypt from "bcrypt";
import {prisma} from "../../src/infrastructure/database/postgres.js";

export async function seedUsers() {
    try {
        logger.info('Seeding users...');

        const users = [
            {
                name: 'Admin User',
                email: 'admin@gmail.com',
                password: '12345678',
            },
        ];

        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);

            await prisma.user.upsert({
                where: { email: user.email },
                update: {},
                create: {
                    name: user.name,
                    email: user.email,
                    password: hashedPassword,
                    role: user.role,
                },
            });
        }

        logger.info('Users seeded successfully.');
    } catch (error) {
        logger.error({ message: 'Seeding users failed', error: error.message });
        process.exit(1);
    }
}