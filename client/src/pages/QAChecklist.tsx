import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowLeft,
  CheckCircle2,
  Circle,
  Globe,
  Smartphone,
  Zap,
  MessageSquare,
  Phone,
  Star,
  FileText,
  AlertTriangle,
  Send
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CheckItem {
  id: string;
  label: string;
  critical?: boolean;
}

interface CheckCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: CheckItem[];
}

const categories: CheckCategory[] = [
  {
    id: "website",
    name: "Website",
    icon: <Globe className="w-5 h-5" />,
    items: [
      { id: "w1", label: "All pages load without errors" },
      { id: "w2", label: "Logo displays correctly", critical: true },
      { id: "w3", label: "Phone number is correct and clickable", critical: true },
      { id: "w4", label: "Address is correct" },
      { id: "w5", label: "Contact form submits successfully", critical: true },
      { id: "w6", label: "Form submissions appear in CRM", critical: true },
      { id: "w7", label: "Google Maps embed works" },
      { id: "w8", label: "All navigation links work" },
      { id: "w9", label: "No placeholder text visible" }
    ]
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    items: [
      { id: "m1", label: "Site loads on mobile device", critical: true },
      { id: "m2", label: "Text is readable without zooming" },
      { id: "m3", label: "Buttons are tappable" },
      { id: "m4", label: "Forms work on mobile", critical: true },
      { id: "m5", label: "Click-to-call works", critical: true },
      { id: "m6", label: "Chat widget doesn't block content" }
    ]
  },
  {
    id: "speed",
    name: "Performance",
    icon: <Zap className="w-5 h-5" />,
    items: [
      { id: "s1", label: "Page loads in under 3 seconds", critical: true },
      { id: "s2", label: "Images are optimized" },
      { id: "s3", label: "No broken images" },
      { id: "s4", label: "SSL certificate active (green padlock)", critical: true }
    ]
  },
  {
    id: "chat",
    name: "Chat Widget",
    icon: <MessageSquare className="w-5 h-5" />,
    items: [
      { id: "c1", label: "Widget appears on all pages" },
      { id: "c2", label: "Colors match brand" },
      { id: "c3", label: "Greeting message displays" },
      { id: "c4", label: "Messages route to CRM", critical: true },
      { id: "c5", label: "AI bot responds correctly" }
    ]
  },
  {
    id: "phone",
    name: "Phone System",
    icon: <Phone className="w-5 h-5" />,
    items: [
      { id: "p1", label: "Tracking number forwards correctly", critical: true },
      { id: "p2", label: "Missed call text back fires", critical: true },
      { id: "p3", label: "Voicemail is set up" },
      { id: "p4", label: "Call recordings enabled (if applicable)" }
    ]
  },
  {
    id: "reviews",
    name: "Reviews",
    icon: <Star className="w-5 h-5" />,
    items: [
      { id: "r1", label: "Review request workflow active" },
      { id: "r2", label: "Google Review link works", critical: true },
      { id: "r3", label: "Negative review gate works" },
      { id: "r4", label: "Follow-up reminders scheduled" }
    ]
  },
  {
    id: "delivery",
    name: "Client Delivery",
    icon: <FileText className="w-5 h-5" />,
    items: [
      { id: "d1", label: "Loom walkthrough recorded", critical: true },
      { id: "d2", label: "Login credentials documented" },
      { id: "d3", label: "Support contact provided" },
      { id: "d4", label: "Delivery email sent", critical: true }
    ]
  }
];

export default function QAChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = checkedItems.size;
  const criticalItems = categories.flatMap(cat => cat.items.filter(item => item.critical));
  const criticalChecked = criticalItems.filter(item => checkedItems.has(item.id)).length;
  const allCriticalPassed = criticalChecked === criticalItems.length;

  const resetChecklist = () => setCheckedItems(new Set());

  const handleDelivery = () => {
    if (!allCriticalPassed) {
      toast.error("Complete all critical items before delivery");
      return;
    }
    toast.success("Ready for delivery! Send the client their Loom walkthrough.");
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
            <span className="text-xs font-medium text-rose-400 uppercase tracking-wider">Module 06</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-1">QA Checklist</h1>
            <p className="text-muted-foreground mt-2">
              Pre-launch verification to ensure flawless client delivery.
            </p>
          </div>
          
          <Button variant="outline" size="sm" onClick={resetChecklist} className="border-border">
            Reset Checklist
          </Button>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Overall Progress</span>
              <span className="text-lg font-bold">{checkedCount}/{totalItems}</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(checkedCount / totalItems) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className={`border ${allCriticalPassed ? "border-emerald-500/30 bg-emerald-500/5" : "border-rose-500/30 bg-rose-500/5"}`}>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Critical Items</span>
              <span className={`text-lg font-bold ${allCriticalPassed ? "text-emerald-400" : "text-rose-400"}`}>
                {criticalChecked}/{criticalItems.length}
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${allCriticalPassed ? "bg-emerald-500" : "bg-rose-500"}`}
                style={{ width: `${(criticalChecked / criticalItems.length) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className={`border ${checkedCount === totalItems ? "border-emerald-500/30 bg-emerald-500/5" : "border-border"}`}>
          <CardContent className="p-5 flex items-center justify-center">
            {allCriticalPassed ? (
              <Button onClick={handleDelivery} className="bg-emerald-500 hover:bg-emerald-600 text-white">
                <Send className="w-4 h-4 mr-2" /> Ready for Delivery
              </Button>
            ) : (
              <div className="text-center">
                <AlertTriangle className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">{totalItems - checkedCount} items remaining</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Checklist Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const categoryChecked = category.items.filter(item => checkedItems.has(item.id)).length;
          const isComplete = categoryChecked === category.items.length;

          return (
            <Card key={category.id} className={`bg-card border ${isComplete ? "border-emerald-500/30" : "border-border"}`}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isComplete ? "bg-emerald-500/10 text-emerald-400" : "bg-secondary text-muted-foreground"}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{categoryChecked}/{category.items.length} complete</p>
                    </div>
                  </div>
                  {isComplete && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                </div>

                <div className="space-y-2">
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${
                        checkedItems.has(item.id) 
                          ? "bg-emerald-500/10" 
                          : "hover:bg-secondary"
                      }`}
                    >
                      {checkedItems.has(item.id) ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={`text-sm ${checkedItems.has(item.id) ? "text-emerald-400 line-through" : ""}`}>
                        {item.label}
                      </span>
                      {item.critical && !checkedItems.has(item.id) && (
                        <span className="ml-auto text-[10px] font-medium text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                          CRITICAL
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Delivery Protocol */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Delivery Protocol</h3>
          <ol className="space-y-3">
            {[
              "Record a Loom walkthrough of the website and all features (3-5 min)",
              "Send delivery email with Loom link, login credentials, and support contact",
              "Schedule a 15-min onboarding call to walk them through the dashboard",
              "Mark opportunity as 'Delivered' in CRM and set follow-up for 7 days"
            ].map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Back to Training */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Training Complete</span>
              <h3 className="text-lg font-semibold mt-1">Back to Dashboard</h3>
              <p className="text-sm text-muted-foreground">Review all modules or start a new client setup.</p>
            </div>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Return Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
