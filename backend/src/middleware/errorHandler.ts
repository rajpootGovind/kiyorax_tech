import type { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { env } from "../config/env";

type HttpError = Error & {
  status?: number;
  statusCode?: number;
  type?: string;
};

export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    message: "Endpoint not found.",
    path: req.originalUrl,
  });
}

export function errorHandler(
  error: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (res.headersSent) return;

  if (error instanceof mongoose.Error.ValidationError) {
    const errors: Record<string, string> = {};
    for (const [field, detail] of Object.entries(error.errors)) {
      errors[field] = detail.message;
    }
    res.status(400).json({
      success: false,
      message: "Some details are invalid. Please review and try again.",
      errors,
    });
    return;
  }

  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({
      success: false,
      message: "Invalid request.",
    });
    return;
  }

  if (error.type === "entity.too.large") {
    res.status(413).json({
      success: false,
      message: "The request is too large. Please shorten your message and try again.",
    });
    return;
  }

  if (error instanceof SyntaxError && "body" in error) {
    res.status(400).json({
      success: false,
      message: "Invalid request format.",
    });
    return;
  }

  const status = error.statusCode ?? error.status ?? 500;

  console.error("[api] Unhandled error:", {
    message: error.message,
    status,
    stack: env.isProduction ? undefined : error.stack,
  });

  res.status(status).json({
    success: false,
    message:
      status >= 500
        ? "Something went wrong on our side. Please try again shortly, or email us directly."
        : error.message || "Request could not be completed.",
  });
}
