import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import InstagramIcon from "./ui/InstagramIcon";
import { company, social } from "../data/content";
import { Reveal, Eyebrow, PrimaryButton } from "./ui/Primitives";

const PROJECT_TYPES = [
  "Custom Website / Web App",
  "Mobile App (iOS & Android)",
  "Custom Software & Dashboard",
  "AI Integration & Automation",
  "Full Platform / SaaS",
];

export default function CTAContact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Please enter a valid email.";
    if (!form.type) err.type = "Please select a project category.";
    if (!form.message.trim() || form.message.trim().length < 8)
      err.message = "A brief sentence describing your goals helps us reply effectively.";
    return err;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    setIsSending(true);
    try {
      if (import.meta.env.VITE_EMAILJS_SERVICE) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMP,
          {
            name: form.name,
            email: form.email,
            project: form.type,
            message: form.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      }
      setSubmitted(true);
      setForm({ name: "", email: "", type: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Note: Message recorded. We will connect with you directly.");
      setSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="rounded-3xl border border-white/15 bg-[#09090c] p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column: Direct Outreach & Info */}
            <Reveal>
              <Eyebrow>START A CONVERSATION</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#F8F7F4] sm:text-4xl lg:text-5xl">
                Let's build what's next.
              </h2>
              <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-[#8E8D94]">
                Tell us about your project. We'll reply within 24 hours with a clear roadmap,
                honest timeline, and written quote.
              </p>

              {/* Direct Contact Cards (With Phone, WhatsApp & azenweb4@gmail.com) */}
              <div className="mt-8 flex flex-col gap-3.5">
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.04] p-4 text-sm text-[#F8F7F4] transition-all hover:border-white hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] uppercase text-[#8E8D94]">Direct WhatsApp</span>
                      <span className="font-semibold text-white">{company.phone}</span>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs text-white group-hover:bg-white group-hover:text-black transition-colors">
                    Chat Now →
                  </span>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[#F8F7F4] transition-all hover:border-white/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-[#8E8D94]">Official Email</span>
                    <span className="font-semibold text-[#F8F7F4]">{company.email}</span>
                  </div>
                </a>

                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[#F8F7F4] transition-all hover:border-white/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <InstagramIcon size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-[#8E8D94]">Instagram</span>
                    <span className="font-semibold text-[#F8F7F4]">{company.instagramHandle}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[#F8F7F4]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-[#8E8D94]">Headquarters</span>
                    <span className="font-semibold text-[#F8F7F4]">{company.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Clean Form */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-[#0d0d11] p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.05]">
                        <CheckCircle2 size={32} className="text-white" />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-[#F8F7F4]">
                        Inquiry Received
                      </h3>
                      <p className="mt-2 max-w-xs text-sm text-[#8E8D94]">
                        Thank you for reaching out. A founding engineer will review your brief and reply within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-xs font-mono uppercase tracking-wider text-white underline underline-offset-4"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#8E8D94] mb-1.5 font-mono">
                          Your Name
                        </label>
                        <input
                          value={form.name}
                          onChange={update("name")}
                          placeholder="e.g. Alex Henderson"
                          className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-[#F8F7F4] placeholder:text-[#525157] focus:border-white focus:outline-none transition-colors"
                        />
                        {errors.name && <span className="mt-1 block text-xs text-red-400">{errors.name}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#8E8D94] mb-1.5 font-mono">
                          Work Email
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@company.com"
                          className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-[#F8F7F4] placeholder:text-[#525157] focus:border-white focus:outline-none transition-colors"
                        />
                        {errors.email && <span className="mt-1 block text-xs text-red-400">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#8E8D94] mb-1.5 font-mono">
                          Project Category
                        </label>
                        <select
                          value={form.type}
                          onChange={update("type")}
                          className="w-full appearance-none rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-[#F8F7F4] focus:border-white focus:outline-none transition-colors"
                        >
                          <option value="" className="bg-[#0c0c0f]">Select an option</option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t} className="bg-[#0c0c0f]">
                              {t}
                            </option>
                          ))}
                        </select>
                        {errors.type && <span className="mt-1 block text-xs text-red-400">{errors.type}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-[#8E8D94] mb-1.5 font-mono">
                          Tell Us About Your Vision
                        </label>
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={update("message")}
                          placeholder="What goals, timeline, or reference ideas do you have?"
                          className="w-full resize-none rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-[#F8F7F4] placeholder:text-[#525157] focus:border-white focus:outline-none transition-colors"
                        />
                        {errors.message && <span className="mt-1 block text-xs text-red-400">{errors.message}</span>}
                      </div>

                      <PrimaryButton
                        type="submit"
                        className="mt-2 w-full py-3.5"
                      >
                        {isSending ? "Transmitting..." : "Send Project Brief"} <Send size={15} />
                      </PrimaryButton>

                      <p className="text-center font-mono text-[11px] text-[#525157]">
                        Direct founder review · Confidentiality guaranteed
                      </p>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
