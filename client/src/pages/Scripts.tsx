import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Scripts() {
  const [activeScript, setActiveScript] = useState("review-repair");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Script copied to clipboard");
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">CALL SCRIPTS</h1>
          <p className="text-muted-foreground font-mono text-sm">LIVE BATTLE TESTED SCRIPTS</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={activeScript === "review-repair" ? "default" : "outline"}
            onClick={() => setActiveScript("review-repair")}
            className="font-mono text-xs"
          >
            REVIEW REPAIR
          </Button>
          <Button 
            variant={activeScript === "gpt-lead" ? "default" : "outline"}
            onClick={() => setActiveScript("gpt-lead")}
            className="font-mono text-xs"
          >
            GPT LEAD
          </Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        {/* Script Viewer */}
        <Card className="lg:col-span-2 border-border bg-card/50 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border bg-background/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-xs text-red-400">LIVE MODE</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(scripts[activeScript].fullText)}>
              <Copy className="w-4 h-4 mr-2" /> Copy Full Script
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {scripts[activeScript].sections.map((section: any, idx: number) => (
              <div key={idx} className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">{section.title}</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed font-medium text-foreground">
                    {section.content}
                  </p>
                </div>
                
                {section.notes && (
                  <div className="mt-3 p-3 bg-primary/5 border border-primary/10 rounded text-sm text-primary/80 font-mono">
                    <span className="font-bold mr-2">TIP:</span>{section.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Objections Side Panel */}
        <div className="space-y-4 overflow-y-auto pr-2">
          <h3 className="font-display font-bold text-muted-foreground text-sm px-1">QUICK HANDLERS</h3>
          
          {objections.map((obj, idx) => (
            <Card key={idx} className="border-border bg-card/30 hover:bg-card/50 transition-colors cursor-pointer group">
              <CardContent className="p-4">
                <h4 className="font-bold text-sm text-red-400 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-3 h-3" />
                  "{obj.trigger}"
                </h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {obj.response}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const scripts: any = {
  "review-repair": {
    fullText: "...",
    sections: [
      {
        title: "The Opener (0-30s)",
        content: "Hi [Name], I'm calling because I saw your business has a 3.2-star rating on Google. I specialize in helping businesses fix that, and I have a few ideas for you.",
        notes: "Be direct. Don't ask 'how are you'. State the problem immediately."
      },
      {
        title: "Discovery",
        content: "How much of your business comes from online leads or Google searches right now? ... And have you noticed the impact those negative reviews are having on your new customer flow?",
        notes: "Get them to admit the pain. They know it's hurting them."
      },
      {
        title: "The Pitch",
        content: "We don't just 'fix reviews'. We build a customer-generating machine. We'll suppress the negatives, generate positives, and overhaul your entire online presence so you dominate the local market.",
        notes: "Sell the outcome: Domination and Customers."
      },
      {
        title: "The Close",
        content: "Based on what you've told me, this is a perfect fit. I can get our team started on your new system by the end of the day. All we need to do is get the paperwork handled.",
        notes: "Assume the sale. Create urgency."
      }
    ]
  },
  "gpt-lead": {
    fullText: "...",
    sections: [
      {
        title: "The Opener (0-30s)",
        content: "Hi [Name], I was looking at the top [Business Type]s in [City], and I noticed your main competitors are capturing a huge amount of traffic from Google that you're missing out on.",
        notes: "Lead with FOMO (Fear Of Missing Out)."
      },
      {
        title: "Discovery",
        content: "Are you happy with your current website's performance? Is it bringing you new customers every single day, or is it just a digital brochure?",
        notes: "Challenge their current status quo."
      },
      {
        title: "The Pitch",
        content: "I have a strategy that can help you capture that market share. We build high-performance systems that turn search traffic into paying customers. It's not just a website; it's a revenue engine.",
        notes: "Focus on revenue and market share."
      },
      {
        title: "The Close",
        content: "I have a limited number of slots for new clients in [City] this month. I want to make sure you don't miss out on this opportunity to get ahead of [Competitor Name]. Let's get this started.",
        notes: "Use scarcity and competitive pressure."
      }
    ]
  }
};

const objections = [
  {
    trigger: "It's too expensive",
    response: "If we bring you just 5 new customers a month, this pays for itself. How many are you losing right now?"
  },
  {
    trigger: "I already have a website",
    response: "That's great. But is it making you money? We build revenue engines, not just websites."
  },
  {
    trigger: "Send me an email",
    response: "I can do that, but the strategy is visual. Give me 5 minutes to show you exactly what I mean."
  },
  {
    trigger: "Not interested",
    response: "I hear you. But are you not interested in adding $10k to your monthly revenue? That's what we're talking about."
  }
];
