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
    <div className="min-h-screen bg-[#FAF6F5] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-md w-full relative z-10">
        
        {/* Brand Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Link href="/" className="inline-block mb-4 hover:opacity-90 transition-opacity">
            <IndiarkLogo className="h-14 w-auto drop-shadow-sm" />
          </Link>

          <h1 className="font-serif text-2xl font-bold text-[#141115] mb-1">
            Admin Management Console
          </h1>
          <p className="text-xs text-[#5C5056]">
            Confidential B2B Representation Management Portal
          </p>
        </div>

        {/* Login Form Card */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8D8D3] shadow-2xl space-y-6">
          
          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter administrator username"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#5C5056] mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF6F5] border border-[#EAE0DD] text-sm text-[#141115] focus:border-[#C82333] focus:bg-[#FFFFFF] transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#C82333] hover:bg-[#8B1524] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-lg shadow-[#C82333]/20 disabled:opacity-50"
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

          <div className="pt-4 border-t border-[#EAE0DD] text-center">
            <Link
              href="/"
              className="text-xs text-[#7A6C72] hover:text-[#C82333] transition-colors font-mono"
            >
              ← Return to public website
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
