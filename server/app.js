import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router as authRoute } from "./routes/auth.route.js";
import { router as userRoute } from "./routes/user.route.js";

const app = express();

dotenv.config({
  path: "./env",
});

app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/users", authRoute);

export default app;
