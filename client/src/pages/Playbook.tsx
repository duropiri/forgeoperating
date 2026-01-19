import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowLeft,
  ArrowRight,
  Globe,
  MessageSquare,
  Star,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Playbook() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
          </Button>
        </Link>
        
        <div>
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Module 01</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-1">The Playbook</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Master the systems-selling methodology that closes $25k+ deals.
          </p>
        </div>
      </div>

      {/* Core Philosophy */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <div className="w-1 h-5 bg-primary rounded-full" />
          The Core Philosophy
        </h2>
        
        <Card className="bg-card border-border">
          <CardContent className="p-6 space-y-4">
            <p className="text-lg leading-relaxed">
              We don't sell disjointed services. We sell a <span className="text-primary font-semibold">linear system</span> where 
              every component feeds the next. This creates a "sticky" ecosystem that businesses can't turn off.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="text-sm text-center font-medium">
                "One scales, one fails. Don't play Tetris with services—stack them."
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Value Stack */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <div className="w-1 h-5 bg-primary rounded-full" />
          The Value Stack
        </h2>
        
        <p className="text-muted-foreground">
          Each layer builds on the previous one. The more layers installed, the stickier the client becomes.
        </p>

        <div className="space-y-4">
          {[
            {
              step: "01",
              icon: <Globe className="w-5 h-5" />,
              title: "Website + Database Reactivation",
              description: "The foundation. A high-converting website plus immediate revenue from their existing customer list.",
              color: "primary"
            },
            {
              step: "02",
              icon: <MessageSquare className="w-5 h-5" />,
              title: "AI Conversation Bot",
              description: "Qualifies leads and books appointments 24/7. Replaces a front-desk receptionist.",
              color: "emerald-400"
            },
            {
              step: "03",
              icon: <Phone className="w-5 h-5" />,
              title: "Missed Call Text Back",
              description: "If they miss a call, our system texts the lead back immediately. No lead left behind.",
              color: "blue-400"
            },
            {
              step: "04",
              icon: <Star className="w-5 h-5" />,
              title: "Review Management",
              description: "Intercept bad reviews internally, push 5-star reviews to Google. Builds the reputation asset.",
              color: "amber-400"
            },
            {
              step: "05",
              icon: <Mail className="w-5 h-5" />,
              title: "Reactivation Campaigns",
              description: "Automated campaigns to past customers. Referrals, seasonal offers, loyalty rewards.",
              color: "violet-400"
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="flex gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                <span className={`text-${item.color}`}>{item.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-muted-foreground">{item.step}</span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rules of Engagement */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <div className="w-1 h-5 bg-primary rounded-full" />
          Rules of Engagement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
              title: "Sell The System",
              description: "Don't sell 'SEO' or 'Ads'. Sell the machine that turns strangers into paying customers."
            },
            {
              icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
              title: "Stickiness is Key",
              description: "When we control their booking, payments, and reviews, we become as essential as their power bill."
            },
            {
              icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
              title: "One-Call Close",
              description: "Create urgency. We don't chase; we close on the first call."
            },
            {
              icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
              title: "No Public Pricing",
              description: "Every deal is custom. Anchor price to the value of the system, not hours worked."
            }
          ].map((rule, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {rule.icon}
                  <div>
                    <h3 className="font-semibold mb-1">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Target Leads */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <div className="w-1 h-5 bg-primary rounded-full" />
          Target Lead Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card border-border border-l-4 border-l-rose-400">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-medium text-rose-400 uppercase tracking-wider">High Pain</span>
              </div>
              <h3 className="font-semibold mb-2">Review Repair Leads</h3>
              <p className="text-sm text-muted-foreground">
                Businesses with &lt;3.5 stars on Google. They're bleeding money and know it. Pain is high and immediate.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border border-l-4 border-l-blue-400">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Opportunity</span>
              </div>
              <h3 className="font-semibold mb-2">GPT-Generated Leads</h3>
              <p className="text-sm text-muted-foreground">
                Niche targets identified by AI as high-probability opportunities. Family diners, local services, etc.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <div className="w-1 h-5 bg-primary rounded-full" />
          Key Metrics
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Target Deal", value: "$25,000" },
            { label: "Deal Range", value: "$10k-$50k" },
            { label: "Close Rate", value: "15-25%" },
            { label: "Lead Source", value: "GHL/Scraper" }
          ].map((metric, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Module CTA */}
      <Card className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border-emerald-500/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Next Module</span>
              <h3 className="text-lg font-semibold mt-1">Call Scripts</h3>
              <p className="text-sm text-muted-foreground">Word-for-word scripts for every scenario.</p>
            </div>
            <Link href="/scripts">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
