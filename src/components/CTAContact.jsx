import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser"; // Added missing import
import InstagramIcon from "./ui/InstagramIcon";
import { social } from "../data/content";
import { Reveal, Eyebrow, PrimaryButton } from "./ui/Primitives";

const PROJECT_TYPES = ["Website", "Web App / SaaS", "Dashboard", "AI Integration", "Not sure yet"];

export default function CTAContact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Enter a valid email.";
    if (!form.type) err.type = "Pick a project type.";
    if (!form.message.trim() || form.message.trim().length < 10)
      err.message = "A couple sentences helps us respond better.";
    return err;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);

    if (Object.keys(err).length) return;

    try {
      // Using Vite's import.meta.env syntax. 
      // (If using Create React App, change these to process.env.REACT_APP_...)
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

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        type: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send.");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-violet/30 bg-gradient-to-br from-raised via-raised to-bg p-1">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-violet/25 blur-[100px]" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan/15 blur-[100px]" />

          <div className="relative grid grid-cols-1 gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
            <Reveal>
              <Eyebrow>Let's build</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[44px]">
                Got an idea? Let's get it to launch.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Tell us what you're building below, or skip the form entirely
                and DM us on Instagram — either way, you'll hear back within
                24 hours.
              </p>
              <motion.a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-cyan/50 hover:text-cyan-soft"
              >
                <InstagramIcon size={16} /> DM us on Instagram
              </motion.a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-xl2 p-6 sm:p-7">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center justify-center gap-3 py-14 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <CheckCircle2 size={44} className="text-cyan-soft" />
                      </motion.div>
                      <h3 className="font-display text-lg font-semibold text-ink">Message sent</h3>
                      <p className="max-w-xs text-sm text-muted">
                        Thanks, {form.name.split(" ")[0]}. We'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: "", email: "", type: "", message: "" });
                        }}
                        className="mt-2 text-sm font-medium text-violet-soft"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={onSubmit}
                      noValidate
                      className="flex flex-col gap-4"
                    >
                      <Field label="Name" error={errors.name}>
                        <input
                          value={form.name}
                          onChange={update("name")}
                          placeholder="Your name"
                          className={inputClass(errors.name)}
                        />
                      </Field>
                      <Field label="Email" error={errors.email}>
                        <input
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@company.com"
                          className={inputClass(errors.email)}
                        />
                      </Field>
                      <Field label="Project type" error={errors.type}>
                        <select
                          value={form.type}
                          onChange={update("type")}
                          className={inputClass(errors.type) + " appearance-none"}
                        >
                          <option value="">Select one</option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Tell us about it" error={errors.message}>
                        <textarea
                          value={form.message}
                          onChange={update("message")}
                          rows={4}
                          placeholder="What are you trying to build?"
                          className={inputClass(errors.message) + " resize-none"}
                        />
                      </Field>

                      <PrimaryButton type="submit" className="mt-2 w-full">
                        Send message <Send size={15} />
                      </PrimaryButton>
                    </motion.form>
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

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-muted">{label}</span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-lg border bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-violet/50 ${
    error ? "border-red-400/50" : "border-line"
  }`;
}