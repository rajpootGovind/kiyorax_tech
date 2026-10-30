import { z } from "zod";
import { sanitizeEmail, sanitizeText } from "../utils/sanitize";

export const services = [
  "Website Development",
  "E-commerce Development",
  "CRM Development",
  "Educational Website / Software",
  "Institutional Website",
  "Web Application Development",
  "Mobile Application Development",
  "AI Integration",
  "Digital Marketing",
  "WordPress Development",
  "Other",
] as const;

export const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "Above ₹3,00,000",
  "Not Decided",
] as const;

export const timelines = [
  "ASAP",
  "1 – 2 months",
  "3 – 4 months",
  "4 – 6 months",
  "Flexible",
] as const;

export const contactMethods = ["Email", "Phone", "WhatsApp"] as const;

function textField(min: number, max: number, message: string) {
  return z.preprocess(
    (value) => (typeof value === "string" ? sanitizeText(value) : value),
    z.string().min(min, message).max(max, "This field is too long."),
  );
}

const optionalEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z.preprocess(
    (value) =>
      typeof value === "string" && value.trim() === "" ? undefined : value,
    z.enum(values).optional(),
  );

export const enquirySchema = z.object({
  fullName: textField(2, 80, "Please enter your full name."),
  email: z.preprocess(
    (value) => (typeof value === "string" ? sanitizeEmail(value) : value),
    z
      .string()
      .min(1, "Please enter your email address.")
      .max(160, "Email address is too long.")
      .email("Please enter a valid email address."),
  ),
  phone: z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : value),
    z
      .string()
      .min(1, "Please enter your phone number.")
      .max(24, "Phone number is too long.")
      .regex(/^[+]?[\d\s\-().]{10,18}$/, "Please enter a valid phone number."),
  ),
  company: textField(1, 120, "Please enter your company or organisation."),
  service: z.enum(services, "Please select the service you need."),
  projectDescription: textField(
    20,
    4000,
    "Please share at least a couple of sentences about the project.",
  ),
  budget: optionalEnum(budgets),
  timeline: optionalEnum(timelines),
  preferredContact: optionalEnum(contactMethods),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
