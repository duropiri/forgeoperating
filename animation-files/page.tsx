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
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
  BlurIn,
  Magnetic,
  Floating,
  GlowPulse,
  HoverCard,
  TextReveal,
  MorphingBg,
  Parallax,
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

// Features for hero cards (subset)
const heroFeatures = [
  {
    icon: Bell,
    title: "Automatic Follow-Up Reminders",
    description:
      '"Sure I\'ll leave you a review", but the truth is people forget. We\'ll \'gently\' remind them for a few weeks until they remember.',
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: ThumbsUp,
    title: "Ask For Reviews In One Click",
    description:
      "As promised, we keep it simple. If you're confused, we're fired and extremely embarrassed.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Shield,
    title: "Stop worrying about bad reviews",
    description:
      "Unsure if you should ask for a review? We'll take the guesswork out by guiding your customer to leave a 5-star review!",
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

// FAQ data
const faqs = [
  {
    question: "How is this different from other marketing agencies?",
    answer:
      "We don't sell 'marketing services'. We install a complete system that works 24/7. No monthly retainers for 'strategy calls'. Just a machine that generates customers on autopilot.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most clients see their first new leads within 48 hours. The review system typically generates 5-10 new reviews in the first month. Full ROI is usually achieved within 60-90 days.",
  },
  {
    question: "Do I need to be tech-savvy?",
    answer:
      "Not at all. We handle 100% of the setup. If you can send a text message, you can use this. Plus, our AI handles most customer interactions automatically.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Great! We can integrate our systems with your existing site, or build you a new high-converting one. Either way, the automation layer works the same.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No long-term contracts. Month-to-month because we're confident you'll stay once you see the results. Most clients have been with us for 2+ years.",
  },
];

// GHL Calendar Embed Component
const GHLCalendarEmbed = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl border border-[#E8E4DD] shadow-lg overflow-hidden"
  >
    <div className="p-6 border-b border-[#E8E4DD] bg-[#F7F4EF]">
      <h3 className="font-semibold text-lg">Book Your Free Consultation</h3>
      <p className="text-sm text-[#666]">Pick a time that works for you</p>
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
      <Card className="bg-white border-[#E8E4DD] shadow-sm hover:shadow-xl transition-all duration-500 h-full group">
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
          <p className="text-[#666] leading-relaxed">
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
          <Card className="bg-white border-[#E8E4DD] shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer h-full overflow-hidden relative">
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
              <p className="text-sm text-[#666]">{feature.description}</p>
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
    <Card className="bg-[#F7F4EF] border-[#E8E4DD] shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="p-6">
        <StarRating filled={testimonial.rating} size="w-4 h-4" />
        <p className="text-[#1A1A1A] mt-4 mb-6 leading-relaxed">
          &quot;{testimonial.quote}&quot;
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DD]">
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            <p className="text-xs text-[#666]">{testimonial.business}</p>
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
      className={`bg-[#F7F4EF] border-[#E8E4DD] cursor-pointer transition-all hover:shadow-sm ${isOpen ? "ring-2 ring-teal-200" : ""}`}
      onClick={onClick}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-medium pr-4">{faq.question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-[#666] flex-shrink-0" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-[#666] mt-4 pt-4 border-t border-[#E8E4DD] leading-relaxed overflow-hidden"
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
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen light-landing bg-[#F7F4EF] text-[#1A1A1A] overflow-hidden">
      {/* Animated Background Gradient */}
      <MorphingBg className="fixed" />
      
      <PublicNavbar />

      {/* Hero Section */}
      <motion.section
        className="pt-28 pb-16 px-6 relative"
        style={{ opacity: heroOpacity }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            style={{ scale: heroScale }}
          >
            {/* Badge */}
            <FadeIn delay={0.1}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-4 h-4 text-teal-500" />
                </motion.div>
                <span className="text-sm font-medium text-teal-700">
                  The Complete AI Marketing System
                </span>
              </motion.div>
            </FadeIn>

            {/* H1 - Main Headline */}
            <BlurIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                5-Star Magic
                <motion.span
                  className="block text-teal-500"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(20, 184, 166, 0)",
                      "0 0 40px rgba(20, 184, 166, 0.3)",
                      "0 0 20px rgba(20, 184, 166, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Review Funnel
                </motion.span>
              </h1>
            </BlurIn>

            {/* Star Rating Display */}
            <FadeIn delay={0.4}>
              <div className="flex justify-center mb-6">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#E8E4DD]"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <StarRating filled={5} size="w-6 h-6" />
                  <span className="text-sm font-medium text-[#666]">
                    Every time.
                  </span>
                </motion.div>
              </div>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl text-[#666] max-w-2xl mx-auto mb-8 leading-relaxed">
                "Sure I&apos;ll leave you a review", but the truth is people forget. We&apos;ll
                &apos;gently&apos; remind them for a few weeks until they remember.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Magnetic strength={0.2}>
                  <a href="#book">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <GlowPulse>
                        <Button
                          size="lg"
                          className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 shadow-md hover:shadow-lg transition-all"
                        >
                          Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
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
                        className="text-lg px-8 border-[#D4D0C8] text-[#1A1A1A] hover:bg-[#E8E4DD] bg-white"
                      >
                        See How It Works
                      </Button>
                    </motion.div>
                  </a>
                </Magnetic>
              </div>
            </FadeIn>

            {/* Social Proof */}
            <FadeIn delay={0.7}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#666]">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex -space-x-2">
                    {["MR", "SC", "JW", "DK"].map((initials, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="w-8 h-8 rounded-full bg-teal-100 border-2 border-[#F7F4EF] flex items-center justify-center text-xs font-medium text-teal-700"
                      >
                        {initials}
                      </motion.div>
                    ))}
                  </div>
                  <span>500+ businesses</span>
                </motion.div>
                <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                  <StarRating filled={5} size="w-4 h-4" />
                  <span>4.9 rating</span>
                </motion.div>
                <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                  <BadgeCheck className="w-4 h-4 text-teal-500" />
                  <span>No contracts</span>
                </motion.div>
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature Cards - Stone Systems Style */}
      <section id="features" className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <motion.p
                className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why It Works
              </motion.p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                You can&apos;t make everyone happy, but our
                <span className="text-teal-500"> magic funnel</span> sure can.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroFeatures.map((feature, idx) => (
              <AnimatedFeatureCard key={idx} feature={feature} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-white border-y border-[#E8E4DD] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-500/5"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
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
                  <p className="text-sm text-[#666] mt-1">{stat.label}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Full System - All 9 Features */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                The Complete System
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Nine revenue engines.
                <span className="text-teal-500"> One system.</span>
              </h2>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">
                The review funnel is just the start. Here&apos;s everything that works
                together to turn your business into a customer-generating machine.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, idx) => (
              <AnimatedAllFeaturesCard key={idx} feature={feature} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                Real Results
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Don&apos;t take our word for it.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <AnimatedTestimonialCard key={idx} testimonial={testimonial} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Calendar */}
      <section id="book" className="py-20 px-6">
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
                Ready to get more 5-star reviews?
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Book a free 15-minute demo. We&apos;ll show you exactly how the system
                works and map out a custom implementation plan for your business.
              </p>

              <StaggerContainer staggerDelay={0.1}>
                {[
                  "No commitment required",
                  "15-minute call",
                  "Custom implementation plan",
                  "See real results from similar businesses",
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Common questions
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
