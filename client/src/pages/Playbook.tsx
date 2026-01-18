import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertTriangle, Zap } from "lucide-react";

export default function Playbook() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-display font-bold text-foreground mb-2">THE PLAYBOOK</h1>
        <p className="text-muted-foreground font-mono">OPERATIONAL DOCTRINE // HIGH-TICKET SALES</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* The Mission */}
          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6" /> THE MISSION
            </h2>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg leading-relaxed">
                  We find local businesses with a weak or damaged online presence and sell them a <span className="text-primary font-bold">complete digital overhaul</span>.
                </p>
                <p className="text-muted-foreground">
                  We are not selling websites. We are selling a transformation that directly impacts their bottom line. Our model is built on speed, skill, and a relentless focus on high-value clients.
                </p>
                <div className="p-4 bg-background/50 border border-primary/20 rounded-lg">
                  <p className="font-mono text-sm text-center">
                    GENERATE LEADS → COLD CALL → CLOSE HIGH-TICKET → FULFILL WITH AI
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* What We Sell */}
          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">THE PRODUCT</h2>
            <div className="grid gap-4">
              <ProductCard 
                title="AI-Generated Website" 
                desc="Modern, mobile-friendly, conversion-focused. Built in days, not months."
              />
              <ProductCard 
                title="Review Repair" 
                desc="We take control of their reputation. Suppress negatives, generate positives."
                highlight
              />
              <ProductCard 
                title="Local SEO Domination" 
                desc="Ranking at the top of Google Maps for key services."
              />
              <ProductCard 
                title="Social Presence" 
                desc="Professional branding and engaging content to build trust."
              />
            </div>
          </section>

          {/* The Rules */}
          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">RULES OF ENGAGEMENT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RuleCard 
                number="01" 
                title="No Public Pricing" 
                desc="Never list prices. Every deal is custom. Anchor price to value."
              />
              <RuleCard 
                number="02" 
                title="One-Call Close" 
                desc="Create urgency. We don't chase; we close on the first call."
              />
              <RuleCard 
                number="03" 
                title="Sell Outcomes" 
                desc="Don't sell features. Sell '20 new customers a month'."
              />
              <RuleCard 
                number="04" 
                title="Target $25k" 
                desc="We are here for high-ticket deals. Aim for $25,000 upfront."
              />
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-primary/50 bg-primary/5 sticky top-6">
            <CardHeader>
              <CardTitle className="font-display text-primary">CORE METRICS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                <span className="font-mono text-sm">DEAL SIZE</span>
                <span className="font-bold">$10k - $50k</span>
              </div>
              <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                <span className="font-mono text-sm">TARGET</span>
                <span className="font-bold">$25,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                <span className="font-mono text-sm">LEAD SOURCE</span>
                <span className="font-bold">GHL / SCRAPER</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="font-display">LEAD TYPES</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge variant="outline" className="mb-2 border-red-500 text-red-400">REVIEW REPAIR</Badge>
                <p className="text-sm text-muted-foreground">
                  Businesses with &lt;3.5 stars. They are bleeding money. Pain is high and immediate.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <Badge variant="outline" className="mb-2 border-blue-500 text-blue-400">GPT GENERATED</Badge>
                <p className="text-sm text-muted-foreground">
                  Niche targets (e.g., family diners) identified by AI as high-probability opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, desc, highlight }: any) {
  return (
    <div className={`p-4 rounded-lg border ${highlight ? 'border-primary/50 bg-primary/5' : 'border-border bg-card/30'} flex items-start gap-4`}>
      <CheckCircle2 className={`w-5 h-5 mt-1 ${highlight ? 'text-primary' : 'text-muted-foreground'}`} />
      <div>
        <h3 className={`font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function RuleCard({ number, title, desc }: any) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card/30 hover:border-primary/30 transition-colors">
      <span className="text-xs font-mono text-primary/50 mb-2 block">RULE // {number}</span>
      <h3 className="font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
