import { env } from "../config/env";
import type { EnquiryDocument } from "../models/Enquiry";
import { truncate } from "../utils/sanitize";

type TelegramResult = {
  ok: boolean;
  skipped?: boolean;
  error?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

function buildMessage(enquiry: EnquiryDocument): string {
  const details = truncate(enquiry.projectDescription, 3000);

  return [
    "🚀 <b>NEW PROJECT ENQUIRY — KIYORAX TECHNOLOGIES</b>",
    "",
    `<b>Name:</b> ${escapeHtml(enquiry.fullName)}`,
    `<b>Email:</b> ${escapeHtml(enquiry.email)}`,
    `<b>Phone:</b> ${escapeHtml(enquiry.phone)}`,
    `<b>Company:</b> ${escapeHtml(enquiry.company)}`,
    `<b>Service:</b> ${escapeHtml(enquiry.service)}`,
    `<b>Budget:</b> ${escapeHtml(enquiry.budget || "Not provided")}`,
    `<b>Timeline:</b> ${escapeHtml(enquiry.timeline || "Not provided")}`,
    `<b>Preferred contact:</b> ${escapeHtml(enquiry.preferredContact || "Not provided")}`,
    "",
    "<b>Project Details:</b>",
    escapeHtml(details),
    "",
    `<b>Received At:</b> ${escapeHtml(formatDate(enquiry.createdAt))}`,
    "<b>Status:</b> NEW",
  ].join("\n");
}

export async function sendTelegramNotification(
  enquiry: EnquiryDocument,
): Promise<TelegramResult> {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    console.info(
      "[telegram] Not configured (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID missing) — notification skipped.",
    );
    return { ok: false, skipped: true };
  }

  const url = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: buildMessage(enquiry),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(
        `Telegram API responded ${response.status}: ${truncate(body, 300)}`,
      );
    }

    return { ok: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Telegram error";
    console.error(
      `[telegram] Notification failed for enquiry ${enquiry._id.toString()}: ${message}`,
    );
    return { ok: false, error: message };
  }
}
