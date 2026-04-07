"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#fund", label: "Fund" },
  { href: "/#performance", label: "Performance" },
  { href: "/#documents", label: "Documents" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0E1A]/95 backdrop-blur-md border-b border-[#C9A84C]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#D4AF37] flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.4)] group-hover:shadow-[0_0_30px_rgba(201,168,76,0.6)] transition-all duration-300">
                <Zap className="w-5 h-5 text-[#0A0E1A]" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 rounded-lg bg-[#C9A84C]/20 blur-md group-hover:blur-lg transition-all duration-300" />
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none tracking-wide">
                JDI Energy
              </div>
              <div className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
                Partners
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="relative px-5 py-2.5 rounded-lg text-sm font-semibold text-[#0A0E1A] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F0D060] transition-all duration-200 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] tracking-wide"
            >
              Investor Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-[#C9A84C] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0D1526]/98 backdrop-blur-xl border-t border-[#C9A84C]/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-[#C9A84C] font-medium py-2 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-[#0A0E1A] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Investor Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
