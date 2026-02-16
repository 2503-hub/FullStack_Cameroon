import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import newsletterRoutes from "./routes/newsletter.js";
import errorHandler from "./middleware/errorHandler.js";
import subscriptionRoutes from "./routes/subscription.js";

dotenv.config();
connectDB();

// TEMP: check environment variables
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "LOADED" : "MISSING");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/newsletter", newsletterRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

//endpoints are /api/subscribe and /api/unsubscribe
app.use("/api", subscriptionRoutes); 

// This allows server to read JSON requests from the newsletter form
app.use(express.json()); 

