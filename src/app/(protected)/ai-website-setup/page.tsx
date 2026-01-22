"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Folder,
  Sparkles,
  Palette,
  Link2,
  Eye,
  Copy
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Step {
  id: number;
  title: string;
  duration: string;
  description: string;
  actions: string[];
  tip?: string;
  warning?: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Create Sub-Account",
    duration: "2 min",
    description: "Set up a dedicated sub-account for the client in GoHighLevel.",
    actions: [
      "Go to Agency View → Sub-Accounts",
      "Click 'Create Sub-Account'",
      "Enter client's business name exactly as they want it displayed",
      "Use client's email for the account",
      "Select your snapshot template (pre-configured with automations)",
      "Click 'Save' and wait for account creation"
    ],
    tip: "Always use a snapshot with pre-built automations. This saves 2-3 hours of manual setup per client."
  },
  {
    id: 2,
    title: "AI Website Generation",
    duration: "5 min",
    description: "Use GHL's AI to generate the entire website from a prompt.",
    actions: [
      "Enter the sub-account → Sites → Websites",
      "Click 'Create New Website' → 'AI Website Builder'",
      "Enter the business type and location (e.g., 'Plumber in Houston, TX')",
      "Add 3-5 services the business offers",
      "Select a style preference (Modern, Classic, Bold)",
      "Click 'Generate' and wait 60-90 seconds",
      "Review the generated pages (Home, About, Services, Contact)"
    ],
    tip: "The AI pulls real competitor data. The more specific your prompt, the better the copy."
  },
  {
    id: 3,
    title: "Customize Branding",
    duration: "10 min",
    description: "Apply the client's logo, colors, and images.",
    actions: [
      "Upload client's logo (request PNG with transparent background)",
      "Set primary color from client's existing branding",
      "Replace stock images with client's real photos if available",
      "Update phone number and address in header/footer",
      "Add Google Maps embed for the contact page",
      "Review mobile responsiveness using the preview toggle"
    ],
    warning: "If client has no logo, use Canva or AI to generate one. Charge extra for this service."
  },
  {
    id: 4,
    title: "Connect Domain",
    duration: "5 min",
    description: "Point the client's domain to the new website.",
    actions: [
      "Go to Sites → Domains → Add Domain",
      "Enter the client's domain (e.g., clientbusiness.com)",
      "Copy the provided CNAME and A records",
      "Log into client's domain registrar (GoDaddy, Namecheap, etc.)",
      "Update DNS records with the copied values",
      "Wait 15-60 minutes for propagation",
      "Verify SSL certificate is active (green padlock)"
    ],
    warning: "DNS propagation can take up to 48 hours. Set expectations with the client."
  },
  {
    id: 5,
    title: "Final QA & Launch",
    duration: "5 min",
    description: "Run through the checklist and publish the site.",
    actions: [
      "Test all navigation links",
      "Submit a test form and verify it reaches the CRM",
      "Check page load speed (should be under 3 seconds)",
      "Verify mobile layout on actual phone",
      "Confirm tracking pixels are installed (if applicable)",
      "Click 'Publish' to make the site live",
      "Send client the live URL with a congratulations message"
    ],
    tip: "Always send a Loom video walkthrough with the delivery. It increases perceived value massively."
  }
];

const quickLinks = [
  { name: "GHL Dashboard", url: "https://app.gohighlevel.com" },
  { name: "DNS Checker", url: "https://dnschecker.org" },
  { name: "PageSpeed Test", url: "https://pagespeed.web.dev" },
  { name: "Loom Recorder", url: "https://loom.com" }
];

export default function AIWebsiteSetup() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find(s => s.id === activeStep) || steps[0];

  const copyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied");
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
          </Button>
        </Link>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Module 04</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-1">AI Website Setup</h1>
            <p className="text-muted-foreground mt-2">
              Build professional client websites in under 30 minutes.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
            <Clock className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium">Total: ~27 minutes</span>
          </div>
        </div>
      </div>

      {/* Step Progress */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeStep === step.id
                ? "bg-violet-500 text-white"
                : activeStep > step.id
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeStep > step.id ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">
                {step.id}
              </span>
            )}
            {step.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-6">
              {/* Step Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    {currentStep.id === 1 && <Folder className="w-6 h-6 text-violet-400" />}
                    {currentStep.id === 2 && <Sparkles className="w-6 h-6 text-violet-400" />}
                    {currentStep.id === 3 && <Palette className="w-6 h-6 text-violet-400" />}
                    {currentStep.id === 4 && <Link2 className="w-6 h-6 text-violet-400" />}
                    {currentStep.id === 5 && <Eye className="w-6 h-6 text-violet-400" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Step {currentStep.id}: {currentStep.title}</h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> {currentStep.duration}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">{currentStep.description}</p>

              {/* Actions */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Actions</h3>
                <ol className="space-y-2">
                  {currentStep.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm pt-0.5">{action}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tip */}
              {currentStep.tip && (
                <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Pro Tip</p>
                    <p className="text-sm text-muted-foreground">{currentStep.tip}</p>
                  </div>
                </div>
              )}

              {/* Warning */}
              {currentStep.warning && (
                <div className="flex items-start gap-3 p-4 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-400 mb-1">Warning</p>
                    <p className="text-sm text-muted-foreground">{currentStep.warning}</p>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-4 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  disabled={activeStep === 1}
                  className="border-border"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                </Button>
                <Button
                  onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                  disabled={activeStep === steps.length}
                  className="bg-violet-500 hover:bg-violet-600"
                >
                  Next Step <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Links */}
          <Card className="bg-card border-border">
            <CardContent className="p-5">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Quick Links</h3>
              <div className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                    <span className="text-sm">{link.name}</span>
                    <button
                      onClick={() => copyLink(link.url)}
                      className="p-1.5 hover:bg-secondary rounded"
                    >
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Module */}
          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
            <CardContent className="p-5">
              <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">Next Module</span>
              <h3 className="text-lg font-semibold mt-1">System Installation</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">Deploy the full value stack.</p>
              <Link href="/system-installation">
                <Button size="sm" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
