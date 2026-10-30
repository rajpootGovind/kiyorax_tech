"use client";

import { useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AlertCircle, Check, ChevronDown, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  budgetOptions,
  contactOptions,
  serviceOptions,
  site,
  timelineOptions,
} from "@/data/site";
import { cn } from "@/lib/utils";

const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .regex(/^[+]?[\d\s\-().]{10,18}$/, "Please enter a valid phone number."),
  company: z
    .string()
    .trim()
    .min(1, "Please enter your company or organisation.")
    .max(120, "Please keep the name under 120 characters."),
  service: z.string().min(1, "Please select the service you need."),
  projectDescription: z
    .string()
    .trim()
    .min(20, "Please share at least a couple of sentences (20 characters minimum).")
    .max(4000, "Please keep the description under 4000 characters."),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  preferredContact: z.string().optional(),
  website: z.string().optional(),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

const inputClass =
  "w-full rounded-xl border border-ink/12 bg-paper/50 px-4 py-3 text-[14px] text-ink placeholder:text-ink/30 transition-all duration-200 focus:border-brand-blue/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-blue/10";

const labelClass =
  "mb-2 block font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/45";

function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-[11px] text-red-600">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-[10.5px] text-ink/35">{hint}</p>
      ) : null}
    </div>
  );
}

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const submittingRef = useRef(false);
  const reduced = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      projectDescription: "",
      budget: "",
      timeline: "",
      preferredContact: "",
      website: "",
    },
  });

  async function onSubmit(values: EnquiryValues) {
    if (submittingRef.current) return;
    submittingRef.current = true;
    setServerError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api"}/enquiries`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        },
      );

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message ??
            "We could not send your enquiry right now. Please try again in a moment.",
        );
      }

      reset();
      setSubmitted(true);
    } catch (error) {
      setServerError(
        error instanceof Error && error.message
          ? error.message
          : `We could not send your enquiry right now. Please email us at ${site.email}.`,
      );
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-[560px] flex-col items-center justify-center rounded-3xl border border-ink/10 bg-white p-8 text-center sm:p-12"
            role="status"
            aria-live="polite"
          >
            <motion.span
              initial={reduced ? false : { scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 16 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#00c8f5,#286bff,#852eff)] text-white shadow-[0_18px_50px_-18px_rgba(40,107,255,0.7)]"
            >
              <Check className="h-7 w-7" strokeWidth={2.5} />
            </motion.span>
            <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.22em] text-ink/35">
              Enquiry received
            </p>
            <h3 className="mt-4 max-w-md text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-ink">
              Thank you for reaching out to KiyoraX Technologies!
            </h3>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ink/55">
              Your enquiry has been received. Our team will connect with you soon.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outlineDark"
                size="md"
                onClick={() => setSubmitted(false)}
                type="button"
              >
                Send another enquiry
              </Button>
              <Button href="/portfolio" variant="solid" size="md">
                Explore our work
              </Button>
            </div>
            <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/30">
              Prefer email? {site.email}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 lg:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[22px] font-semibold tracking-tight text-ink">
                  Project enquiry
                </h2>
                <p className="mt-1.5 text-[12.5px] text-ink/45">
                  Tell us what you are building. All required fields are marked{" "}
                  <span className="text-ink/70">*</span>.
                </p>
              </div>
              <span className="hidden rounded-full border border-ink/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/35 sm:block">
                Step 1 of 1
              </span>
            </div>

            {serverError ? (
              <div
                role="alert"
                className="mt-6 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[12px] leading-relaxed text-red-700"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{serverError}</span>
              </div>
            ) : null}

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Full name *" htmlFor="fullName" error={errors.fullName?.message}>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={cn(inputClass, errors.fullName && "border-red-300 bg-red-50/40")}
                  {...register("fullName")}
                />
              </Field>

              <Field label="Email address *" htmlFor="email" error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(inputClass, errors.email && "border-red-300 bg-red-50/40")}
                  {...register("email")}
                />
              </Field>

              <Field label="Phone number *" htmlFor="phone" error={errors.phone?.message}>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 90000 00000"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={cn(inputClass, errors.phone && "border-red-300 bg-red-50/40")}
                  {...register("phone")}
                />
              </Field>

              <Field
                label="Company / organisation *"
                htmlFor="company"
                error={errors.company?.message}
              >
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company or institution name"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "company-error" : undefined}
                  className={cn(inputClass, errors.company && "border-red-300 bg-red-50/40")}
                  {...register("company")}
                />
              </Field>

              <Field
                label="Service required *"
                htmlFor="service"
                error={errors.service?.message}
                className="sm:col-span-2"
              >
                <div className="relative">
                  <select
                    id="service"
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "service-error" : undefined}
                    className={cn(
                      inputClass,
                      "appearance-none pr-11",
                      errors.service && "border-red-300 bg-red-50/40",
                    )}
                    {...register("service")}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35"
                    aria-hidden="true"
                  />
                </div>
              </Field>

              <Field
                label="Project description *"
                htmlFor="projectDescription"
                error={errors.projectDescription?.message}
                hint="What are you building, who is it for, and what should it achieve?"
                className="sm:col-span-2"
              >
                <textarea
                  id="projectDescription"
                  rows={5}
                  placeholder="Describe your requirement, goals, and any existing systems..."
                  aria-invalid={Boolean(errors.projectDescription)}
                  aria-describedby={
                    errors.projectDescription ? "projectDescription-error" : undefined
                  }
                  className={cn(
                    inputClass,
                    "resize-y",
                    errors.projectDescription && "border-red-300 bg-red-50/40",
                  )}
                  {...register("projectDescription")}
                />
              </Field>

              <Field label="Approximate budget" htmlFor="budget" hint="Optional">
                <div className="relative">
                  <select id="budget" className={cn(inputClass, "appearance-none pr-11")} {...register("budget")}>
                    <option value="">Not decided yet</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35"
                    aria-hidden="true"
                  />
                </div>
              </Field>

              <Field label="Expected timeline" htmlFor="timeline" hint="Optional">
                <div className="relative">
                  <select id="timeline" className={cn(inputClass, "appearance-none pr-11")} {...register("timeline")}>
                    <option value="">Flexible</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35"
                    aria-hidden="true"
                  />
                </div>
              </Field>

              <fieldset className="sm:col-span-2">
                <legend className={labelClass}>Preferred contact method</legend>
                <div className="flex flex-wrap gap-2">
                  {contactOptions.map((option) => (
                    <label key={option} className="cursor-pointer">
                      <input
                        type="radio"
                        value={option}
                        className="peer sr-only"
                        {...register("preferredContact")}
                      />
                      <span className="inline-flex rounded-full border border-ink/12 bg-paper/50 px-4 py-2 text-[12px] text-ink/55 transition-all peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand-blue/15">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-[10.5px] leading-relaxed text-ink/35">
                By submitting this form you agree to be contacted about your enquiry. We do
                not share your details with third parties.
              </p>
              <Button
                type="submit"
                variant="brand"
                size="lg"
                disabled={isSubmitting}
                className="w-full shrink-0 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending enquiry…
                  </>
                ) : (
                  <>
                    Send enquiry
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
