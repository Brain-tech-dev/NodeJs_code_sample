import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./db"
import appRoute from "./route/app.route";
dotenv.config();
const app: Express = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/v1", appRoute);
const port: number = Number(process.env.PORT) || 4000;
const connect = async (): Promise<void> => {
    const dbUrl: string = process.env.DB || "";
    if (!dbUrl) {
        console.error("Database URL is not defined in the environment variables.");
        return;
    }
    try {
        await connection(dbUrl);
        console.log("Database connected successfully");
        app.listen(port, () => {
            console.log(`Server is running on port number ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};
connect();
