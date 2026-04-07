"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const taxItems = [
  { label: "Intangible Drilling Costs (IDC)", value: "60-80% deductible in Year 1" },
  { label: "Tangible Equipment Depreciation", value: "20-25% accelerated" },
  { label: "Percentage Depletion", value: "15% of gross income (ongoing)" },
  { label: "OK Horizontal Well Incentive", value: "5% reduced rate (36 months)" },
  { label: "Combined First-Year Offset", value: "75-95% of invested capital" },
];

export default function TaxBenefitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tax" className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">
            TAX BENEFIT ARCHITECTURE
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Oil and gas working interests provide among the most compelling tax-advantaged structures available
            to accredited investors under current federal law.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Tax benefit line items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {taxItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className={`flex items-center justify-between py-4 px-6 rounded-xl ${
                  i === taxItems.length - 1
                    ? "bg-[#C9A84C]/10 border border-[#C9A84C]/30"
                    : "bg-[#0D1526]/80 border border-[#C9A84C]/10"
                }`}
              >
                <span className="font-body text-gray-300 text-base">{item.label}</span>
                <span
                  className="font-heading text-base ml-4 text-right"
                  style={{ color: "#C9A84C" }}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Large callout box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-12 text-center border-2 border-[#C9A84C]/40"
            style={{
              boxShadow: "0 0 60px rgba(201, 168, 76, 0.2), 0 0 30px rgba(201, 168, 76, 0.1)",
            }}
          >
            <div
              className="font-heading text-6xl md:text-8xl mb-4"
              style={{
                background: "linear-gradient(135deg, #F0D060, #C9A84C, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              75-95%
            </div>
            <div className="font-body text-gray-300 text-lg leading-relaxed">
              First-Year Tax Offset on Invested Capital
            </div>
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-body text-gray-500 text-xs text-center max-w-3xl mx-auto leading-relaxed"
        >
          Tax benefits depend on individual investor circumstances, including income profile, passive activity
          status, and applicable state and federal tax rates. Prospective investors should consult their own tax
          advisors. Benefits described herein are subject to change by legislative action.
        </motion.p>
      </div>
    </section>
  );
}
