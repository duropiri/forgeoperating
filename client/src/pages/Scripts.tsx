import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Copy, 
  ArrowLeft, 
  ArrowRight, 
  Check,
  AlertCircle,
  Lightbulb,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { toast } from "sonner";

interface ScriptSection {
  title: string;
  timing: string;
  content: string;
  tip?: string;
}

interface Script {
  id: string;
  name: string;
  description: string;
  sections: ScriptSection[];
}

const scripts: Script[] = [
  {
    id: "review-repair",
    name: "Review Repair",
    description: "For businesses with poor Google ratings (<3.5 stars)",
    sections: [
      {
        title: "The Opener",
        timing: "0-30 seconds",
        content: "Hi [Name], I'm calling because I saw your business has a 3.2-star rating on Google. I specialize in helping businesses fix that, and I have a few ideas for you.",
        tip: "Be direct. Don't ask 'how are you'. State the problem immediately."
      },
      {
        title: "Discovery",
        timing: "30-90 seconds",
        content: "How much of your business comes from online leads or Google searches right now? ... And have you noticed the impact those negative reviews are having on your new customer flow?",
        tip: "Get them to admit the pain. They know it's hurting them."
      },
      {
        title: "The Pitch",
        timing: "90-180 seconds",
        content: "We don't just 'fix reviews'. We build a customer-generating machine. We'll suppress the negatives, generate positives, and overhaul your entire online presence so you dominate the local market.",
        tip: "Sell the outcome: Domination and Customers."
      },
      {
        title: "The Close",
        timing: "Final push",
        content: "Based on what you've told me, this is a perfect fit. I can get our team started on your new system by the end of the day. All we need to do is get the paperwork handled.",
        tip: "Assume the sale. Create urgency."
      }
    ]
  },
  {
    id: "gpt-lead",
    name: "GPT Lead",
    description: "For AI-generated leads in target niches",
    sections: [
      {
        title: "The Opener",
        timing: "0-30 seconds",
        content: "Hi [Name], I was looking at the top [Business Type]s in [City], and I noticed your main competitors are capturing a huge amount of traffic from Google that you're missing out on.",
        tip: "Lead with FOMO (Fear Of Missing Out)."
      },
      {
        title: "Discovery",
        timing: "30-90 seconds",
        content: "Are you happy with your current website's performance? Is it bringing you new customers every single day, or is it just a digital brochure?",
        tip: "Challenge their current status quo."
      },
      {
        title: "The Pitch",
        timing: "90-180 seconds",
        content: "I have a strategy that can help you capture that market share. We build high-performance systems that turn search traffic into paying customers. It's not just a website; it's a revenue engine.",
        tip: "Focus on revenue and market share."
      },
      {
        title: "The Close",
        timing: "Final push",
        content: "I have a limited number of slots for new clients in [City] this month. I want to make sure you don't miss out on this opportunity to get ahead of [Competitor Name]. Let's get this started.",
        tip: "Use scarcity and competitive pressure."
      }
    ]
  },
  {
    id: "cold-opener",
    name: "Cold Opener",
    description: "Universal opener for any cold call",
    sections: [
      {
        title: "Pattern Interrupt",
        timing: "0-10 seconds",
        content: "Hey [Name], this is [Your Name] with ForgeOS. I know you weren't expecting my call, but I'll be quick—I promise.",
        tip: "Acknowledge the interruption. It builds trust."
      },
      {
        title: "Value Hook",
        timing: "10-30 seconds",
        content: "I help local businesses like yours get more customers from Google without spending a fortune on ads. I had a quick question for you.",
        tip: "Get permission to continue with a question."
      },
      {
        title: "Qualifying Question",
        timing: "30-60 seconds",
        content: "If I could show you a way to get 10-15 new customers every month from your online presence, would that be worth a 5-minute conversation?",
        tip: "If they say no, they're not a fit. Move on."
      }
    ]
  }
];

const quickResponses = [
  { trigger: "It's too expensive", response: "If we bring you just 5 new customers a month, this pays for itself. How many are you losing right now?" },
  { trigger: "I already have a website", response: "That's great. But is it making you money? We build revenue engines, not just websites." },
  { trigger: "Send me an email", response: "I can do that, but the strategy is visual. Give me 5 minutes to show you exactly what I mean." },
  { trigger: "Not interested", response: "I hear you. But are you not interested in adding $10k to your monthly revenue? That's what we're talking about." },
  { trigger: "I need to think about it", response: "Totally understand. What specifically do you need to think about? Maybe I can help clarify." },
  { trigger: "Call me back later", response: "Happy to. But quick question—what would need to change between now and then for this to be a yes?" }
];

export default function Scripts() {
  const [activeScript, setActiveScript] = useState(scripts[0]);
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0, 1, 2, 3]));
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index?: number) => {
    navigator.clipboard.writeText(text);
    if (index !== undefined) {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
    toast.success("Copied to clipboard");
  };

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const copyFullScript = () => {
    const fullText = activeScript.sections.map(s => `[${s.title}]\n${s.content}`).join('\n\n');
    copyToClipboard(fullText);
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
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Module 02</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-1">Call Scripts</h1>
            <p className="text-muted-foreground mt-2">
              Word-for-word scripts for every scenario. Copy, practice, close.
            </p>
          </div>
          
          <Button onClick={copyFullScript} variant="outline" className="border-border">
            <Copy className="w-4 h-4 mr-2" /> Copy Full Script
          </Button>
        </div>
      </div>

      {/* Script Selector */}
      <div className="flex flex-wrap gap-2">
        {scripts.map((script) => (
          <button
            key={script.id}
            onClick={() => setActiveScript(script)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeScript.id === script.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {script.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Script Content */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <AlertCircle className="w-4 h-4" />
            {activeScript.description}
          </div>

          {activeScript.sections.map((section, idx) => (
            <Card key={idx} className="bg-card border-border overflow-hidden">
              <button
                onClick={() => toggleSection(idx)}
                className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground w-6">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="text-left">
                    <h3 className="font-semibold">{section.title}</h3>
                    <span className="text-xs text-muted-foreground">{section.timing}</span>
                  </div>
                </div>
                {expandedSections.has(idx) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              
              {expandedSections.has(idx) && (
                <CardContent className="px-4 pb-4 pt-0 border-t border-border">
                  <div className="pt-4 space-y-4">
                    <div className="relative group">
                      <p className="text-lg leading-relaxed pr-10">
                        "{section.content}"
                      </p>
                      <button
                        onClick={() => copyToClipboard(section.content, idx)}
                        className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {copiedIndex === idx ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        )}
                      </button>
                    </div>
                    
                    {section.tip && (
                      <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{section.tip}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Quick Responses Sidebar */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Quick Responses</h3>
          
          <div className="space-y-3">
            {quickResponses.map((item, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary/30 transition-colors cursor-pointer group">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-rose-400 mb-2">"{item.trigger}"</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.response}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Next Module CTA */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-blue-500/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Next Module</span>
              <h3 className="text-lg font-semibold mt-1">Objection Handling</h3>
              <p className="text-sm text-muted-foreground">Never get stuck again with instant responses.</p>
            </div>
            <Link href="/objections">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
