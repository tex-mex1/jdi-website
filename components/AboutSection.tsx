"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "5", label: "Target Basins" },
  { value: "4", label: "Core States (OK, TX, NM & ND)" },
  { value: "75-95%", label: "Year 1 Tax Offset on Invested Capital" },
  { value: "8%", label: "Cumulative Annual Preferred Return" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-[#0D1526] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span
            className="font-heading text-xs tracking-[0.2em] uppercase text-[#C9A84C]"
          >
            About JDI Energy Partners
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">
              43 years of combined experience. Built by operators. Managed for investors.
            </h2>

            <div className="space-y-6 font-body text-gray-300 leading-relaxed text-lg">
              <p>
                JDI Energy Partners LLC is an energy-focused investment firm that acquires and manages
                non-operated working interests in upstream oil and gas assets across five proven U.S. basins
                spanning Oklahoma, Texas, New Mexico, and North Dakota. Our principals bring a combined 43 years
                of experience building operator relationships, evaluating formations, and deploying capital across
                the Mid-Continent and Permian basins. The fund monetizes that network at institutional scale.
              </p>
              <p>
                We source opportunities through ground-game leasing, off-market deals with industry partners,
                direct acquisitions from existing working interest owners, AFE participation elections under
                existing joint operating agreements, operator-directed offerings, and negotiated farmins. This
                diversified origination approach creates a deep, proprietary deal pipeline that extends well
                beyond the public A&amp;D market.
              </p>
              <p>
                We believe transparency builds lasting partnerships. Every investor receives clear, timely
                reporting on portfolio performance, capital deployment, and asset-level economics, because trust
                is earned through visibility, not promises.
              </p>
            </div>
          </motion.div>

          {/* Right: 2x2 Metric Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 border border-[#C9A84C]/30 bg-[#0A0E1A]/60"
              >
                <div
                  className="font-heading text-3xl md:text-4xl mb-2"
                  style={{
                    background: "linear-gradient(135deg, #F0D060, #C9A84C, #D4AF37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {metric.value}
                </div>
                <div className="font-body text-gray-400 text-sm leading-snug">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
