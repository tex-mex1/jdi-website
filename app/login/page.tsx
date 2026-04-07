"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Zap, Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setLoginError("");

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      setLoginError("Invalid credentials. Please check your email and password.");
    } else {
      router.push("/dashboard");
    }
  };

  const inputClass =
    "w-full bg-[#111827]/60 border border-[#C9A84C]/20 rounded-xl pl-10 pr-4 py-3.5 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200";

  return (
    <div className="min-h-screen bg-[#040813] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C9A84C]/3 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#D4AF37] flex items-center justify-center shadow-[0_0_25px_rgba(201,168,76,0.4)]">
              <Zap className="w-6 h-6 text-[#0A0E1A]" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-lg leading-none">
                JDI Energy Partners
              </div>
              <div className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
                Investor Portal
              </div>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="glass-card p-8 gold-glow">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">
              Investor Login
            </h1>
            <p className="text-gray-400 text-sm">
              Access your portfolio, documents, and account details.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input
                  {...register("email")}
                  type="email"
                  className={inputClass}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className={`${inputClass} pr-10`}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            {loginError && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-red-900/20 border border-red-500/30 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {loginError}
              </motion.div>
            )}

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="rounded border-[#C9A84C]/30 bg-transparent" />
                Remember me
              </label>
              <button
                type="button"
                className="text-[#C9A84C] hover:text-[#F0D060] transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-[#0A0E1A] bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F0D060] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#0A0E1A]/40 border-t-[#0A0E1A] rounded-full animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Sign In Securely
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#C9A84C]/10 text-center">
            <p className="text-gray-500 text-sm">
              Need access?{" "}
              <Link
                href="/#contact"
                className="text-[#C9A84C] hover:text-[#F0D060] transition-colors font-medium"
              >
                Contact investor relations
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-700 text-xs">
            This portal is restricted to accredited investors only.
            Unauthorized access attempts are logged and reported.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
