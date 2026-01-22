import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
import { 
  Star,
  Globe,
  Phone,
  Inbox,
  Smartphone,
  Search,
  Mail,
  MousePointer,
  RefreshCw,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Play,
  Calendar,
  Shield,
  Zap,
  TrendingUp,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";

// Feature data configuration - all 9 features with full content
const featuresData: Record<string, {
  title: string;
  shortTitle: string;
  icon: any;
  tagline: string;
  description: string;
  heroStat: { value: string; label: string };
  benefits: { icon: any; title: string; description: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  "functional-website": {
    title: "Functional Website",
    shortTitle: "AI Website",
    icon: Globe,
    tagline: "Get a lead-generating website in just days",
    description: "Your website shouldn't just look pretty—it should work. Our AI-powered websites are built to convert visitors into leads with smart forms, chat widgets, and tracking built in from day one.",
    heroStat: { value: "3x", label: "More Leads" },
    benefits: [
      { icon: Zap, title: "Built in Days, Not Months", description: "Our AI generates your site structure and content. You're live in under a week." },
      { icon: TrendingUp, title: "Conversion Optimized", description: "Every element is designed to capture leads. Forms, CTAs, and chat widgets in all the right places." },
      { icon: Shield, title: "Mobile-First Design", description: "70% of your visitors are on mobile. Your site will look perfect on every device." },
      { icon: Clock, title: "Always Up-to-Date", description: "Easy updates and changes. No waiting on developers or paying hourly rates." }
    ],
    howItWorks: [
      { step: 1, title: "Discovery Call", description: "We learn about your business, services, and what makes you different." },
      { step: 2, title: "AI Generation", description: "Our AI creates your site structure, copy, and design based on your industry." },
      { step: 3, title: "Review & Refine", description: "You review and we make adjustments until it's perfect." },
      { step: 4, title: "Launch & Track", description: "Go live with full analytics and lead tracking from day one." }
    ],
    faqs: [
      { question: "Do I need to provide content?", answer: "Nope. Our AI generates industry-specific content based on your business. You just review and approve." },
      { question: "Can I make changes later?", answer: "Absolutely. You'll have access to make simple updates, and we're always here for bigger changes." },
      { question: "What about hosting?", answer: "Included. Fast, secure hosting with SSL certificate and daily backups." }
    ]
  },
  "missed-call-text-back": {
    title: "Missed Call Text Back",
    shortTitle: "Missed Call",
    icon: Phone,
    tagline: "Automatically text back missed calls",
    description: "Every missed call is a missed opportunity. Our system automatically texts back within seconds, keeping the conversation alive even when you can't answer the phone.",
    heroStat: { value: "12", label: "Saved Leads/Mo" },
    benefits: [
      { icon: Zap, title: "Instant Response", description: "Text goes out within 5 seconds of a missed call. No lead left waiting." },
      { icon: TrendingUp, title: "Higher Contact Rate", description: "Text has 98% open rate vs 20% for voicemail. Get responses, not ignored messages." },
      { icon: Shield, title: "Professional Templates", description: "Pre-written messages that sound human, not robotic. Customized for your business." },
      { icon: Clock, title: "24/7 Coverage", description: "Works nights, weekends, holidays. Never miss an opportunity again." }
    ],
    howItWorks: [
      { step: 1, title: "Call Comes In", description: "Someone calls your business line but you can't answer." },
      { step: 2, title: "Instant Detection", description: "Our system detects the missed call within seconds." },
      { step: 3, title: "Auto Text Sent", description: "A personalized text is sent immediately to the caller." },
      { step: 4, title: "Conversation Starts", description: "They reply, and you continue the conversation when ready." }
    ],
    faqs: [
      { question: "Does it work with my existing phone number?", answer: "Yes. We integrate with your current business line. No need to change numbers." },
      { question: "Can I customize the message?", answer: "Absolutely. We'll help you craft the perfect response for your business." },
      { question: "What if I answer the call?", answer: "Smart detection—no text is sent if you actually answer the call." }
    ]
  },
  "all-in-one-inbox": {
    title: "All-In-One Inbox",
    shortTitle: "Unified Inbox",
    icon: Inbox,
    tagline: "Get all your messages in one place",
    description: "Stop juggling between Facebook, Instagram, Google, email, and SMS. One inbox for every conversation, so nothing falls through the cracks.",
    heroStat: { value: "5", label: "Channels United" },
    benefits: [
      { icon: Zap, title: "Every Channel, One Place", description: "Facebook, Instagram, Google Business, SMS, email—all in one dashboard." },
      { icon: TrendingUp, title: "Faster Response Time", description: "No more switching apps. Respond to everything from one screen." },
      { icon: Shield, title: "Conversation History", description: "Full context on every customer. See all past interactions instantly." },
      { icon: Clock, title: "Team Collaboration", description: "Assign conversations, leave notes, and work together seamlessly." }
    ],
    howItWorks: [
      { step: 1, title: "Connect Channels", description: "Link your Facebook, Instagram, Google Business, and more." },
      { step: 2, title: "Messages Flow In", description: "All conversations appear in your unified inbox automatically." },
      { step: 3, title: "Respond Anywhere", description: "Reply from the inbox—message goes back through the original channel." },
      { step: 4, title: "Track Everything", description: "Full history and analytics on all customer communications." }
    ],
    faqs: [
      { question: "Which platforms are supported?", answer: "Facebook Messenger, Instagram DM, Google Business Messages, SMS, email, and web chat." },
      { question: "Can multiple team members use it?", answer: "Yes. Assign conversations, add internal notes, and collaborate in real-time." },
      { question: "Is there a mobile app?", answer: "Yes. Respond to messages from anywhere with our mobile app." }
    ]
  },
  "business-phone": {
    title: "Business Phone",
    shortTitle: "Business Phone",
    icon: Smartphone,
    tagline: "Separate business and personal",
    description: "Get a dedicated business phone number that works on your existing phone. Professional voicemail, call routing, and tracking—without carrying two phones.",
    heroStat: { value: "100%", label: "Professional" },
    benefits: [
      { icon: Zap, title: "Dedicated Business Number", description: "Local or toll-free number that's just for business. Keep personal separate." },
      { icon: TrendingUp, title: "Professional Voicemail", description: "Custom greeting that makes your one-person operation sound like a real company." },
      { icon: Shield, title: "Call Tracking", description: "See which marketing channels are driving calls. Know what's working." },
      { icon: Clock, title: "Business Hours", description: "Set when calls come through vs go to voicemail. Protect your personal time." }
    ],
    howItWorks: [
      { step: 1, title: "Choose Your Number", description: "Pick a local or toll-free number for your business." },
      { step: 2, title: "Set Up Routing", description: "Configure business hours, voicemail, and call forwarding." },
      { step: 3, title: "Use Your Phone", description: "Calls come to your existing phone with caller ID showing it's business." },
      { step: 4, title: "Track Results", description: "See call analytics and which marketing is driving calls." }
    ],
    faqs: [
      { question: "Do I need a second phone?", answer: "No. The business number works through an app on your existing phone." },
      { question: "Can I text from the business number?", answer: "Yes. Send and receive texts from your business number." },
      { question: "What about after-hours calls?", answer: "Set business hours—calls outside those times go straight to voicemail." }
    ]
  },
  "local-seo": {
    title: "Local SEO",
    shortTitle: "Local SEO",
    icon: Search,
    tagline: "Actually get found on Google",
    description: "When someone searches 'plumber near me' or 'best dentist in [city]', you need to show up. We optimize your Google presence so you're found by people ready to buy.",
    heroStat: { value: "Top 3", label: "Google Ranking" },
    benefits: [
      { icon: Zap, title: "Google Business Optimization", description: "Your profile fully optimized with the right categories, keywords, and content." },
      { icon: TrendingUp, title: "Review Strategy", description: "More reviews = higher rankings. We help you get more 5-star reviews consistently." },
      { icon: Shield, title: "Local Citations", description: "Your business listed accurately across 50+ directories that Google trusts." },
      { icon: Clock, title: "Monthly Reporting", description: "See your rankings improve over time with clear, actionable reports." }
    ],
    howItWorks: [
      { step: 1, title: "Audit & Analysis", description: "We analyze your current Google presence and identify opportunities." },
      { step: 2, title: "Optimization", description: "Full optimization of your Google Business Profile and website." },
      { step: 3, title: "Citation Building", description: "List your business accurately across directories Google trusts." },
      { step: 4, title: "Ongoing Improvement", description: "Monthly updates, review generation, and ranking monitoring." }
    ],
    faqs: [
      { question: "How long until I see results?", answer: "Most clients see ranking improvements within 30-60 days. Top 3 positions typically take 3-6 months." },
      { question: "Do you guarantee rankings?", answer: "We can't guarantee specific positions (no one can), but we guarantee the work and have a strong track record." },
      { question: "What if I already have a Google listing?", answer: "Great! We'll audit it and optimize what's there. No need to start over." }
    ]
  },
  "review-funnel": {
    title: "5-Star Magic Review Funnel",
    shortTitle: "Review Funnel",
    icon: Star,
    tagline: "Get more 5-star reviews and prevent bad ones",
    description: "Our magic funnel guides happy customers to leave 5-star reviews on Google. Unhappy customers get routed to you privately first. Protect your reputation while building social proof.",
    heroStat: { value: "+47", label: "Avg New Reviews" },
    benefits: [
      { icon: Star, title: "More 5-Star Reviews", description: "Happy customers are guided directly to Google. Average client gains 47 new reviews in 90 days." },
      { icon: Shield, title: "Reputation Protection", description: "Unhappy customers filtered to private feedback first. Address issues before they go public." },
      { icon: Zap, title: "Automated Follow-Up", description: "People forget to leave reviews. We gently remind them for weeks until they remember." },
      { icon: TrendingUp, title: "Track Everything", description: "See who's been asked, who's responded, and your rating trend over time." }
    ],
    howItWorks: [
      { step: 1, title: "Customer Completes Service", description: "After a job is done, you (or your system) triggers a review request." },
      { step: 2, title: "They Rate Their Experience", description: "A simple 'How did we do?' with a star rating. Takes 2 seconds." },
      { step: 3, title: "Smart Routing", description: "5-star ratings go to Google. Lower ratings go to private feedback form." },
      { step: 4, title: "Automated Reminders", description: "If they don't complete the review, we follow up. Gently. For a few weeks." }
    ],
    faqs: [
      { question: "Is this against Google's terms?", answer: "No. We're not buying reviews or incentivizing them. We're simply making it easy for happy customers to share their experience." },
      { question: "What about negative reviews?", answer: "Lower ratings go to a private feedback form first. You can address issues before they become public reviews." },
      { question: "How do you send the requests?", answer: "SMS is most effective (98% open rate). We can also use email or both." }
    ]
  },
  "marketing-campaigns": {
    title: "One-Click Marketing Campaigns",
    shortTitle: "Marketing",
    icon: Mail,
    tagline: "Keep your customers thinking about you",
    description: "Stay top of mind with automated email and SMS campaigns. Holiday promotions, seasonal reminders, and re-engagement campaigns—all pre-built and ready to send.",
    heroStat: { value: "32%", label: "Open Rate" },
    benefits: [
      { icon: Zap, title: "Pre-Built Campaigns", description: "Holiday promotions, seasonal reminders, birthday messages—all ready to go." },
      { icon: TrendingUp, title: "Email + SMS", description: "Reach customers where they are. Email for detail, SMS for urgency." },
      { icon: Shield, title: "Smart Segmentation", description: "Send the right message to the right people. No more blast-and-pray." },
      { icon: Clock, title: "Set It and Forget It", description: "Automated sequences run in the background while you focus on work." }
    ],
    howItWorks: [
      { step: 1, title: "Choose a Campaign", description: "Pick from our library of proven campaigns for your industry." },
      { step: 2, title: "Customize Content", description: "Add your branding, offers, and personal touch." },
      { step: 3, title: "Select Audience", description: "Choose who receives it—all customers, inactive customers, etc." },
      { step: 4, title: "Launch & Track", description: "Send immediately or schedule. Watch opens, clicks, and conversions." }
    ],
    faqs: [
      { question: "Can I create my own campaigns?", answer: "Yes. Use our templates as a starting point or build from scratch." },
      { question: "How do you handle unsubscribes?", answer: "Automatically managed. Unsubscribes are honored immediately and tracked." },
      { question: "What about spam laws?", answer: "Fully compliant with CAN-SPAM and TCPA. We handle the legal stuff." }
    ]
  },
  "lead-follow-up": {
    title: "Automated Lead Follow-Up",
    shortTitle: "Lead Follow-Up",
    icon: MousePointer,
    tagline: "Automatically follow up with leads via text",
    description: "Speed to lead wins. Our AI follows up with new leads instantly and keeps the conversation going until they book or buy. No lead left behind.",
    heroStat: { value: "5 min", label: "Response Time" },
    benefits: [
      { icon: Zap, title: "Instant Response", description: "New leads get a text within minutes. While they're still thinking about you." },
      { icon: TrendingUp, title: "Persistent Follow-Up", description: "AI continues the conversation over days/weeks until they respond or book." },
      { icon: Shield, title: "Smart Conversations", description: "AI handles common questions and objections. Sounds human, not robotic." },
      { icon: Clock, title: "Handoff When Ready", description: "When they're ready to talk, you get notified. No wasted time on tire-kickers." }
    ],
    howItWorks: [
      { step: 1, title: "Lead Comes In", description: "Someone fills out a form, calls, or messages your business." },
      { step: 2, title: "Instant Engagement", description: "AI sends a personalized text within minutes." },
      { step: 3, title: "Conversation Continues", description: "AI answers questions, handles objections, and nurtures the lead." },
      { step: 4, title: "Booking or Handoff", description: "Lead books directly or gets handed to you when they're ready." }
    ],
    faqs: [
      { question: "Will leads know it's AI?", answer: "The messages are designed to sound natural and human. Most can't tell the difference." },
      { question: "What if they ask something complex?", answer: "AI hands off to you for questions it can't handle. You're always in control." },
      { question: "How many follow-ups are sent?", answer: "Customizable. Typically 5-7 touches over 2 weeks, then less frequent check-ins." }
    ]
  },
  "database-reactivation": {
    title: "Database Reactivation",
    shortTitle: "Reactivation",
    icon: RefreshCw,
    tagline: "Turn old customers into new revenue",
    description: "Your past customers are your warmest leads. We help you re-engage dormant customers with targeted campaigns that bring them back.",
    heroStat: { value: "$8k", label: "Avg Revenue Recovered" },
    benefits: [
      { icon: Zap, title: "Warm Leads", description: "Past customers already know and trust you. Easiest sale you'll ever make." },
      { icon: TrendingUp, title: "Proven Campaigns", description: "We've tested what works. 'We miss you' campaigns that actually get responses." },
      { icon: Shield, title: "Segment by Behavior", description: "Target customers who haven't been back in 6 months, 12 months, etc." },
      { icon: Clock, title: "Automated Sequences", description: "Set up once, runs automatically. Continuous reactivation on autopilot." }
    ],
    howItWorks: [
      { step: 1, title: "Import Your List", description: "Upload your customer database or connect your CRM." },
      { step: 2, title: "Segment Customers", description: "Identify who hasn't been back and how long it's been." },
      { step: 3, title: "Launch Campaign", description: "Send targeted 'we miss you' messages with a compelling offer." },
      { step: 4, title: "Track & Optimize", description: "See who responds, who books, and revenue generated." }
    ],
    faqs: [
      { question: "What if my list is old?", answer: "We clean and verify your list first. Remove bad numbers and emails before sending." },
      { question: "What kind of offers work best?", answer: "Depends on your business. We'll help you craft an offer that drives action without killing margins." },
      { question: "How often should I run reactivation?", answer: "Quarterly is typical. We can also set up automated triggers based on customer inactivity." }
    ]
  }
};

// GHL Calendar Embed Component
const GHLCalendarEmbed = () => (
  <div className="bg-white rounded-2xl border border-[#E5E2DB] shadow-lg overflow-hidden">
    <div className="p-6 border-b border-[#E5E2DB] bg-[#F5F2ED]">
      <h3 className="font-semibold text-lg text-[#1A1A1A]">Book Your Free Strategy Call</h3>
      <p className="text-sm text-[#666]">Pick a time that works for you</p>
    </div>
    {/* GHL Calendar Embed */}
    <div className="p-4 min-h-[600px]">
      <iframe 
        src="https://api.leadconnectorhq.com/widget/booking/hBKZNkdYJIOKUevPGaxf" 
        style={{ width: '100%', height: '600px', border: 'none', overflow: 'hidden' }} 
        scrolling="no" 
        id="msgsndr-calendar-feature"
        title="Book a Demo"
      />
    </div>
  </div>
);

// VSL Video Placeholder
const VSLVideoPlaceholder = ({ featureTitle }: { featureTitle: string }) => (
  <div className="relative aspect-video bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl border border-[#333]">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-teal-500/30 transition-colors group">
          <Play className="w-8 h-8 text-teal-400 group-hover:text-teal-300 ml-1" />
        </div>
        <p className="text-white/80 font-medium">Watch: How {featureTitle} Works</p>
        <p className="text-white/50 text-sm mt-1">2 min video</p>
      </div>
    </div>
    {/* Decorative gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
  </div>
);

export default function FeaturePage() {
  const params = useParams<{ feature: string }>();
  const featureSlug = params.feature || "";
  const feature = featuresData[featureSlug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Set SEO meta tags
  useEffect(() => {
    if (feature) {
      document.title = `${feature.title} | Forge Operating Group - AI Marketing Systems`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${feature.tagline}. ${feature.description}`);
      }
    }
  }, [feature]);

  // 404 for unknown features
  if (!feature) {
    return (
      <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
        <PublicNavbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Feature Not Found</h1>
          <p className="text-[#666] mb-8">The feature you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Back to Home
            </Button>
          </Link>
        </div>
        <PublicFooter />
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      <PublicNavbar />

      {/* Hero Section with VSL */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#666] mb-8">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#features" className="hover:text-[#1A1A1A] transition-colors">Features</Link>
            <span>/</span>
            <span className="text-[#1A1A1A] font-medium">{feature.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-100 rounded-full mb-6">
                <Icon className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">{feature.shortTitle}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight text-[#1A1A1A]">
                {feature.tagline}
              </h1>
              
              <p className="text-lg text-[#555] mb-8 leading-relaxed">
                {feature.description}
              </p>

              {/* Hero Stat */}
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-500">{feature.heroStat.value}</p>
                  <p className="text-sm text-[#666]">{feature.heroStat.label}</p>
                </div>
                <div className="h-12 w-px bg-[#E5E2DB]" />
                <p className="text-sm text-[#666]">Average result</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#book">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 shadow-md">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-[#D4D0C8] text-[#1A1A1A] hover:bg-[#E8E4DD] bg-white">
                    See How It Works
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: VSL Video */}
            <VSLVideoPlaceholder featureTitle={feature.shortTitle} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">Why Choose This</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Why {feature.title}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feature.benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <Card key={idx} className="bg-[#F7F4EF] border-[#E5E2DB] shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                        <BenefitIcon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-[#1A1A1A]">{benefit.title}</h3>
                        <p className="text-[#666] leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              How It Works
            </h2>
          </div>

          <div className="space-y-6">
            {feature.howItWorks.map((step, idx) => (
              <div key={idx} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-md">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-lg mb-1 text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-[#666] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {feature.faqs.map((faq, idx) => (
              <Card 
                key={idx} 
                className={`bg-[#F7F4EF] border-[#E5E2DB] cursor-pointer transition-all hover:shadow-sm ${openFaq === idx ? 'ring-2 ring-teal-200' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold pr-4 text-[#1A1A1A]">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-[#666] transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === idx && (
                    <p className="text-sm text-[#666] mt-4 pt-4 border-t border-[#E5E2DB] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
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
                <Icon className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#1A1A1A]">
                Ready to Get Started with {feature.title}?
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Book a free 15-minute strategy call. We'll show you exactly how {feature.shortTitle.toLowerCase()} can transform your business and answer any questions you have.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-[#555]">No commitment required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-[#555]">Custom implementation plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-[#555]">See real results from similar businesses</span>
                </div>
              </div>
            </div>

            {/* Right: Calendar Embed */}
            <GHLCalendarEmbed />
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
