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
  ChevronRight,
  LogOut,
  User
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

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
            <Link href="/dashboard">
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
            <Link href="/dashboard">
              <div className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                location === "/dashboard" 
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

          {/* User Section & Footer */}
          <div className="p-4 border-t border-sidebar-border space-y-3">
            {/* User Info */}
            {user && (
              <div className="flex items-center gap-3 px-3 py-2 bg-secondary/50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <User className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email || 'Team Member'}</p>
                </div>
              </div>
            )}
            
            {/* Logout Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-secondary"
              onClick={handleLogout}
              disabled={loading}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>

            {/* Back to Main Site */}
            <Link href="/">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-muted-foreground border-sidebar-border hover:bg-secondary"
              >
                ← Back to Main Site
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background sticky top-0 z-40">
        <Link href="/dashboard">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">F</span>
            </div>
            <span className="text-base font-bold">Forge<span className="text-primary">OS</span></span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          {user && (
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover" />
              ) : (
                <User className="w-3.5 h-3.5 text-primary" />
              )}
            </div>
          )}
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
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
