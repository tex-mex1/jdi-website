"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const leaders = [
  {
    initials: "ZC",
    name: "Zachary Capra",
    role: "Managing Member",
    bio: "Internal counsel and managing member of JDI Energy Partners LLC. Responsible for fund governance, securities compliance, investor relations, and regulatory oversight. Licensed attorney barred in Arizona and Texas with national energy and securities experience.",
  },
  {
    initials: "JV",
    name: "Justin Vakilzadeh",
    role: "Principal, OpCo",
    bio: "Co-founder of the Fund's operating company. Leads deal sourcing, operator relationship management, technical evaluation, and asset management across Oklahoma and Texas basins. Drives capital formation and investor development strategy.",
  },
  {
    initials: "RB",
    name: "Ryan Bucknam",
    role: "Principal, OpCo",
    bio: "Co-founder of the Fund's operating company. Oversees deal execution, drilling program evaluation, production performance tracking, and midstream infrastructure assessment. Manages field-level operator coordination and technical diligence.",
  },
];

export default function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 bg-[#0D1526] relative overflow-hidden">
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
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-4">LEADERSHIP</h2>
          <p className="font-body text-[#C9A84C] text-lg mb-6">
            A combined 43 years of experience across upstream operations, capital markets, and energy law.
          </p>
          <p className="font-body text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
            Our principals have spent decades building operator relationships, evaluating formations, and deploying
            capital across the Mid-Continent, Permian, and Williston basins. The team processes 15 to 20 deal
            opportunities per week. Each principal brings a distinct competency to the partnership: legal and
            regulatory oversight, technical evaluation and deal origination, and field-level operational diligence.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="glass-card p-8"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#0A0E1A] border-2 border-[#C9A84C]/40 flex items-center justify-center flex-shrink-0">
                  <span
                    className="font-heading text-xl"
                    style={{
                      background: "linear-gradient(135deg, #F0D060, #C9A84C, #D4AF37)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {leader.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white leading-tight">{leader.name}</h3>
                  <p className="font-body text-[#C9A84C] text-sm mt-0.5">{leader.role}</p>
                </div>
              </div>

              <div className="border-t border-[#C9A84C]/15 pt-5">
                <p className="font-body text-gray-400 leading-relaxed text-sm">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
