"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { 
  BookOpen,
  Phone,
  ShieldAlert,
  Globe,
  Settings,
  ClipboardCheck,
  ArrowRight,
  Lock
} from "lucide-react";

// Training modules
const salesModules = [
  { 
    title: "The System Stack", 
    description: "Learn why we sell 'Systems' not 'Services'", 
    icon: BookOpen, 
    href: "/dashboard/playbook",
    color: "bg-blue-50 text-blue-600"
  },
  { 
    title: "Call Scripts", 
    description: "Battle-tested scripts for every scenario", 
    icon: Phone, 
    href: "/dashboard/scripts",
    color: "bg-teal-50 text-teal-600"
  },
  { 
    title: "Objection Killer", 
    description: "Never get stuck on objections again", 
    icon: ShieldAlert, 
    href: "/dashboard/objections",
    color: "bg-red-50 text-red-600"
  }
];

const fulfillmentModules = [
  { 
    title: "AI Website Setup", 
    description: "GHL site generation walkthrough", 
    icon: Globe, 
    href: "/dashboard/ai-website-setup",
    color: "bg-purple-50 text-purple-600"
  },
  { 
    title: "System Installation", 
    description: "Value Stack setup guide", 
    icon: Settings, 
    href: "/dashboard/system-installation",
    color: "bg-amber-50 text-amber-600"
  },
  { 
    title: "QA Checklist", 
    description: "Pre-launch verification", 
    icon: ClipboardCheck, 
    href: "/dashboard/qa-checklist",
    color: "bg-green-50 text-green-600"
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0A0A0B]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Forge<span className="text-orange-500">OS</span></span>
              <span className="text-xs text-white/40 ml-2 hidden sm:inline">Training Hub</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                Back to Site
              </Button>
            </Link>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Lock className="w-3 h-3 text-orange-500" />
              <span className="text-xs text-white/60">Team Access</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to <span className="text-orange-500">Training Hub</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Master the ForgeOS sales process and fulfillment operations. 
            Select a module below to get started.
          </p>
        </div>

        {/* Sales Training Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
            <h2 className="text-xl font-semibold">Sales Training</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {salesModules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <Link key={idx} href={module.href}>
                  <Card className="bg-white/5 border-white/10 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-sm text-white/50 mb-4">{module.description}</p>
                      <div className="flex items-center text-sm text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        Open Module <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Fulfillment Ops Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl font-semibold">Fulfillment Ops</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fulfillmentModules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <Link key={idx} href={module.href}>
                  <Card className="bg-white/5 border-white/10 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-sm text-white/50 mb-4">{module.description}</p>
                      <div className="flex items-center text-sm text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        Open Module <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="text-orange-500">⚡</span> Pro Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white/70">
            <div>
              <p className="font-medium text-white mb-1">Speed to Lead</p>
              <p>Call leads within 5 minutes. Close rate drops 400% after 10 minutes.</p>
            </div>
            <div>
              <p className="font-medium text-white mb-1">Tone Matters</p>
              <p>Speak with authority. Downward inflection at the end of sentences.</p>
            </div>
            <div>
              <p className="font-medium text-white mb-1">Don't Sell Features</p>
              <p>Nobody cares about "SEO". They care about "More Customers".</p>
            </div>
            <div>
              <p className="font-medium text-white mb-1">The "No" is the Start</p>
              <p>The sale begins when they say "No". Use the Objection Killer.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
