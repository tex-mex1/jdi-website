import Link from "next/link";
import { Zap, Shield, FileText, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#040813] border-t border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#D4AF37] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#0A0E1A]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">
                  JDI Energy Partners
                </div>
                <div className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
                  Institutional Investment Platform
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              JDI Energy Partners is a leading institutional investment firm
              specializing in energy sector opportunities across renewable
              infrastructure, strategic acquisitions, and transition assets.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-600">
              <Shield className="w-3 h-3" />
              <span>Registered Investment Advisor | SEC Regulated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-6">
              Platform
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/#home", label: "Home" },
                { href: "/#fund", label: "Fund Overview" },
                { href: "/#performance", label: "Performance" },
                { href: "/#documents", label: "Documents" },
                { href: "/#contact", label: "Contact" },
                { href: "/login", label: "Investor Login" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Investor Relations</p>
                  <a
                    href="mailto:ir@jdienergypartners.com"
                    className="text-gray-500 text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    ir@jdienergypartners.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Documents</p>
                  <Link
                    href="/#documents"
                    className="text-gray-500 text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    Request Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C9A84C]/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} JDI Energy Partners, LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 p-4 rounded-lg bg-[#0D1526]/50 border border-gray-800">
            <p className="text-gray-600 text-xs leading-relaxed">
              <strong className="text-gray-500">Important Disclaimer:</strong> This website is for informational
              purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.
              Past performance is not indicative of future results. Investments in private funds involve substantial
              risk, including the possible loss of principal. This material is intended solely for accredited investors
              as defined under applicable securities laws. JDI Energy Partners is registered with the SEC as an
              Investment Adviser. Registration does not imply a certain level of skill or training.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
