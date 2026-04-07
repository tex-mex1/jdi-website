"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Disciplined Deal Selection",
    body: "Every acquisition must clear a 20% minimum unlevered IRR at conservative pricing before the Investment Committee will approve deployment of fund capital. We target a portfolio mix of 70% development-stage (PUD) positions to capture higher returns and 30% stabilized producing (PDP) assets in stacked-play basins with infill upside. Horizontal shale wells with 8- to 24-month payout periods are the primary target, with oil and liquids-weighted production comprising at least 55% of the portfolio.",
  },
  {
    title: "Proven Basins, Proven Operators",
    body: "We concentrate on five basins with decades of production history and deep existing infrastructure: the Western Anadarko, SCOOP/STACK, Permian, Williston, and San Juan. Within these basins, we partner only with operators who have a minimum of three years of continuous basin operations, at least ten completed wells, clean regulatory standing, and no bankruptcy history. Each operator is evaluated using a proprietary due diligence scorecard before any capital is committed.",
  },
  {
    title: "Current Income from Day One",
    body: "The Fund is designed to generate quarterly cash distributions beginning in the first full quarter following initial production. This is an income fund, not a flip fund: assets are held for their productive life and cash flow is distributed to investors. A disciplined hedging program protects near-term revenue while preserving upside commodity exposure, and a minimum $1 million capital reserve ensures the fund can act on follow-on AFE elections and opportunistic acquisitions without delay.",
  },
];

export default function InvestmentStrategySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="strategy" className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="font-heading text-xs tracking-[0.25em] uppercase text-[#C9A84C] mb-4"
          >
            INVESTMENT STRATEGY
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">
            INVESTMENT STRATEGY
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We deploy capital through a proven, repeatable process built around a rigorous investment thesis and
            buy box framework. Every dollar is placed behind an operator who has already proven the formation,
            permitted the wells, and built the infrastructure.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="glass-card p-8 border-t-2 border-t-[#C9A84C] border-x border-b border-[#C9A84C]/20"
            >
              <h3 className="font-heading text-xl text-white mb-4">{card.title}</h3>
              <p className="font-body text-gray-400 leading-relaxed text-base">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal rule + summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <div className="border-t border-[#C9A84C]/20 pt-10">
            <p className="font-body text-gray-400 text-lg max-w-4xl mx-auto text-center leading-relaxed">
              The fund does not operate wells, does not drill wells, and does not take excessive exploration risk.
              Our non-operated model deploys across multiple operators and formations simultaneously, delivering
              portfolio-level diversification without the capital intensity, staffing requirements, or operational
              liability of direct operations. The current market presents a generational buying opportunity as
              smaller operators divest non-core assets to fund new drilling programs, creating a deep pipeline of
              cash-flowing positions available at attractive valuations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
