import rateLimit from "express-rate-limit";
import { env } from "../config/env";

export const enquiryLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  limit: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many enquiries have been submitted from this address. Please try again later, or email us directly.",
  },
});
