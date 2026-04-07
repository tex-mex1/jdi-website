"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, DollarSign, Calendar, Building2 } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: 2.4,
    suffix: "B+",
    prefix: "$",
    label: "Assets Under Management",
    description: "Institutional capital deployed",
  },
  {
    icon: TrendingUp,
    value: 18.7,
    suffix: "%",
    prefix: "",
    label: "Annual Return (Net)",
    description: "10-year track record",
  },
  {
    icon: Calendar,
    value: 12,
    suffix: "+",
    prefix: "",
    label: "Years of Operation",
    description: "Since fund inception",
  },
  {
    icon: Building2,
    value: 47,
    suffix: "",
    prefix: "",
    label: "Portfolio Companies",
    description: "Active investments",
  },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const displayValue =
    value % 1 !== 0
      ? count.toFixed(1)
      : Math.floor(count).toString();

  return (
    <span className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 bg-[#0D1526] border-y border-[#C9A84C]/10 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A] via-[#0D1526] to-[#0A0E1A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center group-hover:bg-[#C9A84C]/20 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div
                    className="text-4xl md:text-5xl font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, #F0D060, #C9A84C, #D4AF37)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      inView={inView}
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {stat.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {stat.description}
                    </p>
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
