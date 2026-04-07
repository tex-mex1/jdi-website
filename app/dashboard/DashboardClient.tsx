"use client";

import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Zap,
  TrendingUp,
  DollarSign,
  FileText,
  LogOut,
  Bell,
  Settings,
  ChevronRight,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import type { Session } from "next-auth";

const portfolioData = [
  { month: "Jan", value: 1000000 },
  { month: "Feb", value: 1024000 },
  { month: "Mar", value: 1048000 },
  { month: "Apr", value: 1039000 },
  { month: "May", value: 1076000 },
  { month: "Jun", value: 1112000 },
  { month: "Jul", value: 1098000 },
  { month: "Aug", value: 1148000 },
  { month: "Sep", value: 1194000 },
  { month: "Oct", value: 1238000 },
  { month: "Nov", value: 1282000 },
  { month: "Dec", value: 1187000 },
];

const recentDocuments = [
  { name: "Q4 2024 Capital Account Statement", date: "Jan 15, 2025", type: "Statement" },
  { name: "Annual Fund Report 2024", date: "Jan 10, 2025", type: "Report" },
  { name: "Tax Document K-1 2024", date: "Jan 8, 2025", type: "Tax" },
  { name: "Q3 2024 Capital Account Statement", date: "Oct 15, 2024", type: "Statement" },
];

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value}`;
};

export default function DashboardClient({ session }: { session: Session }) {
  const userName = session.user?.name || session.user?.email || "Investor";

  return (
    <div className="min-h-screen bg-[#040813]">
      {/* Dashboard Navbar */}
      <nav className="bg-[#0A0E1A]/95 backdrop-blur-md border-b border-[#C9A84C]/15 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#D4AF37] flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#0A0E1A]" strokeWidth={2.5} />
              </div>
              <span className="text-white font-semibold text-sm">
                JDI Energy Partners
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-lg bg-[#111827] border border-[#C9A84C]/15 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-[#111827] border border-[#C9A84C]/15 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-red-400 border border-gray-700 hover:border-red-500/30 transition-all duration-200"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[#C9A84C] text-sm font-medium mb-1">
            Welcome back,
          </p>
          <h1 className="text-3xl font-bold text-white">{userName}</h1>
          <p className="text-gray-500 text-sm mt-1">
            Last updated: {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </motion.div>

        {/* Portfolio Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Portfolio Value",
              value: "$1.19M",
              change: "+18.7%",
              positive: true,
              icon: DollarSign,
            },
            {
              label: "Total Returns",
              value: "$187,430",
              change: "+18.7%",
              positive: true,
              icon: TrendingUp,
            },
            {
              label: "Capital Invested",
              value: "$1,000,000",
              change: "Original",
              positive: true,
              icon: Zap,
            },
            {
              label: "Next Distribution",
              value: "Mar 31, 2025",
              change: "Quarterly",
              positive: true,
              icon: Calendar,
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      card.positive
                        ? "bg-green-900/30 text-green-400"
                        : "bg-red-900/30 text-red-400"
                    }`}
                  >
                    {card.change}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mb-1">{card.label}</p>
                <p className="text-white font-bold text-lg">{card.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Portfolio Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold">Portfolio Performance</h3>
                <p className="text-gray-500 text-sm">2024 YTD</p>
              </div>
              <div className="flex items-center gap-1.5 text-green-400 text-sm font-semibold">
                <ArrowUpRight className="w-4 h-4" />
                +18.7%
              </div>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="dashGoldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.08)" />
                  <XAxis dataKey="month" tick={{ fill: "#6B7280", fontSize: 11 }} axisLine={{ stroke: "rgba(201,168,76,0.1)" }} />
                  <YAxis tick={{ fill: "#6B7280", fontSize: 11 }} axisLine={{ stroke: "rgba(201,168,76,0.1)" }} tickFormatter={formatCurrency} width={70} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#111827", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px" }}
                    formatter={(value) => [formatCurrency(Number(value)), "Portfolio Value"]}
                    labelStyle={{ color: "#C9A84C" }}
                    itemStyle={{ color: "#D1D5DB" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#C9A84C"
                    strokeWidth={2}
                    fill="url(#dashGoldGradient)"
                    dot={false}
                    activeDot={{ r: 5, fill: "#F0D060", stroke: "#C9A84C" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Account Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="text-white font-semibold mb-5">Account Details</h3>
            <div className="space-y-4">
              {[
                { label: "Account Type", value: "Limited Partner" },
                { label: "Entity", value: "Individual" },
                { label: "Commitment", value: "$1,000,000" },
                { label: "Vintage Year", value: "2022" },
                { label: "Fund", value: "JDI Energy Fund IV" },
                { label: "Status", value: "Active", highlight: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-2.5 border-b border-[#C9A84C]/8 last:border-0"
                >
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span
                    className={`text-sm font-medium ${
                      item.highlight ? "text-green-400" : "text-gray-300"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="glass-card p-6 mt-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold">Recent Documents</h3>
            <button className="text-[#C9A84C] text-sm hover:text-[#F0D060] transition-colors flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {recentDocuments.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="flex items-center justify-between p-4 rounded-xl bg-[#111827]/40 border border-[#C9A84C]/8 hover:border-[#C9A84C]/20 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">
                      {doc.name}
                    </p>
                    <p className="text-gray-600 text-xs">{doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-0.5 rounded bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20">
                    {doc.type}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-[#C9A84C] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
