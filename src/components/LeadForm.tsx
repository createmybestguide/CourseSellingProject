"use client";

import { FormEvent, useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { courses } from "@/src/lib/courses";

type LeadFormProps = {
  mode: "contact" | "enroll" | "callback" | "login" | "register" | "payment";
  courseName?: string;
};

export function LeadForm({ mode, courseName }: LeadFormProps) {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (mode === "login") {
      setError("");
      setStatus("Login request received.");
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSubmitting(true);
    setStatus("");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, mode }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to submit right now.");
      }

      setStatus("Submitted successfully. Our team will contact you shortly.");
      form.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to submit right now.");
    } finally {
      setSubmitting(false);
    }
  }

  const isLogin = mode === "login";
  const isPayment = mode === "payment";

  return (
    <form className={`form-panel form-panel-${mode}`} onSubmit={submit} noValidate>
      <div>
        <h2 className="text-2xl font-bold text-slate-950">
          {isLogin ? "Student Login" : isPayment ? "Secure Payment Request" : "Send Your Details"}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {isLogin
            ? "Access your student account for training and enrollment updates."
            : "Share your details and our team will guide you on training, admissions, and placement assistance."}
        </p>
      </div>

      {!isLogin ? (
        <label>
          Full name
          <input name="name" autoComplete="name" required minLength={2} />
        </label>
      ) : null}

      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>

      {isLogin ? (
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" required minLength={8} />
        </label>
      ) : (
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required pattern="[0-9+\-\s]{8,15}" />
        </label>
      )}

      {!isLogin ? (
        <label>
          Course
          <select name="course" required defaultValue={courseName ?? ""}>
            <option value="" disabled>Select course</option>
            {courses.map((course) => (
              <option value={course.name} key={course.slug}>
                {course.name}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      {mode === "enroll" ? (
        <label>
          Optional document upload
          <input name="document" type="file" accept=".pdf,.jpg,.jpeg,.png" />
        </label>
      ) : null}

      {isPayment ? (
        <>
          <label>
            Payment type
            <select name="paymentType" required defaultValue="">
              <option value="" disabled>Select payment type</option>
              <option>Advance booking</option>
              <option>Partial fee payment</option>
              <option>Full course fee</option>
            </select>
          </label>
          <label>
            Gateway
            <select name="gateway" required defaultValue="">
              <option value="" disabled>Select gateway</option>
              <option>Razorpay</option>
              <option>Stripe</option>
              <option>PayU</option>
            </select>
          </label>
        </>
      ) : null}

      {mode !== "login" && mode !== "payment" ? (
        <label>
          Message
          <textarea name="message" rows={4} />
        </label>
      ) : null}

      <button className="btn btn-primary w-full" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : isLogin ? "Login" : isPayment ? "Generate Payment Link" : "Submit"}
      </button>

      {status ? (
        <p className="flex items-center gap-2 rounded-md bg-emerald-50 p-3 text-sm font-semibold text-emerald-700" role="status">
          <FaCheckCircle /> {status}
        </p>
      ) : null}

      {error ? (
        <p className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
          <FaExclamationCircle /> {error}
        </p>
      ) : null}
    </form>
  );
}
