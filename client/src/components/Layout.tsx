import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutGrid, 
  BookOpen, 
  PhoneCall, 
  Shield, 
  Menu,
  X,
  Globe,
  Wrench,
  ClipboardCheck,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const salesNavItems = [
    { href: "/playbook", label: "The Playbook", icon: BookOpen, description: "Systems methodology" },
    { href: "/scripts", label: "Call Scripts", icon: PhoneCall, description: "Word-for-word scripts" },
    { href: "/objections", label: "Objections", icon: Shield, description: "Handle any pushback" },
  ];

  const fulfillmentNavItems = [
    { href: "/ai-website-setup", label: "Website Setup", icon: Globe, description: "Build sites in 30 min" },
    { href: "/system-installation", label: "System Install", icon: Wrench, description: "Deploy the stack" },
    { href: "/qa-checklist", label: "QA Checklist", icon: ClipboardCheck, description: "Pre-launch checks" },
  ];

  const NavLink = ({ item, onClick }: { item: typeof salesNavItems[0], onClick?: () => void }) => {
    const Icon = item.icon;
    const isActive = location === item.href;
    
    return (
      <Link href={item.href} onClick={onClick}>
        <div className={cn(
          "group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
          isActive 
            ? "bg-primary/10 text-primary" 
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
        )}>
          <Icon className={cn(
            "w-4 h-4 flex-shrink-0",
            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
          )} />
          <div className="flex-1 min-w-0">
            <span className={cn(
              "block text-sm font-medium",
              isActive ? "text-primary" : ""
            )}>{item.label}</span>
            <span className="block text-xs text-muted-foreground truncate">{item.description}</span>
          </div>
          <ChevronRight className={cn(
            "w-4 h-4 opacity-0 -translate-x-2 transition-all",
            isActive ? "opacity-100 translate-x-0 text-primary" : "group-hover:opacity-50 group-hover:translate-x-0"
          )} />
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-out md:relative md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">F</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground tracking-tight">
                    Forge<span className="text-primary">OS</span>
                  </h1>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Training Hub</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
            {/* Home Link */}
            <Link href="/">
              <div className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                location === "/" 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}>
                <LayoutGrid className="w-4 h-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </div>
            </Link>

            {/* Sales Training Section */}
            <div>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider px-3 mb-2">
                Sales Training
              </p>
              <div className="space-y-1">
                {salesNavItems.map((item) => (
                  <NavLink key={item.href} item={item} onClick={() => setIsMobileMenuOpen(false)} />
                ))}
              </div>
            </div>

            {/* Fulfillment Ops Section */}
            <div>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider px-3 mb-2">
                Fulfillment Ops
              </p>
              <div className="space-y-1">
                {fulfillmentNavItems.map((item) => (
                  <NavLink key={item.href} item={item} onClick={() => setIsMobileMenuOpen(false)} />
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Simple systems that work.</span>
                <br />
                No BS, just results.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background sticky top-0 z-40">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">F</span>
            </div>
            <span className="text-base font-bold">Forge<span className="text-primary">OS</span></span>
          </div>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container py-8 md:py-12 animate-fade-in">
          {children}
        </div>
      </main>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
