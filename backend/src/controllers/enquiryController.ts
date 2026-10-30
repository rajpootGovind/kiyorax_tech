import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { Enquiry } from "../models/Enquiry";
import { sendTelegramNotification } from "../services/telegram";
import { enquirySchema } from "../validators/enquiry";
import { truncate } from "../utils/sanitize";

export async function createEnquiry(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const body = (req.body ?? {}) as Record<string, unknown>;

    // Honeypot: bots fill hidden fields. Accept silently without saving.
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      res.status(200).json({
        success: true,
        message: "Enquiry received.",
      });
      return;
    }

    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      res.status(422).json({
        success: false,
        message: "Please check the highlighted fields and try again.",
        errors: z.flattenError(parsed.error).fieldErrors,
      });
      return;
    }

    const enquiry = await Enquiry.create({
      ...parsed.data,
      status: "New",
      source: "website",
    });

    const notification = await sendTelegramNotification(enquiry);

    if (!notification.skipped) {
      if (notification.ok) {
        enquiry.telegramNotified = true;
      } else if (notification.error) {
        enquiry.telegramError = truncate(notification.error, 500);
      }

      try {
        await enquiry.save();
      } catch (saveError) {
        console.error(
          `[enquiry] Could not update notification status for ${enquiry._id.toString()}:`,
          saveError,
        );
      }
    }

    res.status(201).json({
      success: true,
      message:
        "Thank you for reaching out to KiyoraX Technologies! Your enquiry has been received. Our team will connect with you soon.",
    });
  } catch (error) {
    next(error);
  }
}
