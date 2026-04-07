"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const fundGrowthData = [
  { year: "2013", value: 100 },
  { year: "2014", value: 118 },
  { year: "2015", value: 132 },
  { year: "2016", value: 148 },
  { year: "2017", value: 174 },
  { year: "2018", value: 195 },
  { year: "2019", value: 229 },
  { year: "2020", value: 218 },
  { year: "2021", value: 274 },
  { year: "2022", value: 312 },
  { year: "2023", value: 368 },
  { year: "2024", value: 421 },
];

const annualReturnsData = [
  { year: "2013", return: 18 },
  { year: "2014", return: 18 },
  { year: "2015", return: 11.9 },
  { year: "2016", return: 12.1 },
  { year: "2017", return: 17.6 },
  { year: "2018", return: 12.1 },
  { year: "2019", return: 17.4 },
  { year: "2020", return: -4.8 },
  { year: "2021", return: 25.7 },
  { year: "2022", return: 13.9 },
  { year: "2023", return: 17.9 },
  { year: "2024", return: 14.4 },
];

const allocationData = [
  { name: "Renewable Energy", value: 38, color: "#C9A84C" },
  { name: "Infrastructure", value: 28, color: "#D4AF37" },
  { name: "Oil & Gas", value: 18, color: "#F0D060" },
  { name: "Energy Tech", value: 11, color: "#B8960C" },
  { name: "Other", value: 5, color: "#8B7537" },
];

const tabs = ["Fund Growth", "Annual Returns", "Asset Allocation"];

const CustomTooltip = ({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number; name?: string }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111827] border border-[#C9A84C]/30 rounded-lg p-3 shadow-xl">
        <p className="text-[#C9A84C] font-semibold text-sm">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} className="text-gray-300 text-sm">
            {entry.name === "return"
              ? `Return: ${entry.value > 0 ? "+" : ""}${entry.value}%`
              : entry.name === "value"
              ? `Index: ${entry.value}`
              : `${entry.name}: ${entry.value}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function PerformanceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium mb-6">
            Fund Performance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Consistent Track Record
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A decade of disciplined investment management delivering superior
            risk-adjusted returns across market cycles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-8 gold-glow"
        >
          {/* Tab Switcher */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-[#C9A84C] text-[#0A0E1A] shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                    : "text-gray-400 hover:text-white border border-gray-700 hover:border-[#C9A84C]/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Charts */}
          <div className="h-80">
            {activeTab === 0 && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={fundGrowthData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.1)" />
                  <XAxis dataKey="year" tick={{ fill: "#9CA3AF", fontSize: 12 }} axisLine={{ stroke: "rgba(201,168,76,0.2)" }} />
                  <YAxis tick={{ fill: "#9CA3AF", fontSize: 12 }} axisLine={{ stroke: "rgba(201,168,76,0.2)" }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#C9A84C"
                    strokeWidth={2.5}
                    fill="url(#goldGradient)"
                    dot={{ fill: "#C9A84C", strokeWidth: 0, r: 3 }}
                    activeDot={{ r: 6, fill: "#F0D060", stroke: "#C9A84C", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {activeTab === 1 && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={annualReturnsData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.1)" />
                  <XAxis dataKey="year" tick={{ fill: "#9CA3AF", fontSize: 12 }} axisLine={{ stroke: "rgba(201,168,76,0.2)" }} />
                  <YAxis tick={{ fill: "#9CA3AF", fontSize: 12 }} axisLine={{ stroke: "rgba(201,168,76,0.2)" }} tickFormatter={(v) => `${v}%`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="return"
                    radius={[4, 4, 0, 0]}
                  >
                    {annualReturnsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.return >= 0 ? "#C9A84C" : "#ef4444"}
                        opacity={0.85}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}

            {activeTab === 2 && (
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-full">
                <ResponsiveContainer width={300} height="100%">
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {allocationData.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="flex items-center gap-4 min-w-48">
                        <span className="text-gray-300 text-sm flex-1">{item.name}</span>
                        <span className="text-[#C9A84C] text-sm font-semibold">
                          {item.value}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-gray-600 text-xs mt-6 text-center">
            Past performance is not indicative of future results. Returns shown are net of management fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
