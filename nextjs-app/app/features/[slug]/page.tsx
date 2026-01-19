"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
import { 
  Star,
  Phone,
  Globe,
  Mail,
  CheckCircle2,
  ChevronDown,
  Calendar,
  ArrowRight,
  Play,
  RefreshCw,
  Inbox,
  Smartphone,
  Search,
  MousePointer,
  Zap,
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Feature data with full content for each feature page
const featuresData: Record<string, {
  title: string;
  headline: string;
  subheadline: string;
  icon: any;
  color: string;
  videoPlaceholder: string;
  benefits: { icon: any; title: string; description: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  testimonial: { name: string; business: string; quote: string; result: string };
  metaTitle: string;
  metaDescription: string;
}> = {
  "functional-website": {
    title: "Functional Website",
    headline: "A Website That Actually Gets You Customers",
    subheadline: "Not just pretty pixels. A lead-generating machine built to convert visitors into booked appointments.",
    icon: Globe,
    color: "teal",
    videoPlaceholder: "Watch how we build your website in 48 hours",
    benefits: [
      { icon: Zap, title: "Built in 48 Hours", description: "No more waiting months. Your site goes live in 2 days." },
      { icon: Phone, title: "Mobile-First Design", description: "70% of your customers are on phones. We design for that first." },
      { icon: TrendingUp, title: "Conversion Optimized", description: "Every element placed strategically to turn visitors into leads." },
      { icon: Shield, title: "SEO Foundation", description: "Built with search engines in mind from day one." }
    ],
    howItWorks: [
      { step: 1, title: "Discovery Call", description: "15 minutes to understand your business and goals" },
      { step: 2, title: "AI-Powered Build", description: "Our system generates your custom site in hours" },
      { step: 3, title: "Review & Refine", description: "You review, we adjust until it's perfect" },
      { step: 4, title: "Go Live", description: "Launch and start getting leads immediately" }
    ],
    stats: [
      { value: "48hr", label: "Average Build Time" },
      { value: "3.2x", label: "More Leads vs Old Sites" },
      { value: "94%", label: "Client Satisfaction" }
    ],
    faqs: [
      { question: "What if I already have a website?", answer: "We can either integrate our systems with your existing site or build you a new one. Either way, you get the full automation layer." },
      { question: "Do I own the website?", answer: "Yes, 100%. It's your site, your domain, your content. We just build and optimize it for you." },
      { question: "What about hosting?", answer: "Included. Fast, secure hosting with SSL certificate and daily backups." }
    ],
    testimonial: { name: "David K.", business: "Premier Roofing", quote: "Our old site got maybe 2 leads a month. The new one? 15-20. Same traffic, completely different results.", result: "+650% leads" },
    metaTitle: "Functional Website | ForgeOS - Lead-Generating Websites for Local Businesses",
    metaDescription: "Get a professional, conversion-optimized website built in 48 hours. Mobile-first design, SEO foundation, and built to turn visitors into customers."
  },
  "missed-call-text-back": {
    title: "Missed Call Text Back",
    headline: "Never Lose a Lead to a Missed Call Again",
    subheadline: "When you can't answer, we automatically text them back within seconds. Because 85% of callers won't leave a voicemail.",
    icon: Phone,
    color: "blue",
    videoPlaceholder: "See the missed call text back in action",
    benefits: [
      { icon: Clock, title: "Instant Response", description: "Text sent within 30 seconds of the missed call." },
      { icon: TrendingUp, title: "Save Lost Leads", description: "Recover up to 40% of calls that would have gone to competitors." },
      { icon: Zap, title: "24/7 Coverage", description: "Works nights, weekends, holidays. Never miss an opportunity." },
      { icon: Shield, title: "Professional Image", description: "Customers feel valued, not ignored." }
    ],
    howItWorks: [
      { step: 1, title: "Call Comes In", description: "Customer calls your business number" },
      { step: 2, title: "You're Busy", description: "Can't answer? No problem." },
      { step: 3, title: "Auto Text Sent", description: "Within 30 seconds, they get a personalized text" },
      { step: 4, title: "Conversation Starts", description: "They reply, you engage when ready" }
    ],
    stats: [
      { value: "30sec", label: "Response Time" },
      { value: "40%", label: "Lead Recovery Rate" },
      { value: "12+", label: "Avg Saved Leads/Month" }
    ],
    faqs: [
      { question: "What does the text say?", answer: "Fully customizable. Usually something like: 'Hey! Sorry I missed your call. How can I help you today?' Simple, personal, effective." },
      { question: "Does it work with my current phone?", answer: "Yes. We set up a business number that forwards to your phone. Missed calls trigger the auto-text." },
      { question: "Can I customize when it sends?", answer: "Absolutely. Set business hours, holidays, or specific conditions for when texts go out." }
    ],
    testimonial: { name: "James W.", business: "Wilson HVAC", quote: "I was skeptical, but the missed call text back alone saved 12 jobs last month. That's $15k in revenue I would have lost.", result: "12 saved leads" },
    metaTitle: "Missed Call Text Back | ForgeOS - Never Lose a Lead Again",
    metaDescription: "Automatically text back missed calls within 30 seconds. Recover up to 40% of lost leads and never let a customer go to your competitor."
  },
  "all-in-one-inbox": {
    title: "All-In-One Inbox",
    headline: "Every Message. One Place.",
    subheadline: "Facebook, Instagram, Google, SMS, Email, Website Chat — all in one unified inbox. Stop tab-switching, start closing.",
    icon: Inbox,
    color: "purple",
    videoPlaceholder: "See the unified inbox in action",
    benefits: [
      { icon: Inbox, title: "Unified Messages", description: "Every platform, every message, one dashboard." },
      { icon: Clock, title: "Faster Response", description: "No more checking 5 different apps. Respond in seconds." },
      { icon: TrendingUp, title: "Never Miss a Lead", description: "All conversations tracked and organized automatically." },
      { icon: Zap, title: "Team Collaboration", description: "Assign conversations, add notes, work together seamlessly." }
    ],
    howItWorks: [
      { step: 1, title: "Connect Channels", description: "Link your Facebook, Instagram, Google, and more" },
      { step: 2, title: "Messages Flow In", description: "All conversations appear in one unified inbox" },
      { step: 3, title: "Respond Anywhere", description: "Reply from desktop or mobile app" },
      { step: 4, title: "Track Everything", description: "Full conversation history, notes, and follow-ups" }
    ],
    stats: [
      { value: "6+", label: "Channels Unified" },
      { value: "73%", label: "Faster Response Time" },
      { value: "0", label: "Missed Messages" }
    ],
    faqs: [
      { question: "Which platforms does it support?", answer: "Facebook Messenger, Instagram DMs, Google Business Messages, SMS, Email, Website Chat, and WhatsApp." },
      { question: "Can my team use it?", answer: "Yes! Add unlimited team members, assign conversations, and collaborate with internal notes." },
      { question: "Is there a mobile app?", answer: "Yes, full-featured iOS and Android apps so you can respond from anywhere." }
    ],
    testimonial: { name: "Lisa M.", business: "Bella Salon", quote: "I used to spend an hour every morning checking all my messages. Now it takes 10 minutes. Game changer.", result: "5hrs saved/week" },
    metaTitle: "All-In-One Inbox | ForgeOS - Unified Messaging for Local Businesses",
    metaDescription: "Combine Facebook, Instagram, Google, SMS, Email, and Website Chat into one inbox. Respond faster, never miss a lead, and close more deals."
  },
  "business-phone": {
    title: "Business Phone",
    headline: "Separate Business From Personal. Finally.",
    subheadline: "A dedicated business line on your existing phone. Professional voicemail, call tracking, and no more giving out your personal number.",
    icon: Smartphone,
    color: "green",
    videoPlaceholder: "See the business phone system in action",
    benefits: [
      { icon: Smartphone, title: "One Phone, Two Numbers", description: "Business calls on your personal phone, completely separate." },
      { icon: Shield, title: "Professional Image", description: "Custom voicemail, business caller ID, professional presence." },
      { icon: TrendingUp, title: "Call Tracking", description: "See which marketing channels drive calls." },
      { icon: Clock, title: "Business Hours", description: "Set when calls go through vs. straight to voicemail." }
    ],
    howItWorks: [
      { step: 1, title: "Get Your Number", description: "Choose a local or toll-free business number" },
      { step: 2, title: "Install App", description: "Download our app on your existing phone" },
      { step: 3, title: "Set Preferences", description: "Configure hours, voicemail, and routing" },
      { step: 4, title: "Start Using", description: "Make and receive business calls professionally" }
    ],
    stats: [
      { value: "100%", label: "Privacy Protected" },
      { value: "24/7", label: "Availability Options" },
      { value: "$0", label: "Extra Hardware Needed" }
    ],
    faqs: [
      { question: "Do I need a second phone?", answer: "No! The business line works through an app on your existing smartphone." },
      { question: "Can customers tell it's not a landline?", answer: "No. It looks and works like any professional business line. Local number, professional voicemail, the works." },
      { question: "What about call recording?", answer: "Available and compliant. Great for training and quality assurance." }
    ],
    testimonial: { name: "Tom R.", business: "TR Electric", quote: "Finally stopped giving out my personal cell. Now I can actually disconnect on weekends without missing business.", result: "Work-life balance" },
    metaTitle: "Business Phone | ForgeOS - Professional Business Line on Your Phone",
    metaDescription: "Get a dedicated business phone number on your existing smartphone. Professional voicemail, call tracking, and complete separation from personal calls."
  },
  "local-seo": {
    title: "Local SEO",
    headline: "Actually Get Found on Google",
    subheadline: "When someone searches 'plumber near me', you should show up. We make that happen with proven local SEO strategies.",
    icon: Search,
    color: "orange",
    videoPlaceholder: "See how we boost your Google rankings",
    benefits: [
      { icon: Search, title: "Google Business Optimization", description: "Your profile fully optimized for local searches." },
      { icon: Star, title: "Review Strategy", description: "More reviews = higher rankings. We help you get both." },
      { icon: TrendingUp, title: "Citation Building", description: "Listed correctly across 50+ directories." },
      { icon: Zap, title: "Monthly Reporting", description: "See exactly where you rank and how you're improving." }
    ],
    howItWorks: [
      { step: 1, title: "SEO Audit", description: "We analyze your current online presence" },
      { step: 2, title: "Optimization", description: "Fix issues and optimize your Google Business Profile" },
      { step: 3, title: "Citation Building", description: "Get listed on 50+ relevant directories" },
      { step: 4, title: "Ongoing Growth", description: "Monthly improvements and ranking reports" }
    ],
    stats: [
      { value: "50+", label: "Directory Listings" },
      { value: "Top 3", label: "Target Ranking" },
      { value: "2-3mo", label: "Typical Results Time" }
    ],
    faqs: [
      { question: "How long until I see results?", answer: "Local SEO typically shows meaningful improvements in 2-3 months. Some quick wins happen faster." },
      { question: "Do you guarantee #1 rankings?", answer: "No one can guarantee that honestly. We guarantee our process and have a strong track record of top 3 placements." },
      { question: "What if I'm already doing SEO?", answer: "Great! We can audit what you're doing and either complement it or take over completely." }
    ],
    testimonial: { name: "Carlos M.", business: "CM Landscaping", quote: "Went from page 3 to the top 3 for 'landscaping near me'. Phone hasn't stopped ringing.", result: "Page 1 rankings" },
    metaTitle: "Local SEO | ForgeOS - Get Found on Google by Local Customers",
    metaDescription: "Dominate local search results with proven SEO strategies. Google Business optimization, citation building, and monthly ranking improvements."
  },
  "review-funnel": {
    title: "5-Star Magic Review Funnel",
    headline: "Get More 5-Star Reviews on Autopilot",
    subheadline: "\"Sure I'll leave you a review\", but the truth is people forget. We'll 'gently' remind them for a few weeks until they remember.",
    icon: Star,
    color: "amber",
    videoPlaceholder: "Watch the review funnel in action",
    benefits: [
      { icon: Star, title: "Automated Requests", description: "Send review requests with one click after every job." },
      { icon: Shield, title: "Negative Review Filter", description: "Unhappy customers get routed to you first, not Google." },
      { icon: Clock, title: "Smart Follow-Ups", description: "Gentle reminders until they actually leave the review." },
      { icon: TrendingUp, title: "Multi-Platform", description: "Google, Facebook, Yelp — wherever you need reviews." }
    ],
    howItWorks: [
      { step: 1, title: "Job Complete", description: "You finish a job and click 'Request Review'" },
      { step: 2, title: "Customer Gets Link", description: "They receive a simple text with review link" },
      { step: 3, title: "Happy Path", description: "Happy? Straight to Google. Unhappy? Comes to you first." },
      { step: 4, title: "Auto Follow-Up", description: "Didn't review? We remind them (nicely) for 2 weeks" }
    ],
    stats: [
      { value: "47", label: "Avg New Reviews/Client" },
      { value: "4.8★", label: "Avg Rating Achieved" },
      { value: "89%", label: "Review Completion Rate" }
    ],
    faqs: [
      { question: "Is this fake reviews?", answer: "Absolutely not. These are real reviews from real customers. We just make it easy for them to leave one." },
      { question: "What about negative reviews?", answer: "Our funnel asks 'How was your experience?' first. Unhappy customers get routed to you privately so you can fix it before they go public." },
      { question: "Which platforms can I get reviews on?", answer: "Google (most important), Facebook, Yelp, and industry-specific sites." }
    ],
    testimonial: { name: "Mike R.", business: "Rodriguez Plumbing", quote: "We went from 3.2 to 4.8 stars in 60 days. The review system alone paid for itself 10x over.", result: "+47 reviews" },
    metaTitle: "5-Star Magic Review Funnel | ForgeOS - Automated Review Generation",
    metaDescription: "Get more 5-star reviews automatically. Smart follow-ups, negative review filtering, and multi-platform support. Average client gets 47 new reviews."
  },
  "marketing-campaigns": {
    title: "One-Click Marketing Campaigns",
    headline: "Stay Top of Mind Without the Work",
    subheadline: "Pre-built email and SMS campaigns that keep customers thinking about you. Holiday promos, seasonal reminders, re-engagement — all automated.",
    icon: Mail,
    color: "pink",
    videoPlaceholder: "See the campaign library in action",
    benefits: [
      { icon: Mail, title: "Pre-Built Templates", description: "Dozens of proven campaigns ready to send." },
      { icon: Zap, title: "One-Click Launch", description: "Pick a campaign, customize if you want, send." },
      { icon: Calendar, title: "Seasonal Automation", description: "Holiday and seasonal campaigns scheduled automatically." },
      { icon: TrendingUp, title: "Track Results", description: "See opens, clicks, and revenue generated." }
    ],
    howItWorks: [
      { step: 1, title: "Browse Library", description: "Choose from dozens of pre-built campaigns" },
      { step: 2, title: "Customize", description: "Add your branding and tweak the message" },
      { step: 3, title: "Select Audience", description: "All customers, past customers, or specific segments" },
      { step: 4, title: "Send & Track", description: "Launch with one click and watch results come in" }
    ],
    stats: [
      { value: "50+", label: "Campaign Templates" },
      { value: "32%", label: "Avg Open Rate" },
      { value: "$2.4k", label: "Avg Revenue/Campaign" }
    ],
    faqs: [
      { question: "Do I need to write the emails?", answer: "Nope. We provide fully written campaigns. Just add your logo and send, or customize as much as you want." },
      { question: "How often should I send campaigns?", answer: "We recommend 2-4 per month. Enough to stay top of mind without being annoying." },
      { question: "Can I create my own campaigns?", answer: "Absolutely. Use our templates as a starting point or build from scratch." }
    ],
    testimonial: { name: "Jennifer L.", business: "Luxe Spa", quote: "The Mother's Day campaign brought in $8k in gift card sales. I just clicked send.", result: "$8k in 3 days" },
    metaTitle: "One-Click Marketing Campaigns | ForgeOS - Automated Email & SMS Marketing",
    metaDescription: "Pre-built marketing campaigns that drive revenue. Holiday promos, seasonal reminders, and re-engagement campaigns — all with one click."
  },
  "lead-follow-up": {
    title: "Automated Lead Follow-Up",
    headline: "Follow Up Automatically. Close More Deals.",
    subheadline: "Speed to lead wins. Our AI follows up with new leads instantly and keeps nurturing until they're ready to buy.",
    icon: MousePointer,
    color: "indigo",
    videoPlaceholder: "Watch the AI follow-up in action",
    benefits: [
      { icon: Zap, title: "Instant Response", description: "New leads get a response in under 60 seconds." },
      { icon: Clock, title: "Persistent Nurture", description: "Automated follow-ups for days or weeks until they convert." },
      { icon: TrendingUp, title: "Smart Timing", description: "AI learns the best times to reach each lead." },
      { icon: Shield, title: "Human Handoff", description: "Hot leads get transferred to you immediately." }
    ],
    howItWorks: [
      { step: 1, title: "Lead Comes In", description: "From your website, ads, or any source" },
      { step: 2, title: "Instant Contact", description: "AI sends personalized text within 60 seconds" },
      { step: 3, title: "Nurture Sequence", description: "Automated follow-ups keep them engaged" },
      { step: 4, title: "Hot Lead Alert", description: "When they're ready, you get notified instantly" }
    ],
    stats: [
      { value: "<60s", label: "Response Time" },
      { value: "391%", label: "More Conversions" },
      { value: "21 days", label: "Avg Nurture Length" }
    ],
    faqs: [
      { question: "Does it sound like a robot?", answer: "No. Our AI writes natural, conversational messages. Most leads can't tell it's automated." },
      { question: "What if they ask a question I need to answer?", answer: "The AI handles common questions. Complex ones get flagged for you to respond personally." },
      { question: "Can I customize the messages?", answer: "Yes. Set your tone, add specific offers, and customize the entire sequence." }
    ],
    testimonial: { name: "Sarah C.", business: "Bright Smile Dental", quote: "The AI bot books 30% of our appointments now. My front desk can finally focus on patients.", result: "+$18k/mo" },
    metaTitle: "Automated Lead Follow-Up | ForgeOS - AI-Powered Lead Nurturing",
    metaDescription: "Follow up with leads instantly and automatically. AI-powered nurturing that converts more leads into customers with zero manual work."
  },
  "database-reactivation": {
    title: "Database Reactivation",
    headline: "Turn Old Customers Into New Revenue",
    subheadline: "Your past customers already trust you. We'll reach out and bring them back with targeted reactivation campaigns.",
    icon: RefreshCw,
    color: "emerald",
    videoPlaceholder: "See database reactivation in action",
    benefits: [
      { icon: RefreshCw, title: "Wake Up Cold Leads", description: "Re-engage customers who haven't bought in 6+ months." },
      { icon: TrendingUp, title: "Highest ROI Channel", description: "Past customers convert 5x better than cold leads." },
      { icon: Zap, title: "Automated Outreach", description: "Set it and forget it. We handle the follow-up." },
      { icon: Shield, title: "Personalized Messages", description: "Reference their past purchases for relevance." }
    ],
    howItWorks: [
      { step: 1, title: "Import Database", description: "Upload your customer list or connect your CRM" },
      { step: 2, title: "Segment & Target", description: "We identify the best reactivation candidates" },
      { step: 3, title: "Launch Campaign", description: "Personalized outreach via text and email" },
      { step: 4, title: "Book Appointments", description: "Interested customers get scheduled automatically" }
    ],
    stats: [
      { value: "5x", label: "Better Conversion" },
      { value: "23%", label: "Avg Reactivation Rate" },
      { value: "$4.2k", label: "Avg Revenue/Campaign" }
    ],
    faqs: [
      { question: "How old can the contacts be?", answer: "We've successfully reactivated customers from 2+ years ago. The key is having their phone number or email." },
      { question: "What if they unsubscribed?", answer: "We respect all opt-outs and only contact people who can legally receive messages." },
      { question: "How is this different from regular marketing?", answer: "Reactivation campaigns are specifically designed for past customers with personalized messaging that references their history with you." }
    ],
    testimonial: { name: "Robert T.", business: "Elite Auto Detail", quote: "First reactivation campaign brought back 34 customers I thought were gone forever. $6,800 in one week.", result: "$6.8k in 1 week" },
    metaTitle: "Database Reactivation | ForgeOS - Re-Engage Past Customers",
    metaDescription: "Turn old customers into new revenue with automated reactivation campaigns. Past customers convert 5x better than cold leads."
  }
};

// Star rating component
const StarRating = ({ count = 5, filled = 5, size = "w-5 h-5" }: { count?: number; filled?: number; size?: string }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star 
        key={i} 
        className={`${size} ${i < filled ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} 
      />
    ))}
  </div>
);

// GHL Calendar Embed Component
const GHLCalendarEmbed = () => (
  <div className="bg-white rounded-2xl border border-[#E8E4DD] shadow-lg overflow-hidden">
    <div className="p-6 border-b border-[#E8E4DD] bg-[#F7F4EF]">
      <h3 className="font-semibold text-lg text-[#1A1A1A]">Book Your Free Demo</h3>
      <p className="text-sm text-[#666]">See this feature in action</p>
    </div>
    <div className="p-8 min-h-[300px] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Calendar className="w-12 h-12 text-teal-500 mx-auto mb-4" />
        <p className="text-[#666] mb-2">GoHighLevel Calendar</p>
        <p className="text-xs text-[#999]">Replace with your GHL embed</p>
      </div>
    </div>
  </div>
);

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const feature = featuresData[slug];
  
  if (!feature) {
    notFound();
  }

  const Icon = feature.icon;

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      <PublicNavbar />

      {/* Hero Section with VSL */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-${feature.color}-50 border border-${feature.color}-100 rounded-full mb-6`}>
                <Icon className={`w-4 h-4 text-${feature.color}-500`} />
                <span className={`text-sm font-medium text-${feature.color}-700`}>{feature.title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight text-[#1A1A1A]">
                {feature.headline}
              </h1>
              
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                {feature.subheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#book">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-[#D4D0C8] text-[#1A1A1A] hover:bg-[#E8E4DD] bg-white">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: VSL Video Placeholder */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-[#E8E4DD] shadow-xl overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-teal-600 transition-colors shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-[#666] font-medium">{feature.videoPlaceholder}</p>
                    <p className="text-xs text-[#999] mt-2">Replace with your VSL video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-white border-y border-[#E8E4DD]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {feature.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-bold text-teal-500">{stat.value}</p>
                <p className="text-sm text-[#666] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Why {feature.title}?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feature.benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <Card key={idx} className="bg-white border-[#E8E4DD] shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                      <BenefitIcon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold mb-2 text-[#1A1A1A]">{benefit.title}</h3>
                    <p className="text-sm text-[#666]">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              How It Works
            </h2>
          </div>
          
          <div className="space-y-6">
            {feature.howItWorks.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-lg mb-1 text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-[#666]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white border-[#E8E4DD] shadow-lg">
            <CardContent className="p-8 md:p-12">
              <StarRating filled={5} size="w-6 h-6" />
              <p className="text-xl md:text-2xl text-[#1A1A1A] mt-6 mb-8 leading-relaxed">
                "{feature.testimonial.quote}"
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-[#E8E4DD]">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{feature.testimonial.name}</p>
                  <p className="text-sm text-[#666]">{feature.testimonial.business}</p>
                </div>
                <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full">
                  {feature.testimonial.result}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Common Questions
            </h2>
          </div>
          
          <div className="space-y-3">
            {feature.faqs.map((faq, idx) => (
              <Card 
                key={idx} 
                className={`bg-[#F7F4EF] border-[#E8E4DD] cursor-pointer transition-all hover:shadow-sm ${openFaq === idx ? 'ring-2 ring-teal-200' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium pr-4 text-[#1A1A1A]">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-[#666] transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
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

      {/* CTA Section */}
      <section id="book" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#1A1A1A]">
                Ready to get started with {feature.title}?
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Book a free demo and see exactly how this works for your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-[#1A1A1A]">15-minute personalized demo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-[#1A1A1A]">See real results from similar businesses</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-[#1A1A1A]">No commitment required</span>
                </div>
              </div>
            </div>

            <GHLCalendarEmbed />
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
