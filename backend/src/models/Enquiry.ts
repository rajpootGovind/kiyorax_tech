import { Schema, model, type Document } from "mongoose";
import {
  budgets,
  contactMethods,
  services,
  timelines,
} from "../validators/enquiry";

export const enquiryStatuses = [
  "New",
  "Contacted",
  "In Progress",
  "Converted",
  "Closed",
] as const;

export type EnquiryStatus = (typeof enquiryStatuses)[number];

export interface EnquiryDocument extends Document {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  projectDescription: string;
  budget?: string;
  timeline?: string;
  preferredContact?: string;
  status: EnquiryStatus;
  source: string;
  telegramNotified: boolean;
  telegramError?: string;
  createdAt: Date;
  updatedAt: Date;
}

const enquirySchema = new Schema<EnquiryDocument>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
      maxlength: [80, "Full name is too long."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      maxlength: [160, "Email is too long."],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email address is invalid."],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      maxlength: [24, "Phone number is too long."],
      match: [/^[+]?[\d\s\-().]{10,18}$/, "Phone number is invalid."],
    },
    company: {
      type: String,
      required: [true, "Company or organisation is required."],
      trim: true,
      maxlength: [120, "Company name is too long."],
    },
    service: {
      type: String,
      required: [true, "Service is required."],
      enum: {
        values: services,
        message: "Please select a valid service.",
      },
    },
    projectDescription: {
      type: String,
      required: [true, "Project description is required."],
      trim: true,
      minlength: [20, "Project description is too short."],
      maxlength: [4000, "Project description is too long."],
    },
    budget: {
      type: String,
      enum: {
        values: budgets,
        message: "Invalid budget option.",
      },
    },
    timeline: {
      type: String,
      enum: {
        values: timelines,
        message: "Invalid timeline option.",
      },
    },
    preferredContact: {
      type: String,
      enum: {
        values: contactMethods,
        message: "Invalid contact method.",
      },
    },
    status: {
      type: String,
      enum: enquiryStatuses,
      default: "New",
      index: true,
    },
    source: {
      type: String,
      default: "website",
    },
    telegramNotified: {
      type: Boolean,
      default: false,
    },
    telegramError: {
      type: String,
      maxlength: 500,
      select: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (_doc, ret: Record<string, unknown>) => {
        delete ret.telegramNotified;
        delete ret.telegramError;
        return ret;
      },
    },
  },
);

enquirySchema.index({ createdAt: -1 });

export const Enquiry = model<EnquiryDocument>("Enquiry", enquirySchema);
