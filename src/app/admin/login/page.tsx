"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";
import IndiarkLogo from "@/components/layout/IndiarkLogo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Authentication failed");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090B0D] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-md w-full relative z-10">
        
        {/* Brand Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Link href="/" className="inline-block mb-4 hover:opacity-90 transition-opacity">
            <IndiarkLogo className="h-14 w-auto drop-shadow-sm" />
          </Link>

          <h1 className="text-2xl font-bold text-[#F8F9FA] mb-1">
            Admin Management Console
          </h1>
          <p className="text-xs text-[#94A3B8]">
            Confidential B2B Representation Management Portal
          </p>
        </div>

        {/* Login Form Card */}
        <div className="p-8 rounded-3xl bg-[#141820] border border-white/[0.08] shadow-2xl space-y-6">
          
          {error && (
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter administrator username"
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-xl bg-[#181D26] border border-white/10 text-sm text-[#F8F9FA] placeholder:text-[#64748B] focus:border-[#F5DE88] focus:bg-[#1E2430] transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#F5DE88] hover:bg-[#FACC15] text-[#090B0D] text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#F5DE88]/20 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>SIGN IN TO CONSOLE</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="pt-4 border-t border-white/[0.08] text-center">
            <Link
              href="/"
              className="text-xs text-[#94A3B8] hover:text-[#F5DE88] transition-colors font-mono"
            >
              ← Return to public website
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
