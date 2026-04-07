"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Building2, Target, ArrowRight } from "lucide-react";

const theses = [
  {
    icon: Sun,
    title: "Energy Transition",
    subtitle: "Renewable & Clean Energy Opportunities",
    description:
      "We capitalize on the structural shift toward renewable energy by investing in solar, wind, battery storage, and green hydrogen projects at the forefront of the global energy transition. Our portfolio companies benefit from long-term contracted cash flows, government incentives, and the accelerating corporate demand for clean power.",
    highlights: [
      "Utility-scale solar & wind",
      "Battery storage systems",
      "Green hydrogen production",
      "Carbon credit markets",
    ],
    color: "#C9A84C",
    gradient: "from-[#C9A84C]/20 to-transparent",
  },
  {
    icon: Building2,
    title: "Infrastructure Assets",
    subtitle: "Long-Term Stable Cash Flows",
    description:
      "Essential energy infrastructure, including pipelines, terminals, transmission networks, and distribution systems, provides inflation-protected, contractually secured revenue streams. We target assets with natural monopoly characteristics, high barriers to entry, and multi-decade operating lives with limited capital reinvestment requirements.",
    highlights: [
      "Midstream pipelines",
      "LNG terminals & storage",
      "Power transmission grids",
      "Distribution networks",
    ],
    color: "#D4AF37",
    gradient: "from-[#D4AF37]/20 to-transparent",
  },
  {
    icon: Target,
    title: "Strategic Acquisitions",
    subtitle: "Value Creation through Operational Excellence",
    description:
      "Our operational expertise enables us to acquire underperforming energy assets and transform them through rigorous operational improvements, balance sheet optimization, and management team upgrades. We target situations where our sector expertise provides a distinct informational and operational edge over generalist capital.",
    highlights: [
      "Operational turnarounds",
      "Balance sheet restructuring",
      "Management augmentation",
      "ESG value creation",
    ],
    color: "#F0D060",
    gradient: "from-[#F0D060]/20 to-transparent",
  },
];

export default function InvestmentThesisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium mb-6">
            Investment Strategy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Investment Thesis
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three complementary strategies that work together to generate
            superior risk-adjusted returns across energy market cycles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {theses.map((thesis, i) => {
            const Icon = thesis.icon;
            return (
              <motion.div
                key={thesis.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                className="group glass-card p-8 hover:gold-glow transition-all duration-500 relative overflow-hidden cursor-default"
              >
                {/* Background gradient */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${thesis.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${thesis.color}20`,
                      border: `1px solid ${thesis.color}40`,
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: thesis.color }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ backgroundColor: thesis.color }}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {thesis.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: thesis.color }}
                  >
                    {thesis.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {thesis.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {thesis.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: thesis.color }}
                        />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: thesis.color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
