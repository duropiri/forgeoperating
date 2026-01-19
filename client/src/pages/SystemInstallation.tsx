import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  MessageSquare, 
  Phone, 
  Star,
  Calendar,
  Bot,
  CheckCircle2,
  ArrowRight,
  Zap,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

export default function SystemInstallation() {
  const [expandedSystem, setExpandedSystem] = useState<number | null>(1);

  const systems = [
    {
      id: 1,
      title: "Conversation AI Bot",
      icon: Bot,
      color: "cyan",
      purpose: "Qualifies leads 24/7 and books appointments automatically.",
      stickiness: "HIGH — Client becomes dependent on automated lead qualification.",
      steps: [
        "Go to Automation → Conversations AI",
        "Create new bot or use snapshot template",
        "Configure greeting message with business name",
        "Set qualification questions (budget, timeline, service needed)",
        "Connect to calendar for automatic booking",
        "Set fallback to notify team if bot can't handle query",
        "Test with sample conversations before going live"
      ],
      warning: "Always test the bot flow yourself before enabling. A broken bot loses leads."
    },
    {
      id: 2,
      title: "Missed Call Text Back",
      icon: Phone,
      color: "primary",
      purpose: "Instantly texts anyone who calls and doesn't get answered.",
      stickiness: "CRITICAL — Captures leads that would otherwise be lost forever.",
      steps: [
        "Go to Automation → Workflows",
        "Create trigger: 'Call Status = Missed'",
        "Add action: Send SMS within 60 seconds",
        "Message template: 'Hey! Sorry we missed your call. How can we help you today?'",
        "Connect response to Conversation AI bot",
        "Set business hours filter (optional)",
        "Enable and test by calling the business number"
      ],
      warning: "Make sure the phone number has SMS enabled. Some numbers are voice-only."
    },
    {
      id: 3,
      title: "Review Request Automation",
      icon: Star,
      color: "yellow",
      purpose: "Automatically asks happy customers for Google reviews.",
      stickiness: "HIGH — Builds reputation asset that compounds over time.",
      steps: [
        "Go to Automation → Workflows",
        "Create trigger: 'Opportunity Status = Won' or 'Invoice Paid'",
        "Add delay: 24-48 hours after service completion",
        "Send SMS: 'Thanks for choosing [Business]! Would you mind leaving us a quick review?'",
        "Include direct Google Review link (get from Google Business Profile)",
        "Add follow-up if no response after 3 days",
        "Track review count in dashboard"
      ],
      warning: "Never incentivize reviews (against Google TOS). Just ask politely."
    },
    {
      id: 4,
      title: "Appointment Reminders",
      icon: Calendar,
      color: "green",
      purpose: "Reduces no-shows by 80% with automated reminders.",
      stickiness: "MEDIUM — Standard feature but essential for service businesses.",
      steps: [
        "Go to Calendars → Select calendar → Notifications",
        "Enable SMS reminder: 24 hours before",
        "Enable SMS reminder: 2 hours before",
        "Include: Date, time, address, and reschedule link",
        "Add confirmation request: 'Reply YES to confirm'",
        "Set up no-show follow-up workflow",
        "Test by booking a test appointment"
      ],
      warning: "Too many reminders annoy customers. 2-3 max is the sweet spot."
    },
    {
      id: 5,
      title: "Chat Widget Installation",
      icon: MessageSquare,
      color: "purple",
      purpose: "Captures website visitors and routes them to the AI bot.",
      stickiness: "HIGH — Every website visitor becomes a potential conversation.",
      steps: [
        "Go to Sites → Chat Widget",
        "Customize colors to match client's brand",
        "Set greeting: 'Hi! How can we help you today?'",
        "Connect to Conversation AI bot",
        "Copy the embed code",
        "Paste into website footer (before </body> tag)",
        "Test on live site across desktop and mobile"
      ],
      warning: "Widget must match website colors or it looks unprofessional."
    }
  ];

  const colorClasses: Record<string, string> = {
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    primary: "text-primary bg-primary/10 border-primary/20",
    yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    green: "text-green-400 bg-green-500/10 border-green-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20"
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-cyan-500/10 rounded-lg">
            <Settings className="w-6 h-6 text-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            SYSTEM <span className="text-cyan-400">INSTALLATION</span>
          </h1>
        </div>
        <p className="text-muted-foreground font-mono text-sm max-w-2xl">
          FULFILLMENT SOP // INSTALL THE VALUE STACK THAT CREATES STICKINESS
        </p>
      </div>

      {/* Value Stack Diagram */}
      <Card className="border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-transparent">
        <CardHeader>
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            THE VALUE STACK
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {["Website", "Chat Bot", "Missed Call", "Reviews", "Reminders"].map((item, idx) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-24 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-mono text-cyan-400 font-bold">{item}</span>
                </div>
                {idx < 4 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center font-mono">
            Each layer feeds the next. The more you install, the stickier the client becomes.
          </p>
        </CardContent>
      </Card>

      {/* Systems */}
      <div className="space-y-4">
        {systems.map((system) => {
          const Icon = system.icon;
          const isExpanded = expandedSystem === system.id;
          const colors = colorClasses[system.color];

          return (
            <Card 
              key={system.id} 
              className={`border-border bg-card/50 transition-all duration-300 cursor-pointer ${isExpanded ? `border-l-4 ${colors.split(' ')[2]}` : ''}`}
              onClick={() => setExpandedSystem(isExpanded ? null : system.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.split(' ').slice(1, 3).join(' ')}`}>
                      <Icon className={`w-5 h-5 ${colors.split(' ')[0]}`} />
                    </div>
                    <div>
                      <CardTitle className="font-display text-lg">{system.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{system.purpose}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-4 border-t border-border mt-2">
                  <div className="space-y-4">
                    {/* Stickiness Indicator */}
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-mono text-muted-foreground">STICKINESS:</span>
                      <span className={`font-bold ${colors.split(' ')[0]}`}>{system.stickiness}</span>
                    </div>

                    {/* Steps */}
                    <ol className="space-y-2">
                      {system.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>

                    {/* Warning */}
                    <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                        <div>
                          <p className="text-xs font-mono text-red-400 font-bold mb-1">WARNING</p>
                          <p className="text-sm text-muted-foreground">{system.warning}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* Installation Order */}
      <Card className="border-border bg-card/30">
        <CardHeader>
          <CardTitle className="font-display text-lg">RECOMMENDED INSTALLATION ORDER</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: 1, name: "Chat Widget", reason: "Captures traffic immediately" },
              { num: 2, name: "Missed Call", reason: "Saves lost phone leads" },
              { num: 3, name: "AI Bot", reason: "Qualifies and books" },
              { num: 4, name: "Reminders", reason: "Reduces no-shows" },
              { num: 5, name: "Reviews", reason: "Builds long-term asset" }
            ].map((item) => (
              <div key={item.num} className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-cyan-400 font-bold font-mono">{item.num}</span>
                </div>
                <p className="text-sm font-bold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
