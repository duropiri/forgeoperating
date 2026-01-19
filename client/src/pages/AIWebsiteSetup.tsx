import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Sparkles, 
  Palette, 
  FileText,
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Copy,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function AIWebsiteSetup() {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const steps = [
    {
      id: 1,
      title: "Create Sub-Account",
      duration: "2 min",
      icon: FileText,
      color: "cyan",
      description: "Set up a new sub-account for the client in GoHighLevel.",
      details: [
        "Go to Agency View → Sub-Accounts",
        "Click 'Create Sub-Account'",
        "Enter client's business name exactly as they want it displayed",
        "Use client's email for the account (they'll receive login credentials)",
        "Select your snapshot template (pre-configured with automations)",
        "Click 'Save' and wait for account creation"
      ],
      proTip: "Always use a snapshot with pre-built automations. This saves 2-3 hours of manual setup per client."
    },
    {
      id: 2,
      title: "AI Website Generation",
      duration: "5 min",
      icon: Sparkles,
      color: "primary",
      description: "Use GHL's AI to generate the entire website from a prompt.",
      details: [
        "Enter the sub-account → Sites → Websites",
        "Click 'Create New Website' → 'AI Website Builder'",
        "Enter the business type and location (e.g., 'Plumber in Houston, TX')",
        "Add 3-5 services the business offers",
        "Select a style preference (Modern, Classic, Bold)",
        "Click 'Generate' and wait 60-90 seconds",
        "Review the generated pages (Home, About, Services, Contact)"
      ],
      proTip: "The AI pulls real competitor data. The more specific your prompt, the better the copy."
    },
    {
      id: 3,
      title: "Customize Branding",
      duration: "10 min",
      icon: Palette,
      color: "purple",
      description: "Apply the client's logo, colors, and images.",
      details: [
        "Upload client's logo (request PNG with transparent background)",
        "Set primary color from client's existing branding or suggest one",
        "Replace stock images with client's real photos if available",
        "Update phone number and address in the header/footer",
        "Add Google Maps embed for the contact page",
        "Review mobile responsiveness using the preview toggle"
      ],
      proTip: "If client has no logo, use Canva or the AI to generate one. Charge extra for this."
    },
    {
      id: 4,
      title: "Connect Domain",
      duration: "5 min",
      icon: Globe,
      color: "green",
      description: "Point the client's domain to the new website.",
      details: [
        "Go to Sites → Domains → Add Domain",
        "Enter the client's domain (e.g., clientbusiness.com)",
        "Copy the provided CNAME and A records",
        "Log into client's domain registrar (GoDaddy, Namecheap, etc.)",
        "Update DNS records with the copied values",
        "Wait 15-60 minutes for propagation",
        "Verify SSL certificate is active (green padlock)"
      ],
      proTip: "If client doesn't have a domain, purchase one through GHL for simplicity. Bill them for it."
    },
    {
      id: 5,
      title: "Final QA & Launch",
      duration: "5 min",
      icon: CheckCircle2,
      color: "emerald",
      description: "Run through the checklist and publish the site.",
      details: [
        "Test all navigation links",
        "Submit a test form and verify it reaches the CRM",
        "Check page load speed (should be under 3 seconds)",
        "Verify mobile layout on actual phone",
        "Confirm tracking pixels are installed (if applicable)",
        "Click 'Publish' to make the site live",
        "Send client the live URL with a congratulations message"
      ],
      proTip: "Always send a Loom video walkthrough with the delivery. It increases perceived value massively."
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-cyan-500/10 rounded-lg">
            <Globe className="w-6 h-6 text-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            AI WEBSITE <span className="text-cyan-400">SETUP</span>
          </h1>
        </div>
        <p className="text-muted-foreground font-mono text-sm max-w-2xl">
          FULFILLMENT SOP // BUILD CLIENT WEBSITES IN UNDER 30 MINUTES
        </p>
      </div>

      {/* Time Estimate Banner */}
      <Card className="border-cyan-500/20 bg-cyan-500/5">
        <CardContent className="py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span className="font-mono text-sm">
                <span className="text-cyan-400 font-bold">TOTAL TIME:</span>{" "}
                <span className="text-foreground">~27 minutes per site</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                With practice: 15-20 minutes
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isExpanded = expandedStep === step.id;
          const colorClasses = {
            cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
            primary: "text-primary bg-primary/10 border-primary/20",
            purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
            green: "text-green-400 bg-green-500/10 border-green-500/20",
            emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
          };
          const colors = colorClasses[step.color as keyof typeof colorClasses];

          return (
            <Card 
              key={step.id} 
              className={`border-border bg-card/50 transition-all duration-300 cursor-pointer ${isExpanded ? `border-l-4 ${colors.split(' ')[2]}` : ''}`}
              onClick={() => setExpandedStep(isExpanded ? null : step.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.split(' ').slice(1, 3).join(' ')}`}>
                      <Icon className={`w-5 h-5 ${colors.split(' ')[0]}`} />
                    </div>
                    <div>
                      <CardTitle className="font-display text-lg flex items-center gap-2">
                        <span className="text-muted-foreground font-mono text-sm">0{step.id}</span>
                        {step.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {step.duration}
                    </span>
                    <ArrowRight className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-4 border-t border-border mt-2">
                  <div className="space-y-4">
                    <ol className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <span className="text-muted-foreground font-mono min-w-[24px]">{idx + 1}.</span>
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs font-mono text-primary font-bold mb-1">PRO TIP</p>
                          <p className="text-sm text-muted-foreground">{step.proTip}</p>
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

      {/* Quick Reference */}
      <Card className="border-border bg-card/30">
        <CardHeader>
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-cyan-400" />
            QUICK REFERENCE LINKS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm font-mono">GHL AI Website Builder</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => copyToClipboard("https://app.gohighlevel.com")}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm font-mono">DNS Propagation Checker</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => copyToClipboard("https://dnschecker.org")}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm font-mono">Page Speed Test</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => copyToClipboard("https://pagespeed.web.dev")}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm font-mono">Loom Screen Recorder</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => copyToClipboard("https://loom.com")}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
