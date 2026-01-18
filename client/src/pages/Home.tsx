import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Phone, 
  BookOpen,
  ShieldAlert,
  Zap,
  CheckCircle2
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
            INTERACTIVE SOP // MASTER THE HIGH-TICKET SALES PROCESS
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

      {/* Training Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Module 1: The Playbook */}
        <Card className="border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
          <Link href="/playbook">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="font-display text-xl group-hover:text-blue-400 transition-colors">
                01 // THE PLAYBOOK
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 min-h-[3rem]">
                Understand the "Digital Overhaul" model, value proposition, and rules of engagement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> The Mission & Offer
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> One-Call Close Rules
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Pricing Strategy
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
