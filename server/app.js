import express from "express";
import messageRouter from "./routes/messageRoute.js";
import errorController from "./controllers/errorController.js";
import AppError from "./utils/appError.js";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";

const app = express();
app.use(express.json());

app.use(cors());
app.use(helmet());
// 100 hundreds requests per hour per IP adress
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Data sanitization against XSS
app.use(xss());

// routes
app.use("/api/messages", messageRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);

app.listen(8080, () => {
  console.log("Server is running...");
});
