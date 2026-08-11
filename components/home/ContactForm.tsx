"use client";

import { FormEvent, useState } from "react";

// Formspree form IDs are public identifiers, not credentials. An environment
// variable can override this if the form is ever replaced.
const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "xvkpazwk";

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formId) { setState("error"); setMessage("Contact form setup is still needed."); return; }
    setState("sending"); setMessage("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    try { const response = await fetch(`https://formspree.io/f/${formId}`, { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) }); const result = await response.json(); if (!response.ok) throw new Error(result.errors?.[0]?.message ?? "Unable to send your message."); setState("sent"); formElement.reset(); }
    catch (error) { setState("error"); setMessage(error instanceof Error ? error.message : "Unable to send your message."); }
  }
  return <div className="contact-form-wrap"><button className="button button-primary" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="contact-form">Hit me up! <span aria-hidden="true">→</span></button>{open && <div className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-form-title"><button className="dialog-backdrop" aria-label="Close contact form" onClick={() => setOpen(false)} /><form id="contact-form" className="contact-form" onSubmit={submit}><div className="form-heading"><div><p className="eyebrow">Contact</p><h3 id="contact-form-title">Start a conversation.</h3></div><button className="close-form" type="button" onClick={() => setOpen(false)} aria-label="Close contact form">×</button></div><label>Name<input required name="name" autoComplete="name" maxLength={100} /></label><label>Email<input required name="email" type="email" autoComplete="email" maxLength={254} /></label><label>Subject<input required name="subject" maxLength={160} /></label><label>Message<textarea required name="message" rows={5} maxLength={4000} /></label><input className="honeypot" name="website" tabIndex={-1} autoComplete="off" /><button className="button button-primary" disabled={state === "sending"} type="submit">{state === "sending" ? "Sending…" : "Send message"}</button>{state === "sent" && <p className="form-status success">Thanks — your message is on its way.</p>}{state === "error" && <p className="form-status error">{message}</p>}</form></div>}</div>;
}
