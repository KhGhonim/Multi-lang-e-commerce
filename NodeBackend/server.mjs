import express from "express";
import MongoDB from "./Config/MongoDB/MongoDB.js";
import cors from "cors";
import authregister from "./Api/Routes/authregister.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 5000;
app.use(cookieParser());
app.use(express.json());

// Middleware Connections
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.use("/api", authregister);

// Connection
const startServer = async () => {
  await MongoDB();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();
