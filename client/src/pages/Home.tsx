import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Phone, 
  BookOpen,
  ShieldAlert,
  Zap,
  CheckCircle2,
  Layers,
  Globe,
  Settings,
  ClipboardCheck
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-2">
            TRAINING <span className="text-primary">HUB</span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl">
            UNIFIED SOP // SALES & FULFILLMENT TRAINING CENTER
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/playbook">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide">
              <BookOpen className="mr-2 w-4 h-4" /> START LEARNING
            </Button>
          </Link>
        </div>
      </div>

      {/* Sales Training Section */}
      <div>
        <h2 className="text-lg font-display font-bold text-primary mb-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          SALES TRAINING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module 1: The Playbook */}
          <Card className="border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
            <Link href="/playbook">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-blue-400 transition-colors">
                  01 // THE SYSTEM STACK
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 min-h-[3rem]">
                  Learn why we sell "Systems" not "Services". Master the linear value stack that scales.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> System vs. Service
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> The "Sticky" Ecosystem
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> Value Stacking
                  </li>
                </ul>
                <div className="flex items-center text-sm font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                  OPEN MODULE <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Module 2: Call Scripts */}
          <Card className="border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
            <Link href="/scripts">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                  02 // CALL SCRIPTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 min-h-[3rem]">
                  Battle-tested scripts for every scenario. From opener to close, know exactly what to say.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Review Repair Script
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> GPT Lead Script
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> The "Assumptive Close"
                  </li>
                </ul>
                <div className="flex items-center text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                  ACCESS SCRIPTS <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Module 3: Objection Killer */}
          <Card className="border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
            <Link href="/objections">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <ShieldAlert className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-red-400 transition-colors">
                  03 // OBJECTION KILLER
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 min-h-[3rem]">
                  Never get stuck. Instant answers for "Too Expensive," "Not Interested," and more.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-red-400" /> Price Objections
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-red-400" /> Trust & Authority
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-red-400" /> Stalls & Delays
                  </li>
                </ul>
                <div className="flex items-center text-sm font-bold text-red-400 group-hover:translate-x-1 transition-transform">
                  MASTER OBJECTIONS <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>

      {/* Fulfillment Ops Section */}
      <div>
        <h2 className="text-lg font-display font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          FULFILLMENT OPS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module 4: AI Website Setup */}
          <Card className="border-border bg-card/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer h-full">
            <Link href="/ai-website-setup">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-cyan-400 transition-colors">
                  04 // AI WEBSITE SETUP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 min-h-[3rem]">
                  Build client websites in under 30 minutes using GHL's AI tools.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Sub-Account Creation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" /> AI Site Generation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Domain Connection
                  </li>
                </ul>
                <div className="flex items-center text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  START BUILDING <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Module 5: System Installation */}
          <Card className="border-border bg-card/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer h-full">
            <Link href="/system-installation">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Settings className="w-6 h-6 text-emerald-400" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-emerald-400 transition-colors">
                  05 // SYSTEM INSTALLATION
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 min-h-[3rem]">
                  Install the Value Stack that creates client stickiness and recurring revenue.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Conversation AI Bot
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Missed Call Text Back
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Review Automation
                  </li>
                </ul>
                <div className="flex items-center text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  INSTALL SYSTEMS <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>

          {/* Module 6: QA Checklist */}
          <Card className="border-border bg-card/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer h-full">
            <Link href="/qa-checklist">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <ClipboardCheck className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="font-display text-xl group-hover:text-purple-400 transition-colors">
                  06 // QA CHECKLIST
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 min-h-[3rem]">
                  Verify everything works before client handoff. No broken sites.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" /> Website Quality
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" /> Mobile Testing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" /> Delivery Protocol
                  </li>
                </ul>
                <div className="flex items-center text-sm font-bold text-purple-400 group-hover:translate-x-1 transition-transform">
                  RUN QA CHECK <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>

      {/* Quick Tips Section */}
      <Card className="border-border bg-card/30">
        <CardHeader>
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            PRO TIPS
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Speed to Lead</h3>
            <p className="text-sm text-muted-foreground">
              Call leads within 5 minutes of generation. The close rate drops by 400% after 10 minutes.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Tone Matters</h3>
            <p className="text-sm text-muted-foreground">
              Speak with authority. You are an expert consultant, not a telemarketer. Downward inflection at the end of sentences.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Don't Sell Features</h3>
            <p className="text-sm text-muted-foreground">
              Nobody cares about "SEO" or "HTML". They care about "More Customers" and "Beating Competitors".
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">The "No" is the Start</h3>
            <p className="text-sm text-muted-foreground">
              The sale begins when the customer says "No". Use the Objection Killer to pivot and close.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
