import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Layers, ArrowDown, Database, MessageSquare, Star } from "lucide-react";

export default function Playbook() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-display font-bold text-foreground mb-2">THE PLAYBOOK</h1>
        <p className="text-muted-foreground font-mono">OPERATIONAL DOCTRINE // SYSTEMS OVER SERVICES</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* The Core Philosophy */}
          <section>
            <h2 className="text-2xl font-display font-bold text-primary mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6" /> THE SYSTEM STACK
            </h2>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg leading-relaxed">
                  We do not sell disjointed services. We sell a <span className="text-primary font-bold">linear system</span> where every component feeds the next. This creates a "sticky" ecosystem that businesses can't turn off.
                </p>
                
                {/* Visual Stack Diagram */}
                <div className="mt-8 space-y-2 relative">
                  <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/50 to-transparent border-l-2 border-dashed border-primary/30" />
                  
                  <StackStep 
                    icon={Database} 
                    title="1. THE FOUNDATION" 
                    desc="High-converting Website + Database Reactivation. We mine their past customers for immediate gold."
                  />
                  <StackStep 
                    icon={MessageSquare} 
                    title="2. THE CONVERSATION" 
                    desc="AI Bot + Auto Call Text Back. Every lead gets an instant response, 24/7. No lead left behind."
                  />
                  <StackStep 
                    icon={Star} 
                    title="3. THE REPUTATION" 
                    desc="Review Gating + SEO. We filter bad reviews and push good ones to Google, driving more traffic to Step 1."
                  />
                </div>

                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="font-mono text-sm text-center text-primary">
                    "ONE SCALES, ONE FAILS. DON'T PLAY TETRIS WITH SERVICES. STACK THEM."
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
                title="Database Reactivation" 
                desc="The 'Quick Win'. We text their list of past customers with an offer. They get bookings instantly."
                highlight
              />
              <ProductCard 
                title="AI Conversation Bot" 
                desc="Qualifies leads and books appointments automatically. Replaces a front-desk receptionist."
              />
              <ProductCard 
                title="The 5-Star Funnel" 
                desc="We intercept bad reviews internally and push 4-5 star reviews to Google."
              />
              <ProductCard 
                title="Missed Call Text Back" 
                desc="If they miss a call, our system texts the lead back immediately to save the deal."
              />
            </div>
          </section>

          {/* The Rules */}
          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">RULES OF ENGAGEMENT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RuleCard 
                number="01" 
                title="Sell The System" 
                desc="Don't sell 'SEO' or 'Ads'. Sell the machine that turns strangers into paying customers."
              />
              <RuleCard 
                number="02" 
                title="Stickiness is Key" 
                desc="When we control their booking, payments, and reviews, we become as essential as their power bill."
              />
              <RuleCard 
                number="03" 
                title="One-Call Close" 
                desc="Create urgency. We don't chase; we close on the first call."
              />
              <RuleCard 
                number="04" 
                title="No Public Pricing" 
                desc="Every deal is custom. Anchor price to the value of the system, not the hours worked."
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

function StackStep({ icon: Icon, title, desc }: any) {
  return (
    <div className="relative z-10 flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
      <div className="p-2 bg-background rounded-md border border-border shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
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
