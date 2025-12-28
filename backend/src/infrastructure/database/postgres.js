import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../../generated/prisma/client.ts'
import logger from '../logger/winston.js';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export async function connectDB() {
    try {
        await prisma.$connect();
        logger.info("Database connected");
    } catch (error) {
        logger.error({ message: "Database connection failed", error: error.message });
        process.exit(1);
    }
}

export {prisma};
