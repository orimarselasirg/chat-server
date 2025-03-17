import { createServer } from "node:http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/database/database.js";
import authRoutes from "./src/routes/auth/auth.routes.js";
import { DATABASE_MESSAGES, PRINCIPAL_ROUTES, VERSION } from "./src/utils/constant.js";
import configureSocket from "./src/utils/configureSocket.js";

dotenv.config();

const app = express();
const server = createServer(app);
app.use(cors());
app.use(express.json());
configureSocket(server);

app.use(
    `${VERSION.V1}${PRINCIPAL_ROUTES.AUTH}`,
    authRoutes
);

server.listen(process.env.PORT, () => {
    connectDB().then(() => {
        console.log(DATABASE_MESSAGES.CONNECTION_SUCCESS);
        console.log(
            DATABASE_MESSAGES.SERVER_SUCCESS.replace("{{port}}",
                process.env.PORT)
        );
    }).catch((err) => {
        console.log(DATABASE_MESSAGES.SERVER_ERROR, err);
    });
});