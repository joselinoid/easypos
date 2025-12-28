import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "../app/routes/index.js";
import {errorMiddleware} from "../app/middlewares/error.middleware.js";

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api", routes);
app.get("/health", (req, res) => {
    res.send("OK");
});

app.use(errorMiddleware);

export default app;
