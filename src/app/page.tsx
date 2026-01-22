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
      <Star
        key={i}
        className={`${size} ${i < filled ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))}
  </div>
);

// Animated counter
const AnimatedNumber = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
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
  <div className="bg-white rounded-2xl border border-[#E8E4DD] shadow-lg overflow-hidden">
    <div className="p-6 border-b border-[#E8E4DD] bg-[#F7F4EF]">
      <h3 className="font-semibold text-lg">Book Your Free Consultation</h3>
      <p className="text-sm text-[#666]">Pick a time that works for you</p>
    </div>
    {/* GHL Calendar Embed */}
    <div className="p-4 min-h-[600px]">
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/hBKZNkdYJIOKUevPGaxf"
        style={{ width: "100%", height: "600px", border: "none", overflow: "hidden" }}
        scrolling="no"
        id="msgsndr-calendar-landing"
        title="Book a Demo"
      />
    </div>
  </div>
);

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen light-landing bg-[#F7F4EF] text-[#1A1A1A]">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-teal-700">
                The Complete AI Marketing System
              </span>
            </div>

            {/* H1 - Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              5-Star Magic
              <span className="block text-teal-500">Review Funnel</span>
            </h1>

            {/* Star Rating Display */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#E8E4DD]">
                <StarRating filled={5} size="w-6 h-6" />
                <span className="text-sm font-medium text-[#666]">
                  Every time.
                </span>
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#666] max-w-2xl mx-auto mb-8 leading-relaxed">
              "Sure I&apos;ll leave you a review", but the truth is people forget. We&apos;ll
              &apos;gently&apos; remind them for a few weeks until they remember.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#book">
                <Button
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 shadow-md hover:shadow-lg transition-all"
                >
                  Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-[#D4D0C8] text-[#1A1A1A] hover:bg-[#E8E4DD] bg-white"
                >
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#666]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["MR", "SC", "JW", "DK"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-teal-100 border-2 border-[#F7F4EF] flex items-center justify-center text-xs font-medium text-teal-700"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span>500+ businesses</span>
              </div>
              <div className="flex items-center gap-1">
                <StarRating filled={5} size="w-4 h-4" />
                <span>4.9 rating</span>
              </div>
              <div className="flex items-center gap-1">
                <BadgeCheck className="w-4 h-4 text-teal-500" />
                <span>No contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - Stone Systems Style */}
      <section id="features" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
              Why It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              You can&apos;t make everyone happy, but our
              <span className="text-teal-500"> magic funnel</span> sure can.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={idx}
                  className="bg-white border-[#E8E4DD] shadow-sm hover:shadow-md transition-all duration-300 card-hover"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[#666] leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-white border-y border-[#E8E4DD]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, suffix: "+", label: "Businesses Powered" },
              { value: 47, suffix: "", label: "Avg New Reviews/Client" },
              { value: 312, suffix: "%", label: "Average ROI" },
              { value: 24, suffix: "/7", label: "AI Working For You" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-bold text-teal-500">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-[#666] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Full System - All 9 Features */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Link key={idx} href={`/features/${feature.slug}`}>
                  <Card className="bg-white border-[#E8E4DD] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                          <Icon className="w-6 h-6 text-teal-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 tracking-tight group-hover:text-teal-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#666]">{feature.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
              Real Results
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Don&apos;t take our word for it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="bg-[#F7F4EF] border-[#E8E4DD] shadow-sm"
              >
                <CardContent className="p-6">
                  <StarRating filled={testimonial.rating} size="w-4 h-4" />
                  <p className="text-[#1A1A1A] mt-4 mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DD]">
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-[#666]">
                        {testimonial.business}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                      {testimonial.result}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Calendar */}
      <section id="book" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: CTA Text */}
            <div className="lg:sticky lg:top-32">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to get more 5-star reviews?
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Book a free 15-minute demo. We&apos;ll show you exactly how the system
                works and map out a custom implementation plan for your business.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span>15-minute call</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span>Custom implementation plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span>See real results from similar businesses</span>
                </div>
              </div>
            </div>

            {/* Right: Calendar Embed */}
            <GHLCalendarEmbed />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                className={`bg-[#F7F4EF] border-[#E8E4DD] cursor-pointer transition-all hover:shadow-sm ${openFaq === idx ? "ring-2 ring-teal-200" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#666] transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openFaq === idx && (
                    <p className="text-sm text-[#666] mt-4 pt-4 border-t border-[#E8E4DD] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
