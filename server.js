import express from "express";
const app = express();

//mongo set-up
import dotenv from "dotenv";
dotenv.config();

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

//mongoDB connection - db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";

app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("error");
  res.send("Welcome!");
});

app.use("/api/v1/auth", authRouter);

//errorHandler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

//connecting to MONGODB after account set-up!
const startGo = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

startGo();
