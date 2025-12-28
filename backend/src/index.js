import dotenv from "dotenv";
import app from "./infrastructure/server.js";
import logger from "./infrastructure/logger/winston.js";
import {connectDB} from "./infrastructure/database/postgres.js";

dotenv.config();

const PORT = process.env.PORT;

async function startServer() {
    try {
        logger.info("Starting server...");
        await connectDB();

        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });

        process.on("SIGINT", shutdown);
        process.on("SIGTERM", shutdown);
    } catch (error) {
        logger.error("Failed to start server:", error);
        process.exit(1);
    }
}

async function shutdown() {
    logger.warn("Shutting down gracefully...");
    process.exit(0);
}

startServer();
