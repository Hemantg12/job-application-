import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config({ path: "./config/config.env" });
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import { dbConnection } from "./database/dbConnection.js";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(cookieParser()); //authorization
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //converts string to json
//cloudinary or multer hemant can use
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);
dbConnection();
app.use(errorMiddleware);
export default app;
