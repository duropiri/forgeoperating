"use client";

import { Button } from "@/components/ui/button";
import { 
  ChevronDown,
  Globe,
  Phone,
  Inbox,
  Smartphone,
  Search,
  Star,
  Mail,
  MousePointer,
  RefreshCw,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// All 9 features matching Stone Systems structure
const allFeatures = [
  { slug: "functional-website", title: "Functional Website", icon: Globe, description: "Get a lead-generating website in just days" },
  { slug: "missed-call-text-back", title: "Missed Call Text Back", icon: Phone, description: "Automatically text back missed calls" },
  { slug: "all-in-one-inbox", title: "All-In-One Inbox", icon: Inbox, description: "Get all your messages in one place" },
  { slug: "business-phone", title: "Business Phone", icon: Smartphone, description: "Separate business and personal" },
  { slug: "local-seo", title: "Local SEO", icon: Search, description: "Actually get found on Google" },
  { slug: "review-funnel", title: "5-Star Magic Review Funnel", icon: Star, description: "Get more 5-star reviews and prevent bad ones" },
  { slug: "marketing-campaigns", title: "One-Click Marketing Campaigns", icon: Mail, description: "Keep your customers thinking about you" },
  { slug: "lead-follow-up", title: "Automated Lead Follow-Up", icon: MousePointer, description: "Automatically follow up with leads via text" },
  { slug: "database-reactivation", title: "Database Reactivation", icon: RefreshCw, description: "Turn old customers into new revenue" }
];

// Mega Dropdown component matching Stone Systems grid layout
const FeaturesDropdown = ({ onNavigate }: { onNavigate?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFeatureClick = () => {
    setIsOpen(false);
    onNavigate?.();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-[#555] hover:text-[#1A1A1A] transition-colors font-medium"
      >
        Systems & Features
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] bg-white rounded-2xl shadow-2xl border border-[#E5E2DB] py-6 px-6 z-50">
          <div className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-4 px-2">
            Systems & Features
          </div>
          <div className="border-t border-[#E5E2DB] pt-4">
            <div className="grid grid-cols-3 gap-2">
              {allFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Link key={feature.slug} href={`/features/${feature.slug}`} onClick={handleFeatureClick}>
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F5F2ED] transition-colors cursor-pointer group">
                      <div className="w-10 h-10 rounded-lg bg-[#F5F2ED] group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors border border-[#E5E2DB]">
                        <Icon className="w-5 h-5 text-[#555]" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-[#1A1A1A] leading-tight">{feature.title}</p>
                        <p className="text-xs text-[#666] mt-0.5 leading-tight">{feature.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF]/95 backdrop-blur-md border-b border-[#E5E2DB]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">Forge<span className="text-teal-500">OS</span></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <FeaturesDropdown />
            <Link href="/#how-it-works">
              <span className="text-sm text-[#555] hover:text-[#1A1A1A] transition-colors font-medium cursor-pointer">How It Works</span>
            </Link>
            <Link href="/#testimonials">
              <span className="text-sm text-[#555] hover:text-[#1A1A1A] transition-colors font-medium cursor-pointer">Reviews</span>
            </Link>
            <Link href="/#faq">
              <span className="text-sm text-[#555] hover:text-[#1A1A1A] transition-colors font-medium cursor-pointer">FAQ</span>
            </Link>
            <Link href="/contact">
              <span className="text-sm text-[#555] hover:text-[#1A1A1A] transition-colors font-medium cursor-pointer">Contact</span>
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-[#555] hover:text-[#1A1A1A] hover:bg-[#E8E4DD] font-medium">
                Team Login
              </Button>
            </Link>
            <Link href="/#book">
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white shadow-sm font-medium">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#E5E2DB] pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/#how-it-works" onClick={closeMobileMenu}>
                <span className="text-sm text-[#555] hover:text-[#1A1A1A] font-medium">How It Works</span>
              </Link>
              <Link href="/#testimonials" onClick={closeMobileMenu}>
                <span className="text-sm text-[#555] hover:text-[#1A1A1A] font-medium">Reviews</span>
              </Link>
              <Link href="/#faq" onClick={closeMobileMenu}>
                <span className="text-sm text-[#555] hover:text-[#1A1A1A] font-medium">FAQ</span>
              </Link>
              <Link href="/contact" onClick={closeMobileMenu}>
                <span className="text-sm text-[#555] hover:text-[#1A1A1A] font-medium">Contact</span>
              </Link>
              
              <div className="border-t border-[#E5E2DB] pt-4 mt-2">
                <p className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-3">Systems & Features</p>
                <div className="grid grid-cols-1 gap-2">
                  {allFeatures.map((feature) => (
                    <Link key={feature.slug} href={`/features/${feature.slug}`} onClick={closeMobileMenu}>
                      <span className="text-sm text-[#555] hover:text-[#1A1A1A]">{feature.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#E5E2DB]">
                <Link href="/dashboard" onClick={closeMobileMenu}>
                  <Button variant="outline" size="sm" className="w-full text-[#555] border-[#E5E2DB]">
                    Team Login
                  </Button>
                </Link>
                <Link href="/#book" onClick={closeMobileMenu}>
                  <Button size="sm" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
