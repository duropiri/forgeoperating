import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShieldAlert, Zap, AlertTriangle } from "lucide-react";

export default function Objections() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredObjections = objections.filter(obj => 
    obj.trigger.toLowerCase().includes(searchQuery.toLowerCase()) ||
    obj.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2 flex items-center gap-3">
            OBJECTION <span className="text-red-500">KILLER</span>
          </h1>
          <p className="text-muted-foreground font-mono">NEVER GET STUCK. ALWAYS HAVE AN ANSWER.</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search objection (e.g., 'expensive', 'email')..." 
            className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredObjections.map((obj, idx) => (
          <ObjectionCard key={idx} objection={obj} />
        ))}
      </div>

      {filteredObjections.length === 0 && (
        <div className="text-center py-20">
          <AlertTriangle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-display font-bold text-muted-foreground">NO MATCHES FOUND</h3>
          <p className="text-sm font-mono text-muted-foreground/50">TRY A DIFFERENT SEARCH TERM</p>
        </div>
      )}
    </div>
  );
}

function ObjectionCard({ objection }: any) {
  return (
    <Card className="border-border bg-card/50 hover:border-red-500/50 transition-all duration-300 group h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wider border-primary/20 text-primary">
            {objection.category}
          </Badge>
          <ShieldAlert className="w-4 h-4 text-muted-foreground group-hover:text-red-500 transition-colors" />
        </div>
        <CardTitle className="text-lg font-bold text-foreground group-hover:text-red-400 transition-colors">
          "{objection.trigger}"
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="bg-background/50 p-4 rounded border border-border flex-1">
          <p className="text-base leading-relaxed font-medium text-foreground/90">
            {objection.response}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Zap className="w-3 h-3 text-primary" />
          <span>{objection.principle}</span>
        </div>
      </CardContent>
    </Card>
  );
}

const objections = [
  {
    category: "Price",
    trigger: "It's too expensive",
    response: "I understand it's a significant investment. But let's look at the return. If we can bring you just 5 new customers a month, this system pays for itself in 3 months. After that, it's pure profit. How many new customers do you think you're losing right now because of your online presence?",
    principle: "Reframing Cost vs. Investment"
  },
  {
    category: "Timing",
    trigger: "I need to think about it",
    response: "I understand. But the reality is, every day you wait, you are losing customers to your competitors. This is an opportunity to take decisive action and get ahead. I can offer you a special incentive if we can get this started today.",
    principle: "Creating Urgency & FOMO"
  },
  {
    category: "Product",
    trigger: "I already have a website",
    response: "That's great. The question is, is it working for you? Is it bringing in new business every single day? We build websites that are designed for one thing: to make you money. I can show you how a few small changes can make a massive difference.",
    principle: "Challenging the Status Quo"
  },
  {
    category: "Interest",
    trigger: "I'm not interested",
    response: "I hear you. But what if I could show you a way to add an extra $10,000 to your monthly revenue without you having to lift a finger? Is that something you'd be open to exploring for just five minutes?",
    principle: "Selling the Outcome (Money)"
  },
  {
    category: "Trust",
    trigger: "Send me an email",
    response: "I can definitely send you some info, but this strategy is really visual and I don't want to flood your inbox with generic PDFs. Give me 5 minutes to show you exactly how this works for [Competitor Name], and then you can decide.",
    principle: "Micro-Commitment"
  },
  {
    category: "Authority",
    trigger: "I need to talk to my partner",
    response: "Makes sense. What do you think your partner's main concern would be? If we can address that right now, I can give you everything you need to present this to them as a no-brainer.",
    principle: "Isolating the Objection"
  },
  {
    category: "Price",
    trigger: "Can you do it cheaper?",
    response: "We aren't the cheapest, and we don't want to be. You get what you pay for. Do you want a cheap website that does nothing, or a premium system that prints money? We build the latter.",
    principle: "Price Anchoring & Quality"
  },
  {
    category: "Skepticism",
    trigger: "Does this actually work?",
    response: "We have clients in [City] right now who have doubled their lead volume in 30 days. I'm not asking you to trust me blindly—I'm asking you to let me prove it. Let's start with the review repair and you'll see the impact immediately.",
    principle: "Social Proof & Risk Reversal"
  }
];
