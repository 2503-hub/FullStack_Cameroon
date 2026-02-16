import express from "express";
import { subscribe, unsubscribe } from "../controllers/newsletterController.js";
import { validateEmail } from "../middleware/validation.js";

const router = express.Router();

router.post("/subscribe", validateEmail, subscribe);
router.post("/unsubscribe", validateEmail, unsubscribe);

export default router;
