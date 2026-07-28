"use client";

import { FormEvent, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

type LeadFormProps = {
  mode: "contact" | "enroll" | "callback" | "login" | "register" | "payment";
  courseName?: string;
};

export function LeadForm({ mode, courseName }: LeadFormProps) {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("Submitted successfully. Our team will contact you shortly.");
    form.reset();
  }

  const isLogin = mode === "login";
  const isPayment = mode === "payment";

  return (
    <form className="form-panel" onSubmit={submit} noValidate>
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
          <input name="course" required defaultValue={courseName ?? ""} />
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

      <button className="btn btn-primary w-full" type="submit">
        {isLogin ? "Login" : isPayment ? "Generate Payment Link" : "Submit"}
      </button>

      {status ? (
        <p className="flex items-center gap-2 rounded-md bg-emerald-50 p-3 text-sm font-semibold text-emerald-700" role="status">
          <FaCheckCircle /> {status}
        </p>
      ) : null}
    </form>
  );
}
