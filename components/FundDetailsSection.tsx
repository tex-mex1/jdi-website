"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, Percent, BarChart3, Info } from "lucide-react";

const fundDetails = [
  { label: "Fund Type", value: "Private Equity / Infrastructure", icon: BarChart3 },
  { label: "Minimum Investment", value: "$5,000,000", icon: Shield },
  { label: "Lock-up Period", value: "7 Years", icon: Lock },
  { label: "Management Fee", value: "1.5% per annum", icon: Percent },
  { label: "Carried Interest", value: "20% above 8% hurdle", icon: Info },
];

const allocation = [
  { sector: "Renewable Energy", percentage: 38, color: "#C9A84C" },
  { sector: "Infrastructure", percentage: 28, color: "#D4AF37" },
  { sector: "Oil & Gas", percentage: 18, color: "#F0D060" },
  { sector: "Energy Technology", percentage: 11, color: "#B8960C" },
  { sector: "Cash & Other", percentage: 5, color: "#6B5B2A" },
];

const riskLevels = ["Low", "Moderate", "Balanced", "Growth", "Aggressive"];
const riskIndex = 2; // Balanced

function AnimatedBar({ percentage, color, delay }: { percentage: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full bg-[#111827] rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export default function FundDetailsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fund" className="py-24 bg-[#0D1526] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium mb-6">
            Fund Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fund Structure & Terms
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent fee structure, clearly defined terms, and disciplined
            risk management designed for institutional limited partners.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Fund Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 gold-glow"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#C9A84C]" />
              Fund Parameters
            </h3>
            <div className="space-y-5">
              {fundDetails.map((detail, i) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex items-center justify-between py-3 border-b border-[#C9A84C]/10 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <span className="text-gray-400 text-sm">{detail.label}</span>
                    </div>
                    <span className="text-white font-semibold text-sm text-right">
                      {detail.value}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Risk Profile */}
            <div className="mt-8 p-4 rounded-xl bg-[#111827]/60 border border-[#C9A84C]/10">
              <p className="text-gray-400 text-sm mb-3 font-medium">Risk Profile</p>
              <div className="flex justify-between mb-2">
                {riskLevels.map((level, i) => (
                  <span
                    key={level}
                    className={`text-xs ${
                      i === riskIndex
                        ? "text-[#C9A84C] font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {level}
                  </span>
                ))}
              </div>
              <div className="flex gap-1">
                {riskLevels.map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                      i <= riskIndex
                        ? "bg-gradient-to-r from-[#B8960C] to-[#C9A84C]"
                        : "bg-[#1a2540]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Asset Allocation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 gold-glow"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#C9A84C]" />
              Asset Allocation
            </h3>
            <div className="space-y-5">
              {allocation.map((item, i) => (
                <motion.div
                  key={item.sector}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-gray-300 text-sm">{item.sector}</span>
                    </div>
                    <span className="text-[#C9A84C] text-sm font-semibold">
                      {item.percentage}%
                    </span>
                  </div>
                  <AnimatedBar
                    percentage={item.percentage}
                    color={item.color}
                    delay={0.4 + i * 0.1}
                  />
                </motion.div>
              ))}
            </div>

            {/* AUM Breakdown */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Total AUM", value: "$2.4B", color: "text-[#C9A84C]" },
                { label: "Active LPs", value: "143", color: "text-white" },
                { label: "Deployed", value: "87%", color: "text-green-400" },
                { label: "Dry Powder", value: "$312M", color: "text-blue-400" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-lg bg-[#111827]/60 border border-[#C9A84C]/10 text-center"
                >
                  <div className={`text-lg font-bold ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
