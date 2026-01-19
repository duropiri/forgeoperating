import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Phone,
  Star,
  Mail,
  Bot,
  CheckCircle2,
  Clock,
  Lightbulb
} from "lucide-react";
import { useState } from "react";

interface System {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  value: string;
  setupTime: string;
  steps: string[];
  tip: string;
}

const systems: System[] = [
  {
    id: "chat-widget",
    icon: <MessageSquare className="w-6 h-6" />,
    name: "Chat Widget",
    description: "Live chat that captures leads 24/7 and routes them to the CRM.",
    value: "Captures 15-20% more leads",
    setupTime: "5 min",
    steps: [
      "Go to Sites → Chat Widget in the sub-account",
      "Customize the widget color to match the brand",
      "Set the greeting message (e.g., 'Hi! How can we help you today?')",
      "Enable 'Capture Lead Info' to require name/phone before chat",
      "Copy the embed code",
      "Paste into the website's footer section",
      "Test by sending a message and verifying it appears in Conversations"
    ],
    tip: "Set business hours so after-hours messages get an auto-response with a callback promise."
  },
  {
    id: "ai-bot",
    icon: <Bot className="w-6 h-6" />,
    name: "AI Conversation Bot",
    description: "Automated bot that qualifies leads and books appointments without human intervention.",
    value: "Replaces $3k/mo receptionist",
    setupTime: "15 min",
    steps: [
      "Go to Automation → Workflows → Create New",
      "Select 'Lead Qualification' template or build from scratch",
      "Set trigger: 'New Contact Created' or 'Form Submission'",
      "Add AI step: Configure qualification questions",
      "Set booking action: Connect to calendar for appointment scheduling",
      "Add fallback: Route to human if AI can't handle the query",
      "Test the full flow with a dummy lead"
    ],
    tip: "Train the AI with 10-15 example conversations from the client's industry for better responses."
  },
  {
    id: "missed-call",
    icon: <Phone className="w-6 h-6" />,
    name: "Missed Call Text Back",
    description: "Automatically texts leads when a call is missed. No lead left behind.",
    value: "Saves 30% of missed leads",
    setupTime: "5 min",
    steps: [
      "Go to Automation → Workflows",
      "Create workflow with trigger: 'Call Status = Missed'",
      "Add action: 'Send SMS'",
      "Write message: 'Hey! Sorry we missed your call. How can we help you?'",
      "Set delay: 1 minute after missed call",
      "Enable workflow and test by calling the tracking number",
      "Verify SMS is received and logged in CRM"
    ],
    tip: "Add a second follow-up SMS after 30 minutes if they don't respond to the first."
  },
  {
    id: "review-funnel",
    icon: <Star className="w-6 h-6" />,
    name: "Review Automation",
    description: "Automatically requests reviews and filters negative feedback internally.",
    value: "Generates 5-10 reviews/month",
    setupTime: "10 min",
    steps: [
      "Go to Automation → Workflows → Create 'Review Request'",
      "Set trigger: 'Invoice Paid' or 'Appointment Completed'",
      "Add delay: 2 hours after trigger",
      "Send SMS: 'Thanks for choosing us! How was your experience? Reply 1-5'",
      "If 4-5: Send Google Review link",
      "If 1-3: Send internal feedback form (don't ask for public review)",
      "Set up reminder sequence for non-responders"
    ],
    tip: "The 'gate' is key—never send unhappy customers to Google. Capture their feedback privately first."
  },
  {
    id: "reactivation",
    icon: <Mail className="w-6 h-6" />,
    name: "Database Reactivation",
    description: "Automated campaigns to past customers for repeat business and referrals.",
    value: "Generates $5-10k in first month",
    setupTime: "15 min",
    steps: [
      "Import client's existing customer list (CSV with name, phone, email)",
      "Create campaign: 'Past Customer Reactivation'",
      "Write SMS: 'Hey [Name]! It's been a while. We have a special offer for returning customers...'",
      "Set up 3-message sequence over 7 days",
      "Add email backup for non-SMS responders",
      "Launch campaign and monitor response rate",
      "Track bookings attributed to the campaign"
    ],
    tip: "This is the 'quick win' that proves ROI immediately. Run it in the first week after setup."
  }
];

export default function SystemInstallation() {
  const [activeSystem, setActiveSystem] = useState(systems[0]);
  const [completedSystems, setCompletedSystems] = useState<Set<string>>(new Set());

  const toggleComplete = (id: string) => {
    const newCompleted = new Set(completedSystems);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedSystems(newCompleted);
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
            <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">Module 05</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-1">System Installation</h1>
            <p className="text-muted-foreground mt-2">
              Deploy the full value stack that creates client stickiness.
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium">{completedSystems.size} of {systems.length} installed</span>
          </div>
        </div>
      </div>

      {/* Value Stack Visualization */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">The Value Stack</h3>
          <div className="flex flex-wrap gap-3">
            {systems.map((system) => (
              <button
                key={system.id}
                onClick={() => setActiveSystem(system)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  activeSystem.id === system.id
                    ? "bg-amber-500 text-white"
                    : completedSystems.has(system.id)
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {completedSystems.has(system.id) && activeSystem.id !== system.id ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  system.icon
                )}
                <span className="font-medium">{system.name}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-6">
              {/* System Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                    {activeSystem.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{activeSystem.name}</h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3" /> {activeSystem.setupTime}
                      <span className="text-emerald-400">• {activeSystem.value}</span>
                    </p>
                  </div>
                </div>
                <Button
                  variant={completedSystems.has(activeSystem.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleComplete(activeSystem.id)}
                  className={completedSystems.has(activeSystem.id) ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                >
                  {completedSystems.has(activeSystem.id) ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Installed
                    </>
                  ) : (
                    "Mark Complete"
                  )}
                </Button>
              </div>

              <p className="text-muted-foreground">{activeSystem.description}</p>

              {/* Setup Steps */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Setup Steps</h3>
                <ol className="space-y-2">
                  {activeSystem.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tip */}
              <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-primary mb-1">Pro Tip</p>
                  <p className="text-sm text-muted-foreground">{activeSystem.tip}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress */}
          <Card className="bg-card border-border">
            <CardContent className="p-5">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Installation Progress</h3>
              <div className="space-y-3">
                {systems.map((system) => (
                  <div key={system.id} className="flex items-center justify-between">
                    <span className={`text-sm ${completedSystems.has(system.id) ? "text-emerald-400" : "text-muted-foreground"}`}>
                      {system.name}
                    </span>
                    {completedSystems.has(system.id) ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-border" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{Math.round((completedSystems.size / systems.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${(completedSystems.size / systems.length) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Module */}
          <Card className="bg-gradient-to-br from-rose-500/10 to-rose-500/5 border-rose-500/20">
            <CardContent className="p-5">
              <span className="text-xs font-medium text-rose-400 uppercase tracking-wider">Next Module</span>
              <h3 className="text-lg font-semibold mt-1">QA Checklist</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">Pre-launch verification.</p>
              <Link href="/qa-checklist">
                <Button size="sm" className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
