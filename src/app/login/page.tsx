"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // Redirect to dashboard on success
      router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <div className="inline-flex items-center gap-2.5 cursor-pointer">
              <Image
                src="/fog-icon.png"
                alt="Forge Operating Group"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col leading-none text-left">
                <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                  Forge Operating
                </span>
                <span className="text-xs font-semibold text-teal-500 tracking-wide">
                  GROUP
                </span>
              </div>
            </div>
          </Link>
        </div>

        <Card className="bg-white border-[#E5E2DB] shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-teal-600" />
              </div>
              <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                Team Login
              </h1>
              <p className="text-sm text-[#666]">
                Enter the team password to access the training hub
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter team password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 bg-[#F7F4EF] border-[#E5E2DB] focus:border-teal-500 focus:ring-teal-500"
                  disabled={loading}
                  autoFocus
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white font-medium"
                disabled={loading || !password}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Access Training Hub
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-[#888] mt-6">
          <Link href="/" className="hover:text-teal-600 transition-colors">
            ← Back to main site
          </Link>
        </p>
      </div>
    </div>
  );
}
