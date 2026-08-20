"use client";

import { ArrowDownRight, X } from "@phosphor-icons/react";
import { FormEvent, useEffect, useState } from "react";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const trigger = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("[data-open-contact]");
      if (target) { event.preventDefault(); setSent(false); setOpen(true); }
    };
    document.addEventListener("click", trigger);
    return () => document.removeEventListener("click", trigger);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modalOpen", open);
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => { document.body.classList.remove("modalOpen"); window.removeEventListener("keydown", close); };
  }, [open]);

  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };

  return (
    <div className={`contactModal ${open ? "isOpen" : ""}`} aria-hidden={!open}>
      <button className="modalBackdrop" type="button" onClick={() => setOpen(false)} aria-label="Close contact form" />
      <div className="contactDialog" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <div className="contactDialogHead">
          <span>New enquiry · ROCG</span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close"><X size={21} /></button>
        </div>
        {sent ? (
          <div className="contactSuccess">
            <span>Transmission complete</span>
            <h2>Thank you.</h2>
            <p>This is a proposal demo. Your enquiry has not been sent.</p>
            <button type="button" onClick={() => setOpen(false)}>Close <ArrowDownRight size={17} /></button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="eyebrow">Start a conversation</p>
            <h2 id="contact-title">Tell us what<br />comes next.</h2>
            <label><span>Name</span><input required name="name" placeholder="Your name" /></label>
            <label><span>Work email</span><input required type="email" name="email" placeholder="name@company.com" /></label>
            <label><span>Company</span><input name="company" placeholder="Company name" /></label>
            <label><span>How can we help?</span><textarea required name="message" rows={3} placeholder="Briefly describe your requirement" /></label>
            <button className="modalSubmit" type="submit">Submit enquiry <ArrowDownRight size={18} /></button>
          </form>
        )}
      </div>
    </div>
  );
}
