import { seedUsers } from './user.js';
import logger from "../../src/infrastructure/logger/winston.js";
import {connectDB, prisma} from "../../src/infrastructure/database/postgres.js";

async function main() {
    await connectDB();
    logger.info('Start seeding database...');
    await seedUsers();
    logger.info('Seeding finished.');
    await prisma.$disconnect();
    process.exit();
}

main();
