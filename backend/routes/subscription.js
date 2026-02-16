import express from "express";
import Subscriber from "../models/Subscriber.js";
import { sendConfirmationEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already subscribed" });

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    // 📧 Send confirmation email
    await sendConfirmationEmail(email);

    res.status(201).json({ message: "Subscribed successfully! Check your email 📧" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// Unsubscribe
router.post("/unsubscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const deleted = await Subscriber.findOneAndDelete({ email });
    if (!deleted) return res.status(404).json({ message: "Email not found" });

    res.json({ message: "Unsubscribed successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
