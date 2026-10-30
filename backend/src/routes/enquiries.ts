import { Router } from "express";
import { createEnquiry } from "../controllers/enquiryController";
import { enquiryLimiter } from "../middleware/rateLimit";

export const enquiryRouter = Router();

enquiryRouter.post("/", enquiryLimiter, createEnquiry);

enquiryRouter.all("/", (_req, res) => {
  res.status(405).json({
    success: false,
    message: "Method not allowed. Use POST to submit an enquiry.",
  });
});
