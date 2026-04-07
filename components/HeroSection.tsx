"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, TrendingUp } from "lucide-react";

function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(201,168,76,0.3)"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="100%" stopColor="#0A0E1A" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#fade)" />
      </svg>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C9A84C]/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0D1526]/80 rounded-full blur-3xl" />
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C9A84C] rounded-full"
          style={{
            left: `${(i * 17 + 5) % 100}%`,
            top: `${(i * 23 + 10) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i % 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const stats = [
  { value: "5 Basins", label: "Across 4 States" },
  { value: "Non-Op", label: "Capital Partner Model" },
  { value: "20%+", label: "Minimum Target IRR" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0E1A]"
    >
      <AnimatedGridBackground />
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex-1 flex flex-col items-center justify-center">


        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 max-w-5xl"
        >
          <span className="text-white">A generational buying opportunity in America&apos;s most productive basins,</span>{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F0D060, #C9A84C, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            structured for current income and meaningful tax advantage.
          </span>
        </motion.h1>

        {/* Body paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-body"
        >
          JDI Energy Partners deploys capital behind established, institutional-grade operators across five proven
          U.S. basins. We are a capital partner, not an operator. Our investors benefit from quarterly cash
          distributions, substantial first-year tax offsets, and the long-term upside of established reserves with
          8- to 24-month target payout periods on horizontal wells.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#0A0E1A] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F0D060] transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)] font-body"
          >
            Request Information
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#strategy"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#C9A84C] border border-[#C9A84C]/40 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/60 transition-all duration-300 font-body"
          >
            Our Strategy
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-600 mb-8"
        >
          <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Stat callouts */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card gold-glow p-6 text-center"
            >
              <div
                className="font-heading text-3xl md:text-4xl mb-1"
                style={{
                  background: "linear-gradient(135deg, #F0D060, #C9A84C, #D4AF37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
