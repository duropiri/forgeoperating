import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Search, 
  ArrowLeft, 
  ArrowRight,
  Copy,
  Check,
  Lightbulb,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

interface Objection {
  category: string;
  trigger: string;
  response: string;
  principle: string;
}

const objections: Objection[] = [
  {
    category: "Price",
    trigger: "It's too expensive",
    response: "I understand it's a significant investment. But let's look at the return. If we can bring you just 5 new customers a month, this system pays for itself in 3 months. After that, it's pure profit. How many new customers do you think you're losing right now because of your online presence?",
    principle: "Reframe cost as investment with ROI"
  },
  {
    category: "Price",
    trigger: "Can you do it cheaper?",
    response: "We aren't the cheapest, and we don't want to be. You get what you pay for. Do you want a cheap website that does nothing, or a premium system that prints money? We build the latter.",
    principle: "Anchor on quality, not price"
  },
  {
    category: "Timing",
    trigger: "I need to think about it",
    response: "Totally understand. What specifically do you need to think about? Maybe I can help clarify. Because the reality is, every day you wait, you're losing customers to competitors who are already doing this.",
    principle: "Isolate the real concern"
  },
  {
    category: "Timing",
    trigger: "Call me back later",
    response: "Happy to. But quick question—what would need to change between now and then for this to be a yes? Let's make sure we're not wasting each other's time.",
    principle: "Qualify the follow-up"
  },
  {
    category: "Interest",
    trigger: "I'm not interested",
    response: "I hear you. But are you not interested in adding $10,000 to your monthly revenue? That's what we're talking about here. Give me 5 minutes to show you how.",
    principle: "Sell the outcome, not the product"
  },
  {
    category: "Interest",
    trigger: "We're doing fine",
    response: "That's great to hear. But 'fine' isn't 'crushing it.' Your competitors are investing in systems like this right now. In 6 months, they'll be taking your customers. Let's make sure that doesn't happen.",
    principle: "Create competitive urgency"
  },
  {
    category: "Trust",
    trigger: "Send me an email",
    response: "I can definitely send you some info, but this strategy is really visual. Generic PDFs don't do it justice. Give me 5 minutes to show you exactly how this works, and then you can decide.",
    principle: "Push for micro-commitment"
  },
  {
    category: "Trust",
    trigger: "Does this actually work?",
    response: "We have clients in [City] right now who have doubled their lead volume in 30 days. I'm not asking you to trust me blindly—I'm asking you to let me prove it. Let's start small and you'll see the impact immediately.",
    principle: "Social proof + risk reversal"
  },
  {
    category: "Authority",
    trigger: "I need to talk to my partner",
    response: "Makes sense. What do you think your partner's main concern would be? If we can address that right now, I can give you everything you need to present this as a no-brainer.",
    principle: "Isolate and pre-handle"
  },
  {
    category: "Product",
    trigger: "I already have a website",
    response: "That's great. The question is, is it working for you? Is it bringing in new business every single day? We build websites that are designed for one thing: to make you money.",
    principle: "Challenge the status quo"
  },
  {
    category: "Product",
    trigger: "We tried this before",
    response: "I hear that a lot. The difference is, most agencies sell you a website and disappear. We build a complete system—website, automation, reviews, the whole stack. It's not comparable.",
    principle: "Differentiate from past failures"
  },
  {
    category: "Competition",
    trigger: "I'm talking to other companies",
    response: "Smart move. You should compare. But here's what I'd ask them: Do they build the full system, or just pieces? Do they have clients in your industry? Can they show you results in 30 days? We can.",
    principle: "Set the buying criteria"
  }
];

const categories = ["All", "Price", "Timing", "Interest", "Trust", "Authority", "Product", "Competition"];

export default function Objections() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredObjections = objections.filter(obj => {
    const matchesSearch = obj.trigger.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.response.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || obj.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const copyResponse = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast.success("Response copied");
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
          </Button>
        </Link>
        
        <div>
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Module 03</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-1">Objection Handling</h1>
          <p className="text-muted-foreground mt-2">
            Never get stuck again. Instant responses for any pushback.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search objections..." 
            className="pl-10 bg-card border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <AlertCircle className="w-4 h-4" />
        {filteredObjections.length} objection{filteredObjections.length !== 1 ? 's' : ''} found
      </div>

      {/* Objections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredObjections.map((obj, idx) => (
          <Card key={idx} className="bg-card border-border hover:border-primary/30 transition-colors group">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {obj.category}
                  </span>
                  <h3 className="text-lg font-semibold text-rose-400 mt-1">
                    "{obj.trigger}"
                  </h3>
                </div>
                <button
                  onClick={() => copyResponse(obj.response, idx)}
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                  )}
                </button>
              </div>

              <p className="text-sm leading-relaxed">
                {obj.response}
              </p>

              <div className="flex items-start gap-2 pt-2 border-t border-border">
                <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">{obj.principle}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredObjections.length === 0 && (
        <div className="text-center py-16">
          <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-muted-foreground">No matches found</h3>
          <p className="text-sm text-muted-foreground mt-1">Try a different search term or category</p>
        </div>
      )}

      {/* Next Module CTA */}
      <Card className="bg-gradient-to-r from-violet-500/10 to-violet-500/5 border-violet-500/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Next Module</span>
              <h3 className="text-lg font-semibold mt-1">Website Setup</h3>
              <p className="text-sm text-muted-foreground">Build client websites in under 30 minutes.</p>
            </div>
            <Link href="/ai-website-setup">
              <Button className="bg-violet-500 hover:bg-violet-600 text-white">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
