import Newsletter from "../models/Newsletter.js";

export const subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    const existing = await Newsletter.findOne({ email });

    if (existing) {
      if (!existing.subscribed) {
        existing.subscribed = true;
        await existing.save();
        return res.json({ success: true, message: "Subscription reactivated" });
      }

      return res.status(409).json({
        success: false,
        message: "Email already subscribed"
      });
    }

    await Newsletter.create({ email });

    res.status(201).json({
      success: true,
      message: "Successfully subscribed"
    });
  } catch (error) {
    next(error);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await Newsletter.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not found"
      });
    }

    user.subscribed = false;
    await user.save();

    res.json({
      success: true,
      message: "Successfully unsubscribed"
    });
  } catch (error) {
    next(error);
  }
};
