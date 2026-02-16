import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import newsletterRoutes from "./routes/newsletter.js";
import errorHandler from "./middleware/errorHandler.js";
import subscriptionRoutes from "./routes/subscription.js";

dotenv.config();
connectDB();

const app = express();

// CORS: allow all in dev, only your frontend URL in production
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.FRONTEND_URL]
    : ["http://localhost:3000", "http://localhost:5173"];
app.use(cors({ origin: allowedOrigins }));

app.use(express.json());

// All routes BEFORE error handler
app.use("/api/newsletter", newsletterRoutes);
app.use("/api", subscriptionRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));