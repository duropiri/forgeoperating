"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  BookOpen,
  Shield,
  Globe,
  Wrench,
  ClipboardCheck,
  Zap,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

interface ModuleCardProps {
  href: string;
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  features: string[];
  accentColor: string;
  delay: number;
}

function ModuleCard({ href, icon, number, title, description, features, accentColor, delay }: ModuleCardProps) {
  return (
    <Link href={href}>
      <Card
        className={`group h-full bg-card border-border hover:border-${accentColor}/50 transition-all duration-300 cursor-pointer card-hover opacity-0 animate-fade-up`}
        style={{ animationDelay: `${delay * 0.1}s`, animationFillMode: 'forwards' }}
      >
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-${accentColor}/10 flex items-center justify-center group-hover:bg-${accentColor}/20 transition-colors`}>
              {icon}
            </div>
            <span className="text-xs font-mono text-muted-foreground">{number}</span>
          </div>

          <h3 className={`text-lg font-semibold mb-2 group-hover:text-${accentColor} transition-colors`}>
            {title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 flex-grow">
            {description}
          </p>

          <ul className="space-y-2 mb-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className={`w-1 h-1 rounded-full bg-${accentColor}`} />
                {feature}
              </li>
            ))}
          </ul>

          <div className={`flex items-center gap-2 text-sm font-medium text-${accentColor} group-hover:gap-3 transition-all`}>
            Start Module <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Dashboard() {
  const salesModules = [
    {
      href: "/playbook",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      number: "01",
      title: "The Playbook",
      description: "Master the systems-selling methodology. Learn why we sell systems, not services.",
      features: ["Systems vs Services", "Value Stack Framework", "Pricing Psychology"],
      accentColor: "primary"
    },
    {
      href: "/scripts",
      icon: <Phone className="w-6 h-6 text-emerald-400" />,
      number: "02",
      title: "Call Scripts",
      description: "Word-for-word scripts for every scenario. From cold call to close.",
      features: ["Cold Call Openers", "Discovery Questions", "Closing Techniques"],
      accentColor: "emerald-400"
    },
    {
      href: "/objections",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      number: "03",
      title: "Objection Handling",
      description: "Never get stuck again. Instant responses for any pushback.",
      features: ["Price Objections", "Trust Building", "Stall Tactics"],
      accentColor: "blue-400"
    }
  ];

  const fulfillmentModules = [
    {
      href: "/ai-website-setup",
      icon: <Globe className="w-6 h-6 text-violet-400" />,
      number: "04",
      title: "Website Setup",
      description: "Build professional client websites in under 30 minutes using AI.",
      features: ["AI Site Generation", "Domain Setup", "Mobile Optimization"],
      accentColor: "violet-400"
    },
    {
      href: "/system-installation",
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
      number: "05",
      title: "System Installation",
      description: "Deploy the full value stack that creates client stickiness.",
      features: ["Chat Bot Setup", "Missed Call Text Back", "Review Automation"],
      accentColor: "amber-400"
    },
    {
      href: "/qa-checklist",
      icon: <ClipboardCheck className="w-6 h-6 text-rose-400" />,
      number: "06",
      title: "QA Checklist",
      description: "Pre-launch verification to ensure flawless client delivery.",
      features: ["37 Quality Checks", "Mobile Testing", "Delivery Protocol"],
      accentColor: "rose-400"
    }
  ];

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="space-y-6 opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Zap className="w-4 h-4" />
          Training Protocol v2.0
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Simple systems that
          <br />
          <span className="text-gradient">actually work.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl">
          Everything your team needs to sell and deliver AI marketing systems to local businesses.
          No fluff, no theory—just the exact playbook we use to close $25k+ deals.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/playbook">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Start Learning <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/scripts">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              View Scripts
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-up stagger-1" style={{ animationFillMode: 'forwards' }}>
        {[
          { icon: <TrendingUp className="w-5 h-5" />, value: "$25k+", label: "Avg Deal Size" },
          { icon: <Users className="w-5 h-5" />, value: "6", label: "Training Modules" },
          { icon: <Clock className="w-5 h-5" />, value: "30 min", label: "Site Build Time" },
          { icon: <Zap className="w-5 h-5" />, value: "5", label: "Value Stack Layers" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2 text-muted-foreground">{stat.icon}</div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Sales Training Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="text-xl font-semibold">Sales Training</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {salesModules.map((module, idx) => (
            <ModuleCard key={module.href} {...module} delay={idx + 2} />
          ))}
        </div>
      </div>

      {/* Fulfillment Ops Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-violet-400 rounded-full" />
          <h2 className="text-xl font-semibold">Fulfillment Ops</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fulfillmentModules.map((module, idx) => (
            <ModuleCard key={module.href} {...module} delay={idx + 5} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 opacity-0 animate-fade-up stagger-6" style={{ animationFillMode: 'forwards' }}>
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to close your first deal?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Start with The Playbook to understand the methodology, then move to Scripts for the exact words to use.
          </p>
          <Link href="/playbook">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Begin Training <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
