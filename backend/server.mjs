import express from "express";
import MongoDB from "./Config/MongoDB/MongoDB.js";
import cors from "cors";
import authregister from "./Api/Routes/authregister.js";
import ProductRoute from "./Api/Routes/ProductRoute.js";
import cookieParser from "cookie-parser";
import SearchEngineRoute from "./Api/Routes/SearchEngineRoute.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 5000;
app.use(cookieParser());
app.use(express.json());

// Middleware Connections
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Routes
app.use("/api", authregister);
app.use("/api", ProductRoute);
app.use("/api", SearchEngineRoute);

// Connection
const startServer = async () => {
  await MongoDB();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();
