"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, CheckCircle, AlertCircle, Globe } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 4000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full bg-[#111827] border border-[#C9A84C]/20 rounded-xl px-4 py-3.5 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200 font-body";
  const errorClass = "text-red-400 text-xs mt-1 font-body";

  return (
    <section id="contact" className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A84C]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            START THE CONVERSATION
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto">
            We welcome inquiries from accredited investors and qualified advisors interested in learning more about
            JDI Energy Partners and the Fund.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6">
              <h3 className="font-heading text-white text-lg mb-2">Contact Us</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed mb-5">
                For accredited investors and their advisors seeking tax-advantaged energy income through
                non-operated working interests in proven U.S. basins. All inquiries are treated with the
                strictest confidence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <a
                    href="mailto:zach@jdiep.com"
                    className="font-body text-gray-300 text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    zach@jdiep.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <span className="font-body text-gray-300 text-sm">jdiep.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 gold-glow">
              <h3 className="font-heading text-xl text-white mb-6">Submit Inquiry</h3>

              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="font-heading text-xl text-white mb-2">Message Sent</h4>
                  <p className="font-body text-gray-400">
                    Thank you for reaching out. We will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-gray-400 text-xs mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        {...register("name")}
                        className={inputClass}
                        placeholder="John Smith"
                      />
                      {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-gray-400 text-xs mb-2 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className={inputClass}
                        placeholder="john@firm.com"
                      />
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-gray-400 text-xs mb-2 uppercase tracking-wider">
                      Phone (optional)
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-gray-400 text-xs mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your investment interests or questions"
                    />
                    {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                  </div>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-900/20 border border-red-500/30 text-red-400 text-sm font-body">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Failed to send message. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-[#0A0E1A] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F0D060] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] font-body"
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0A0E1A]/40 border-t-[#0A0E1A] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  <p className="font-body text-gray-600 text-xs text-center">
                    By submitting this form, you confirm you are an accredited investor. Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
