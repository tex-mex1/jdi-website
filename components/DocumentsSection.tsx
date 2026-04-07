"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, BarChart2, BookOpen, Shield, Lock, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const documents = [
  {
    icon: BookOpen,
    title: "Fund Overview",
    description:
      "Executive summary of JDI Energy Partners, including investment strategy, team credentials, and fund structure.",
    type: "PDF",
    pages: "24 pages",
    updated: "Q1 2024",
    public: true,
  },
  {
    icon: BarChart2,
    title: "Financial Statements",
    description:
      "Audited financial statements for the most recent fiscal year, prepared in accordance with GAAP standards.",
    type: "PDF",
    pages: "87 pages",
    updated: "Annual",
    public: false,
  },
  {
    icon: FileText,
    title: "Investment Memo",
    description:
      "Detailed investment thesis, market analysis, competitive positioning, and risk factors for the current fund.",
    type: "PDF",
    pages: "52 pages",
    updated: "Q4 2023",
    public: false,
  },
  {
    icon: Shield,
    title: "LP Agreement",
    description:
      "Limited Partnership Agreement including full legal terms, governance rights, and LP protections.",
    type: "PDF",
    pages: "118 pages",
    updated: "Fund Close",
    public: false,
  },
];

export default function DocumentsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="documents" className="py-24 bg-[#0D1526] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium mb-6">
            Document Repository
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investor Documents
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Institutional-grade transparency. All fund documents are available
            to verified limited partners through our secure investor portal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {documents.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group glass-card p-6 hover:gold-glow transition-all duration-300 relative overflow-hidden"
              >
                {/* Restricted overlay hint */}
                {!doc.public && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111827] border border-[#C9A84C]/20 text-xs text-gray-500">
                      <Lock className="w-3 h-3" />
                      LP Only
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{doc.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {doc.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {doc.type} · {doc.pages}
                      </span>
                      <span>Updated: {doc.updated}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#C9A84C]/10">
                  {doc.public ? (
                    <button className="flex items-center gap-2 text-sm font-medium text-[#C9A84C] hover:text-[#F0D060] transition-colors">
                      <Download className="w-4 h-4" />
                      Download Free
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#C9A84C] transition-colors group/btn"
                    >
                      <Lock className="w-4 h-4" />
                      Request Access
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto gold-glow">
            <Shield className="w-10 h-10 text-[#C9A84C] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Accredited Investor Access
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Complete fund documents are available to qualified investors.
              Create your investor account or log in to access the full
              document repository.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/login"
                className="px-6 py-3 rounded-lg text-sm font-semibold text-[#0A0E1A] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F0D060] transition-all duration-200 shadow-[0_0_20px_rgba(201,168,76,0.3)]"
              >
                Investor Login
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-lg text-sm font-semibold text-[#C9A84C] border border-[#C9A84C]/40 hover:bg-[#C9A84C]/10 transition-all duration-200"
              >
                Request Access
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
