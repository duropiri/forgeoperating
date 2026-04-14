"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PublicNavbar from "@/components/layouts/PublicNavbar";
import PublicFooter from "@/components/layouts/PublicFooter";
import Link from "next/link";
import {
  Star,
  Globe,
  Phone,
  Mail,
  Shield,
  CheckCircle2,
  ChevronDown,
  Calendar,
  ArrowRight,
  Sparkles,
  Bell,
  ThumbsUp,
  RefreshCw,
  BadgeCheck,
  Inbox,
  Smartphone,
  Search,
  MousePointer,
  MapPin,
  Zap,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
  BlurIn,
  Magnetic,
  Floating,
  GlowPulse,
  MorphingBg,
} from "@/components/animations";

// Star rating component
const StarRating = ({
  count = 5,
  filled = 5,
  size = "w-5 h-5",
}: {
  count?: number;
  filled?: number;
  size?: string;
}) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1, duration: 0.3 }}
      >
        <Star
          className={`${size} ${i < filled ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
        />
      </motion.div>
    ))}
  </div>
);

// Animated counter with scroll trigger
const AnimatedNumber = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

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

// Features for review gap cards (subset)
const heroFeatures = [
  {
    icon: Bell,
    title: "Automatic Follow-Up Reminders",
    description:
      "People say they'll leave a review and then forget. Every time. We'll gently remind them for weeks until they remember.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: ThumbsUp,
    title: "One-Click Review Requests",
    description:
      "Send a review request in one click. If you're confused, we're fired.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Shield,
    title: "Bad Review Prevention",
    description:
      "Unhappy customer? The system catches them before they hit Google and routes them to you privately.",
    color: "bg-blue-50 text-blue-600",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Mike R.",
    business: "Rodriguez Plumbing",
    quote:
      "We went from 3.2 to 4.8 stars in 60 days. The review system alone paid for itself 10x over.",
    rating: 5,
    result: "+47 reviews",
  },
  {
    name: "Sarah C.",
    business: "Bright Smile Dental",
    quote:
      "The AI bot books 30% of our appointments now. My front desk can finally focus on patients.",
    rating: 5,
    result: "+$18k/mo",
  },
  {
    name: "James W.",
    business: "Wilson HVAC",
    quote:
      "I was skeptical, but the missed call text back alone saved 12 jobs last month.",
    rating: 5,
    result: "12 saved leads",
  },
];

// FAQ data — mapped from Offer Brief objections
const faqs = [
  {
    question: "I've been burned by agencies before",
    answer:
      "We're not an agency. We install infrastructure in your business. There's no retainer for 'strategy calls.' Just a system that works 24/7. Plus: 20 reviews in 60 days or we work free. No contracts.",
  },
  {
    question: "I'm not tech-savvy",
    answer:
      "You don't need to be. We handle 100% of the setup, configuration, and management. If you can answer your phone, you can use this. Actually \u2014 the AI answers your phone for you, so you don't even need to do that.",
  },
  {
    question: "Can't I just do this myself with GoHighLevel?",
    answer:
      "You could buy GHL for $97/month. Then spend 60+ hours learning to configure it, deal with hidden fees, and troubleshoot broken email deliverability on your own. Or we install a fully configured, proven system in 72 hours. Your call.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You keep the website. Unlike competitors who lock you into proprietary systems, your web presence stays yours. The AI automations turn off when you stop paying, but you walk away with your digital assets.",
  },
  {
    question: "How do I know it'll work for my business?",
    answer:
      "We guarantee 20 reviews in 60 days or we work free. 500+ businesses across plumbing, HVAC, dental, and med spa verticals have used this system. Book a demo and we'll show you results from businesses like yours.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. Month-to-month. Every major competitor locks you into 6-24 month contracts. We don't. Stay because it works, not because you're trapped.",
  },
  {
    question: "Will customers know it's AI?",
    answer:
      "No. Modern AI is conversationally fluent \u2014 customers just know that someone answered on the first ring and handled their request professionally. That's all they care about.",
  },
];

// Comparison table data — Section 4
const comparisonData = {
  features: [
    "Contract Required",
    "Done-For-You Setup",
    "AI Receptionist",
    "Results Guarantee",
    "Keep Your Data",
  ],
  companies: [
    {
      name: "Forge",
      highlight: true,
      values: [
        "None",
        "Yes, 72 hours",
        "Yes",
        "20 reviews / 60 days",
        "Yes",
      ],
    },
    {
      name: "Scorpion",
      highlight: false,
      values: ["12-24 months", "Yes, weeks/months", "No", "No", "No"],
    },
    {
      name: "Podium",
      highlight: false,
      values: ["Varies", "Partial", "No", "No", "Varies"],
    },
    {
      name: "GHL (DIY)",
      highlight: false,
      values: ["None", "No (DIY)", "Config yourself", "No", "Yes"],
    },
    {
      name: "Thryv",
      highlight: false,
      values: ["6+ months", "Partial", "No", "No", "Unknown"],
    },
  ],
};

// AI Employee capabilities — Section 6
const aiCapabilities = [
  {
    icon: Phone,
    title: "Answers every call",
    description: "First ring. Every time. Even at 2 AM.",
  },
  {
    icon: Smartphone,
    title: "Texts back missed calls",
    description: "In seconds, not hours. Before they call your competitor.",
  },
  {
    icon: Calendar,
    title: "Books appointments",
    description: "Automatically. No back-and-forth. No phone tag.",
  },
  {
    icon: Star,
    title: "Collects reviews",
    description: "After every job, without you asking. 5 stars on autopilot.",
  },
  {
    icon: RefreshCw,
    title: "Follows up with leads",
    description: "For weeks. Automatically. Until they book or say no.",
  },
];

// Guarantee pillars — Section 7
const guaranteePillars = [
  {
    icon: Shield,
    title: "Guaranteed Results",
    description:
      "20 new 5-star reviews in your first 60 days, or we continue working for free until you hit it.",
  },
  {
    icon: BadgeCheck,
    title: "No Contracts",
    description:
      "Month-to-month. Stay because it works, not because you're trapped. Cancel anytime.",
  },
  {
    icon: MapPin,
    title: "One Per Zip Code",
    description:
      "We only work with one business per zip code to protect your competitive advantage. Check if your area is available.",
  },
];

// GHL Calendar Embed Component
const GHLCalendarEmbed = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl border border-[#D1D5DB] shadow-lg overflow-hidden"
  >
    <div className="p-6 border-b border-[#D1D5DB] bg-white">
      <h3 className="font-semibold text-lg">Book Your Free Consultation</h3>
      <p className="text-sm text-[#3B3B3B]">Pick a time that works for you</p>
    </div>
    <div className="p-4">
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/hBKZNkdYJIOKUevPGaxf"
        style={{ width: "100%", height: "800px", border: "none" }}
        id="msgsndr-calendar-landing"
        title="Book a Demo"
      />
    </div>
  </motion.div>
);

// Animated Feature Card
const AnimatedFeatureCard = ({ feature, idx }: { feature: typeof heroFeatures[0]; idx: number }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className="bg-white border-[#D1D5DB] shadow-sm hover:shadow-xl transition-all duration-500 h-full group">
        <CardContent className="p-8">
          <motion.div
            className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon className="w-7 h-7" />
          </motion.div>
          <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-teal-600 transition-colors">
            {feature.title}
          </h3>
          <p className="text-[#3B3B3B] leading-relaxed">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Animated All Features Card
const AnimatedAllFeaturesCard = ({ feature, idx }: { feature: typeof allFeatures[0]; idx: number }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      viewport={{ once: true, margin: "-30px" }}
    >
      <Link href={`/features/${feature.slug}`}>
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white border-[#D1D5DB] shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer h-full overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-teal-600" />
                </motion.div>
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight group-hover:text-teal-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-[#3B3B3B]">{feature.description}</p>
              <motion.div
                className="mt-4 flex items-center text-sm font-medium text-teal-600"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ x: 5 }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 inline" />
                </span>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
};

// Animated Testimonial Card
const AnimatedTestimonialCard = ({ testimonial, idx }: { testimonial: typeof testimonials[0]; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotateX: 10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -5 }}
  >
    <Card className="bg-white border-[#D1D5DB] shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="p-6">
        <StarRating filled={testimonial.rating} size="w-4 h-4" />
        <p className="text-[#0A0A0A] mt-4 mb-6 leading-relaxed">
          &quot;{testimonial.quote}&quot;
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-[#D1D5DB]">
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            <p className="text-xs text-[#3B3B3B]">{testimonial.business}</p>
          </div>
          <motion.span
            className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            {testimonial.result}
          </motion.span>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Animated FAQ Item
const AnimatedFaqItem = ({ faq, idx, isOpen, onClick }: { faq: typeof faqs[0]; idx: number; isOpen: boolean; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: idx * 0.1 }}
    viewport={{ once: true }}
  >
    <Card
      className={`cursor-pointer transition-all duration-300 ${isOpen ? "bg-teal-500 text-white border-teal-500 shadow-md" : "bg-white border-[#D1D5DB] hover:shadow-sm"}`}
      onClick={onClick}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <h3 className={`font-medium pr-4 ${isOpen ? "text-white" : ""}`}>{faq.question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className={`w-5 h-5 flex-shrink-0 ${isOpen ? "text-white" : "text-[#3B3B3B]"}`} />
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-sm mt-4 pt-4 border-t leading-relaxed overflow-hidden ${isOpen ? "text-white/90 border-white/20" : "text-[#3B3B3B] border-[#D1D5DB]"}`}
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen light-landing bg-white text-[#0A0A0A] overflow-hidden">
      {/* Animated Background Gradient */}
      <MorphingBg className="fixed" />

      <PublicNavbar />

      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* H1 - What we do + who it's for */}
            <BlurIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-8 tracking-tight">
                AI-Powered Marketing Systems
                <span className="block text-teal-500 mt-1">
                  For Contractors, Dentists &amp; Local Businesses
                </span>
              </h1>
            </BlurIn>

            {/* Honest subheadline — Stone Systems style */}
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-[#3B3B3B] max-w-2xl mx-auto mb-10 leading-relaxed">
                Cut the bullsh*t. No agency (including ours) has the miracle
                solution to all your problems. But we will install a system that
                answers your phone, gets you reviews, and follows up with every
                lead &mdash; so you can focus on the work you&apos;re actually good at.
              </p>
            </FadeIn>

            {/* Single CTA */}
            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                <Magnetic strength={0.2}>
                  <a href="#book">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <GlowPulse>
                        <Button
                          size="lg"
                          className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-10 py-6 shadow-md hover:shadow-lg transition-all"
                        >
                          Book A Call <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </GlowPulse>
                    </motion.div>
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a href="#how-it-works">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-10 py-6 border-[#D1D5DB] text-[#0A0A0A] hover:bg-gray-100 bg-white"
                      >
                        See What You Get
                      </Button>
                    </motion.div>
                  </a>
                </Magnetic>
              </div>
            </FadeIn>

            {/* Social Proof — simple, no animation overkill */}
            <FadeIn delay={0.6}>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-[#3B3B3B]">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["MR", "SC", "JW", "DK"].map((initials, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-xs font-medium text-teal-700"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span>500+ businesses</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <StarRating filled={5} size="w-4 h-4" />
                  <span>4.9 rating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-teal-500" />
                  <span>No contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-teal-500" />
                  <span>Results guaranteed</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-10 px-6 border-y border-[#D1D5DB]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-center text-sm font-medium text-[#3B3B3B] mb-6">
              Built on the same tools used by 500+ local businesses
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {[
                { name: "Google", text: "Google" },
                { name: "GoHighLevel", text: "GoHighLevel" },
                { name: "Twilio", text: "Twilio" },
                { name: "Zapier", text: "Zapier" },
                { name: "OpenAI", text: "OpenAI" },
              ].map((partner) => (
                <span
                  key={partner.name}
                  className="text-xl md:text-2xl font-bold tracking-tight text-[#0A0A0A]"
                >
                  {partner.text}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: The Problem — Speed Wins (Belief #1) */}
      <section className="py-16 px-6 relative bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <motion.p
                className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Sound Familiar?
              </motion.p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                You missed 3 calls on the job today.
                <span className="block text-teal-500">
                  That&apos;s $120,000 a year.
                </span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { value: 85, suffix: "%", label: "of your callers hang up on voicemail and call the next guy" },
              { value: 62, suffix: "%", label: "of calls missed while you\u2019re actually working" },
              { prefix: "$", value: 120, suffix: "K", label: "walking out the door every year from missed calls" },
            ].map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <Card className="bg-white border-[#D1D5DB] shadow-sm text-center h-full">
                  <CardContent className="p-8">
                    <p className="text-4xl md:text-5xl font-bold text-teal-500 mb-3">
                      {stat.prefix || ""}
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-[#3B3B3B] leading-relaxed">{stat.label}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="text-center text-lg text-[#3B3B3B] italic">
              &ldquo;I was working 60-hour weeks and wondering why I wasn&apos;t growing. Turns out I was just missing the phone.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: The Review Gap — Hook Deepened */}
      <section id="features" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <motion.p
                className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Review Problem
              </motion.p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                People say they&apos;ll leave you a review.
                <span className="text-teal-500"> They never do.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {heroFeatures.map((feature, idx) => (
              <AnimatedFeatureCard key={idx} feature={feature} idx={idx} />
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="text-center text-lg text-[#3B3B3B] max-w-2xl mx-auto">
              Businesses with 100+ reviews get 25% more calls. Your competitor adds 10 a month. You add 3. We fix that.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Value Props Strip */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "No Bullsh*t", desc: "We\u2019re not going to sell you a dream. Here\u2019s what the system does. Here\u2019s what it costs. That\u2019s it." },
              { icon: Clock, title: "Installed in 72 Hours", desc: "You say yes on Monday, you\u2019re live by Thursday. Not \u201cin a few weeks.\u201d Thursday." },
              { icon: BadgeCheck, title: "No Contracts", desc: "If it\u2019s working, you\u2019ll stay. If it\u2019s not, you leave. We don\u2019t need a contract to keep you." },
              { icon: Shield, title: "Guaranteed Results", desc: "20 reviews in 60 days or we keep working for free. We put our money where our mouth is." },
              { icon: HeartHandshake, title: "Done For You", desc: "You didn\u2019t start this business to learn marketing software. So you won\u2019t have to." },
              { icon: RefreshCw, title: "Constant Improvements", desc: "We don\u2019t set it and forget it like your last agency did. We keep making it better." },
            ].map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.08}>
                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-500 text-white flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm tracking-tight mb-1">{prop.title}</h3>
                      <p className="text-xs text-[#3B3B3B] leading-relaxed">{prop.desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Not Agency — Differentiation (Belief #3) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                If You&apos;ve Been Burned Before
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                &ldquo;I paid an agency $2,000 a month and got nothing.&rdquo;
                <span className="text-teal-500"> We hear that every single day.</span>
              </h2>
              <p className="text-lg text-[#3B3B3B] max-w-2xl mx-auto">
                That&apos;s why we don&apos;t work like an agency. We install a system in your business. It runs whether we&apos;re here or not. And we guarantee results.
              </p>
            </div>
          </FadeIn>

          {/* Desktop comparison table */}
          <FadeIn delay={0.2}>
            <div className="hidden md:block overflow-x-auto">
              <Card className="bg-white border-[#D1D5DB] shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#D1D5DB]">
                        <th className="text-left p-4 font-medium text-[#3B3B3B]" />
                        {comparisonData.companies.map((company) => (
                          <th
                            key={company.name}
                            className={`p-4 font-semibold text-center ${
                              company.highlight
                                ? "bg-teal-50 text-teal-700 text-base"
                                : "text-[#3B3B3B]"
                            }`}
                          >
                            {company.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.features.map((feature, fIdx) => (
                        <tr
                          key={feature}
                          className={fIdx < comparisonData.features.length - 1 ? "border-b border-[#D1D5DB]" : ""}
                        >
                          <td className="p-4 font-medium">{feature}</td>
                          {comparisonData.companies.map((company) => {
                            const val = company.values[fIdx];
                            const isPositive =
                              val === "Yes" ||
                              val.startsWith("Yes,") ||
                              val === "None" ||
                              val.startsWith("20 reviews");
                            const isNegative = val === "No" || val === "Unknown";
                            return (
                              <td
                                key={company.name}
                                className={`p-4 text-center ${
                                  company.highlight ? "bg-teal-50" : ""
                                } ${isPositive ? "text-teal-600 font-medium" : ""} ${
                                  isNegative ? "text-red-400" : ""
                                }`}
                              >
                                {val}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Mobile: FOG-only highlights */}
          <FadeIn delay={0.2}>
            <div className="md:hidden space-y-4">
              {comparisonData.features.map((feature, idx) => (
                <Card key={idx} className="bg-white border-[#D1D5DB] shadow-sm">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium text-sm">{feature}</span>
                    <span className="text-sm font-medium text-teal-600">
                      {comparisonData.companies[0].values[idx]}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-center text-lg text-[#3B3B3B] mt-8 italic">
              &ldquo;Marketing people are all the same &mdash; they take your money and disappear.&rdquo; We built Forge so you&apos;d never have to say that again.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Zero Effort — The Full System (Belief #6) */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                What You Actually Get
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                &ldquo;I just need the phone to ring.&rdquo;
              </h2>
              <p className="text-lg text-[#3B3B3B] max-w-2xl mx-auto">
                Here&apos;s everything we install to make that happen. All of it. In 72 hours.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, idx) => (
              <AnimatedAllFeaturesCard key={idx} feature={feature} idx={idx} />
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="text-center text-lg text-[#3B3B3B] mt-12 max-w-2xl mx-auto italic">
              &ldquo;I didn&apos;t start this business to do marketing. I started it because I&apos;m the best at what I do.&rdquo; Exactly. So let the system handle the rest.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 6: AI Employee — The Mechanism (Belief #2) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Headline + closing (sticky on desktop) */}
            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                What if someone answered every call &mdash; even at 2 AM, even when you&apos;re on a job &mdash; and your customers never knew the difference?
              </h2>
              <p className="text-lg text-[#3B3B3B] leading-relaxed italic hidden lg:block">
                They just know someone picked up on the first ring. That&apos;s all they care about.
              </p>
            </motion.div>

            {/* Right: Staggered capability list */}
            <StaggerContainer staggerDelay={0.15}>
              {aiCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <StaggerItem key={idx}>
                    <motion.div
                      className="flex items-start gap-4 mb-6"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-6 h-6 text-teal-600" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold tracking-tight mb-1">
                          {cap.title}
                        </h3>
                        <p className="text-[#3B3B3B] text-sm">{cap.description}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Mobile closing line */}
            <FadeIn className="lg:hidden">
              <p className="text-lg text-[#3B3B3B] leading-relaxed italic">
                They just know someone picked up on the first ring. That&apos;s all they care about.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 7: Zero Risk — Guarantee (Belief #5) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                The Guarantee
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                &ldquo;I need something that actually works this time.&rdquo;
              </h2>
              <p className="text-lg text-[#3B3B3B] max-w-2xl mx-auto mt-4">So do we. 20 reviews in 60 days or we work free.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guaranteePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.15}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="bg-white border-[#D1D5DB] shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <CardContent className="p-8 text-center">
                        <ScaleIn delay={0.2 + idx * 0.1}>
                          <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-6">
                            <Icon className="w-7 h-7" />
                          </div>
                        </ScaleIn>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-[#3B3B3B] leading-relaxed">
                          {pillar.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials — Proven Results (Belief #4) */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                Proof
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                We could tell you it works. But you&apos;ve heard that before.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, idx) => (
              <AnimatedTestimonialCard key={idx} testimonial={testimonial} idx={idx} />
            ))}
          </div>

          {/* Stats Bar — moved here from old position */}
          <div className="py-8 px-6 bg-white rounded-2xl border border-[#D1D5DB] shadow-sm relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-500/5"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: 500, suffix: "+", label: "Businesses Powered" },
                  { value: 47, suffix: "", label: "Avg New Reviews/Client" },
                  { value: 312, suffix: "%", label: "Average ROI" },
                  { value: 24, suffix: "/7", label: "AI Working For You" },
                ].map((stat, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <p className="text-3xl md:text-4xl font-bold text-teal-500">
                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-sm text-[#3B3B3B] mt-1">{stat.label}</p>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: CTA + Calendar */}
      <section id="book" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: CTA Text */}
            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <Floating duration={4} distance={5}>
                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-teal-600" />
                </div>
              </Floating>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to see if it works for you?
              </h2>
              <p className="text-lg text-[#3B3B3B] mb-8 leading-relaxed">
                15 minutes. We&apos;ll show you the system, answer your questions, and tell you straight up if we think it&apos;s a fit. No pressure, no pitch.
              </p>

              <StaggerContainer staggerDelay={0.1}>
                {[
                  "No commitment, no credit card",
                  "15-minute call \u2014 that\u2019s it",
                  "We\u2019ll check if your zip code is open",
                  "You\u2019ll know exactly what you\u2019re getting",
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      className="flex items-center gap-3 mb-4"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                      </motion.div>
                      <span>{item}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>

            {/* Right: Calendar Embed */}
            <GHLCalendarEmbed />
          </div>
        </div>
      </section>

      {/* Section 10: FAQ — Objection Handling */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                Stuff People Ask Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Before you book, you probably want to know...
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <AnimatedFaqItem
                key={idx}
                faq={faq}
                idx={idx}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
