"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    number: "1",
    title: "Institutional-Grade Concentration Limits",
    body: "No single basin exceeds 65% of commitments. No single operator exceeds 50%. No single well exceeds 4% of total fund capital, and no single formation exceeds 30%. A minimum of 20 wells is required before the portfolio is considered diversified. These hard limits are embedded in the fund's investment guidelines, not left to discretion.",
  },
  {
    number: "2",
    title: "Rigorous Operator Selection",
    body: "In a non-operated fund, the operator is the investment. Every operator is evaluated through a proprietary due diligence scorecard covering basin-specific track record, minimum well count, financial condition, safety and compliance history, and communication standards. Operators in bankruptcy, with outstanding plug orders, or with unresolved environmental violations are automatically excluded.",
  },
  {
    number: "3",
    title: "Five-Phase Due Diligence",
    body: "Every deal passes through a structured five-phase process: initial screening against the buy box, technical evaluation with full economic modeling and sensitivity analysis, legal and title review, Investment Committee vote, and formal closing with hedging implementation. Any single hard exclusion terminates evaluation immediately with no exceptions.",
  },
  {
    number: "4",
    title: "Capital Efficiency and Structural Protection",
    body: "The non-operated model eliminates the overhead of drilling rigs, field offices, and operations staff. Management resources are directed entirely to deal sourcing, due diligence, and portfolio construction. The fund does not take on operator-level environmental, regulatory, or plugging and abandonment liability, and the structural exclusion of operated positions is permanent and cannot be overridden without a PPM amendment and investor consent.",
  },
];

export default function WhyInvestSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-24 bg-[#0D1526] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
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
            WHY INVEST WITH JDI
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A differentiated value proposition built on structural advantage, institutional-grade risk controls,
            and alignment of interest between management and investors.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="glass-card p-8 border border-gray-700/50 hover:border-[#C9A84C]/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0A0E1A] border border-[#C9A84C]/30 flex items-center justify-center group-hover:border-[#C9A84C]/70 transition-colors">
                  <span
                    className="font-heading text-xl"
                    style={{
                      background: "linear-gradient(135deg, #F0D060, #C9A84C, #D4AF37)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {card.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white mb-3">{card.title}</h3>
                  <p className="font-body text-gray-400 leading-relaxed">{card.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
