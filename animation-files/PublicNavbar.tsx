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
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// All 9 features matching Stone Systems structure
const allFeatures = [
  {
    slug: "functional-website",
    title: "Functional Website",
    icon: Globe,
    description: "Get a lead-generating website in just days",
  },
  {
    slug: "missed-call-text-back",
    title: "Missed Call Text Back",
    icon: Phone,
    description: "Automatically text back missed calls",
  },
  {
    slug: "all-in-one-inbox",
    title: "All-In-One Inbox",
    icon: Inbox,
    description: "Get all your messages in one place",
  },
  {
    slug: "business-phone",
    title: "Business Phone",
    icon: Smartphone,
    description: "Separate business and personal",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    icon: Search,
    description: "Actually get found on Google",
  },
  {
    slug: "review-funnel",
    title: "5-Star Magic Review Funnel",
    icon: Star,
    description: "Get more 5-star reviews and prevent bad ones",
  },
  {
    slug: "marketing-campaigns",
    title: "One-Click Marketing Campaigns",
    icon: Mail,
    description: "Keep your customers thinking about you",
  },
  {
    slug: "lead-follow-up",
    title: "Automated Lead Follow-Up",
    icon: MousePointer,
    description: "Automatically follow up with leads via text",
  },
  {
    slug: "database-reactivation",
    title: "Database Reactivation",
    icon: RefreshCw,
    description: "Turn old customers into new revenue",
  },
];

// Smooth scroll to anchor with offset for fixed navbar
const scrollToAnchor = (anchorId: string) => {
  const element = document.getElementById(anchorId);
  if (element) {
    const navbarHeight = 80; // Account for fixed navbar
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  }
};

// Anchor link component that handles both same-page and cross-page navigation
const AnchorLink = ({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();

    // Extract anchor from href (e.g., "/#faq" -> "faq")
    const anchor = href.replace("/#", "");

    // If we're on the landing page, just scroll
    if (pathname === "/" || pathname === "") {
      scrollToAnchor(anchor);
    } else {
      // Navigate to landing page first, then scroll after a brief delay
      router.push("/");
      setTimeout(() => {
        scrollToAnchor(anchor);
      }, 100);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Mega Dropdown component with animations
const FeaturesDropdown = ({ onNavigate }: { onNavigate?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-[#555] hover:text-[#1A1A1A] transition-colors font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Systems & Features
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] bg-white rounded-2xl shadow-2xl border border-[#E5E2DB] py-6 px-6 z-50"
          >
            <div className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-4 px-2">
              Systems & Features
            </div>
            <div className="border-t border-[#E5E2DB] pt-4">
              <div className="grid grid-cols-3 gap-2">
                {allFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                    >
                      <Link
                        href={`/features/${feature.slug}`}
                        onClick={handleFeatureClick}
                      >
                        <motion.div
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F5F2ED] transition-colors cursor-pointer group"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className="w-10 h-10 rounded-lg bg-[#F5F2ED] group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors border border-[#E5E2DB]"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Icon className="w-5 h-5 text-[#555]" />
                          </motion.div>
                          <div className="min-w-0">
                            <p className="font-semibold text-sm text-[#1A1A1A] leading-tight">
                              {feature.title}
                            </p>
                            <p className="text-xs text-[#666] mt-0.5 leading-tight">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Animated Nav Link
const NavLink = ({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) => (
  <motion.span
    className="text-sm text-[#555] hover:text-[#1A1A1A] transition-colors font-medium cursor-pointer relative"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
    <motion.span
      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500"
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.2 }}
    />
  </motion.span>
);

export default function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2.5 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/fog-icon.png"
                  alt="Forge Operating Group"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-[#1A1A1A]">
                  Forge Operating
                </span>
                <motion.span
                  className="text-xs font-semibold text-teal-500 tracking-wide"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  GROUP
                </motion.span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <FeaturesDropdown />
            <AnchorLink href="/#how-it-works">
              <NavLink>How It Works</NavLink>
            </AnchorLink>
            <AnchorLink href="/#testimonials">
              <NavLink>Reviews</NavLink>
            </AnchorLink>
            <AnchorLink href="/#faq">
              <NavLink>FAQ</NavLink>
            </AnchorLink>
            <Link href="/contact">
              <NavLink>Contact</NavLink>
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#555] hover:text-[#1A1A1A] hover:bg-[#E8E4DD] font-medium"
                >
                  Team Login
                </Button>
              </motion.div>
            </Link>
            <AnchorLink href="/#book">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-teal-500 hover:bg-teal-600 text-white shadow-sm font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="absolute inset-0 bg-teal-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </AnchorLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 border-t border-[#E5E2DB] pt-4">
                <div className="flex flex-col gap-4">
                  {[
                    { href: "/#how-it-works", label: "How It Works" },
                    { href: "/#testimonials", label: "Reviews" },
                    { href: "/#faq", label: "FAQ" },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <AnchorLink href={item.href} onClick={closeMobileMenu}>
                        <span className="text-sm text-[#555] hover:text-[#1A1A1A] font-medium">
                          {item.label}
                        </span>
                      </AnchorLink>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <Link href="/contact" onClick={closeMobileMenu}>
                      <span className="text-sm text-[#555] hover:text-[#1A1A1A] font-medium">
                        Contact
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="border-t border-[#E5E2DB] pt-4 mt-2"
                  >
                    <p className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-3">
                      Systems & Features
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {allFeatures.map((feature, idx) => (
                        <motion.div
                          key={feature.slug}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + idx * 0.03 }}
                        >
                          <Link
                            href={`/features/${feature.slug}`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-sm text-[#555] hover:text-[#1A1A1A]">
                              {feature.title}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#E5E2DB]"
                  >
                    <Link href="/login" onClick={closeMobileMenu}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-[#555] border-[#E5E2DB]"
                      >
                        Team Login
                      </Button>
                    </Link>
                    <AnchorLink href="/#book" onClick={closeMobileMenu}>
                      <Button
                        size="sm"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                      >
                        Get Started
                      </Button>
                    </AnchorLink>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
