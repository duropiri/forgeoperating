import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ClipboardCheck, 
  Globe,
  Smartphone,
  Zap,
  MessageSquare,
  Phone,
  Star,
  Calendar,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Send
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ChecklistItem {
  id: string;
  label: string;
  critical: boolean;
}

interface ChecklistSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  items: ChecklistItem[];
}

export default function QAChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const sections: ChecklistSection[] = [
    {
      id: "website",
      title: "Website Quality",
      icon: Globe,
      color: "cyan",
      items: [
        { id: "w1", label: "All pages load without errors", critical: true },
        { id: "w2", label: "Logo displays correctly", critical: true },
        { id: "w3", label: "Phone number is correct and clickable", critical: true },
        { id: "w4", label: "Address is correct", critical: true },
        { id: "w5", label: "All navigation links work", critical: true },
        { id: "w6", label: "Contact form submits successfully", critical: true },
        { id: "w7", label: "No placeholder/lorem ipsum text visible", critical: true },
        { id: "w8", label: "Images are high quality (not pixelated)", critical: false },
        { id: "w9", label: "Footer contains all required info", critical: false },
        { id: "w10", label: "SSL certificate active (https://)", critical: true }
      ]
    },
    {
      id: "mobile",
      title: "Mobile Responsiveness",
      icon: Smartphone,
      color: "purple",
      items: [
        { id: "m1", label: "Site looks good on mobile (test on real phone)", critical: true },
        { id: "m2", label: "Text is readable without zooming", critical: true },
        { id: "m3", label: "Buttons are tappable (not too small)", critical: true },
        { id: "m4", label: "Images don't overflow screen", critical: false },
        { id: "m5", label: "Navigation menu works on mobile", critical: true },
        { id: "m6", label: "Forms are usable on mobile", critical: true }
      ]
    },
    {
      id: "performance",
      title: "Performance",
      icon: Zap,
      color: "primary",
      items: [
        { id: "p1", label: "Page loads in under 3 seconds", critical: true },
        { id: "p2", label: "No broken images (404s)", critical: true },
        { id: "p3", label: "No console errors in browser", critical: false },
        { id: "p4", label: "Google PageSpeed score > 70", critical: false }
      ]
    },
    {
      id: "chat",
      title: "Chat Widget",
      icon: MessageSquare,
      color: "green",
      items: [
        { id: "c1", label: "Widget appears on all pages", critical: true },
        { id: "c2", label: "Widget colors match brand", critical: false },
        { id: "c3", label: "Greeting message displays correctly", critical: true },
        { id: "c4", label: "Bot responds to test message", critical: true },
        { id: "c5", label: "Conversation appears in GHL inbox", critical: true }
      ]
    },
    {
      id: "phone",
      title: "Phone System",
      icon: Phone,
      color: "blue",
      items: [
        { id: "ph1", label: "Business number rings correctly", critical: true },
        { id: "ph2", label: "Missed call triggers text back", critical: true },
        { id: "ph3", label: "Text back message is correct", critical: true },
        { id: "ph4", label: "Call recordings enabled (if applicable)", critical: false }
      ]
    },
    {
      id: "calendar",
      title: "Calendar & Booking",
      icon: Calendar,
      color: "orange",
      items: [
        { id: "cal1", label: "Calendar shows correct availability", critical: true },
        { id: "cal2", label: "Test booking creates appointment", critical: true },
        { id: "cal3", label: "Confirmation email/SMS sent", critical: true },
        { id: "cal4", label: "Reminder automation is active", critical: true },
        { id: "cal5", label: "Timezone is set correctly", critical: true }
      ]
    },
    {
      id: "reviews",
      title: "Review System",
      icon: Star,
      color: "yellow",
      items: [
        { id: "r1", label: "Google Review link is correct", critical: true },
        { id: "r2", label: "Review request automation is active", critical: true },
        { id: "r3", label: "Test trigger sends review request", critical: true }
      ]
    }
  ];

  const toggleItem = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const totalItems = sections.reduce((acc, section) => acc + section.items.length, 0);
  const checkedCount = checkedItems.size;
  const criticalItems = sections.flatMap(s => s.items.filter(i => i.critical));
  const criticalChecked = criticalItems.filter(i => checkedItems.has(i.id)).length;
  const allCriticalPassed = criticalChecked === criticalItems.length;

  const colorClasses: Record<string, string> = {
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    primary: "text-primary bg-primary/10 border-primary/20",
    green: "text-green-400 bg-green-500/10 border-green-500/20",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
  };

  const handleDelivery = () => {
    if (!allCriticalPassed) {
      toast.error("Cannot deliver: Critical items not completed!");
      return;
    }
    toast.success("Ready for delivery! Send the client their Loom walkthrough.");
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-cyan-500/10 rounded-lg">
            <ClipboardCheck className="w-6 h-6 text-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            QA <span className="text-cyan-400">CHECKLIST</span>
          </h1>
        </div>
        <p className="text-muted-foreground font-mono text-sm max-w-2xl">
          FULFILLMENT SOP // VERIFY BEFORE CLIENT HANDOFF
        </p>
      </div>

      {/* Progress Banner */}
      <Card className={`border-2 ${allCriticalPassed ? 'border-green-500/50 bg-green-500/5' : 'border-yellow-500/50 bg-yellow-500/5'}`}>
        <CardContent className="py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs font-mono text-muted-foreground">TOTAL PROGRESS</p>
                <p className="text-2xl font-bold text-foreground">{checkedCount}/{totalItems}</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-xs font-mono text-muted-foreground">CRITICAL ITEMS</p>
                <p className={`text-2xl font-bold ${allCriticalPassed ? 'text-green-400' : 'text-yellow-400'}`}>
                  {criticalChecked}/{criticalItems.length}
                </p>
              </div>
            </div>
            <Button 
              onClick={handleDelivery}
              disabled={!allCriticalPassed}
              className={allCriticalPassed ? 'bg-green-500 hover:bg-green-600' : ''}
            >
              <Send className="w-4 h-4 mr-2" />
              {allCriticalPassed ? 'Ready for Delivery' : 'Complete Critical Items'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-muted-foreground">Critical (must pass)</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Optional (nice to have)</span>
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          const colors = colorClasses[section.color];
          const sectionChecked = section.items.filter(i => checkedItems.has(i.id)).length;

          return (
            <Card key={section.id} className="border-border bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors.split(' ').slice(1, 3).join(' ')}`}>
                      <Icon className={`w-4 h-4 ${colors.split(' ')[0]}`} />
                    </div>
                    <CardTitle className="font-display text-base">{section.title}</CardTitle>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {sectionChecked}/{section.items.length}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {section.items.map((item) => {
                  const isChecked = checkedItems.has(item.id);
                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all ${
                        isChecked ? 'bg-green-500/10' : 'hover:bg-muted/50'
                      }`}
                    >
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={`text-sm flex-1 ${isChecked ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                        {item.label}
                      </span>
                      {item.critical && !isChecked && (
                        <AlertTriangle className="w-3 h-3 text-red-400 flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Delivery Checklist */}
      <Card className="border-border bg-card/30">
        <CardHeader>
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <Send className="w-5 h-5 text-cyan-400" />
            DELIVERY PROTOCOL
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-cyan-400 font-mono font-bold">1.</span>
              <span className="text-foreground">Record a Loom walkthrough of the website and all features (3-5 min)</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-cyan-400 font-mono font-bold">2.</span>
              <span className="text-foreground">Send delivery email with Loom link, login credentials, and support contact</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-cyan-400 font-mono font-bold">3.</span>
              <span className="text-foreground">Schedule a 15-min onboarding call to walk them through the dashboard</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-cyan-400 font-mono font-bold">4.</span>
              <span className="text-foreground">Mark opportunity as "Delivered" in CRM and set follow-up for 7 days</span>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
