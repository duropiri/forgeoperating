import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BookOpen, 
  PhoneCall, 
  ShieldAlert, 
  Menu,
  X,
  GraduationCap
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Training Hub", icon: LayoutDashboard },
    { href: "/playbook", label: "The Playbook", icon: BookOpen },
    { href: "/scripts", label: "Call Scripts", icon: PhoneCall },
    { href: "/objections", label: "Objection Killer", icon: ShieldAlert },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-sidebar-border">
            <h1 className="text-2xl font-display font-bold text-primary tracking-tighter">
              SALES<span className="text-foreground">OS</span>
            </h1>
            <p className="text-xs text-muted-foreground font-mono mt-1">TRAINING PROTOCOL // V2.1</p>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              
              return (
                <Link key={item.href} href={item.href}>
                  <div className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 group cursor-pointer border border-transparent",
                    isActive 
                      ? "bg-sidebar-accent text-primary border-primary/20 shadow-[0_0_15px_rgba(255,215,0,0.1)]" 
                      : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
                  )}>
                    <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                    <span className="font-medium font-mono text-sm tracking-wide">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-sidebar-border">
            <div className="bg-sidebar-accent/50 rounded-md p-4 border border-sidebar-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-mono font-bold text-foreground">KNOWLEDGE BASE</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1 font-mono leading-relaxed">
                MASTER THE SCRIPT. <br/>
                OWN THE OBJECTION. <br/>
                CLOSE THE DEAL.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background sticky top-0 z-40">
        <h1 className="text-xl font-display font-bold text-primary">SALES<span className="text-foreground">OS</span></h1>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative container py-8 md:py-12 animate-in fade-in duration-500">
          {children}
        </div>
      </main>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
