import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star,
  Globe,
  Bot,
  Phone,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Zap,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Calendar,
  MessageSquare,
  Bell,
  Target,
  BarChart3,
  Sparkles,
  Play,
  Inbox,
  Smartphone,
  Search,
  Mail,
  MousePointer,
  ChevronDown
} from "lucide-react";
import { Link, useParams } from "wouter";
import { useEffect, useState } from "react";

// Feature data configuration with SEO content - 9 features matching Stone Systems
const featureData: Record<string, {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroStat: { value: string; label: string };
  icon: typeof Globe;
  color: string;
  videoPlaceholder: string;
  benefits: { icon: typeof CheckCircle2; title: string; description: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  ctaText: string;
}> = {
  "functional-website": {
    slug: "functional-website",
    title: "Functional Website",
    tagline: "Get a lead-generating website in just days",
    description: "Stop losing customers to outdated websites. Our AI builds you a modern, mobile-optimized site that actually converts visitors into paying customers—in days, not months.",
    heroStat: { value: "3 days", label: "Average Build Time" },
    icon: Globe,
    color: "teal",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: Zap, title: "Lightning Fast Delivery", description: "Your new website is live in days, not weeks. No more waiting around for designers and developers." },
      { icon: Target, title: "Built to Convert", description: "Every element is strategically placed to turn visitors into leads. Forms, CTAs, and trust signals all optimized." },
      { icon: Shield, title: "Mobile-First Design", description: "Over 70% of your customers search on mobile. Your site looks perfect on every device." },
      { icon: TrendingUp, title: "SEO Foundation", description: "Built with proper structure for search engines. Start ranking for local searches from day one." }
    ],
    howItWorks: [
      { step: 1, title: "Discovery Call", description: "We learn about your business, services, and what makes you different from competitors." },
      { step: 2, title: "AI Generation", description: "Our AI creates your complete website with industry-specific copy and design." },
      { step: 3, title: "Your Review", description: "You review and request any changes. We iterate until you're 100% satisfied." },
      { step: 4, title: "Launch Day", description: "We go live, connect your domain, and your new lead machine starts working." }
    ],
    faqs: [
      { question: "Do I need any technical skills?", answer: "None at all. We handle everything—design, development, hosting, and updates. You just approve and go live." },
      { question: "Can I make changes after launch?", answer: "Absolutely. We provide a simple editor for basic changes, and our team handles anything complex." },
      { question: "What about my existing website?", answer: "We can migrate your content or start fresh. Either way, we ensure no SEO value is lost in the transition." }
    ],
    metaTitle: "Functional Website for Local Businesses | ForgeOS",
    metaDescription: "Get a lead-generating website in just days. AI-powered, mobile-optimized, and built to convert visitors into customers.",
    ctaText: "Get Your Website"
  },
  "missed-call-text-back": {
    slug: "missed-call-text-back",
    title: "Missed Call Text Back",
    tagline: "Automatically text back missed calls",
    description: "Every missed call is a potential customer calling your competitor. Our system instantly texts them back, keeping the conversation alive until you can respond.",
    heroStat: { value: "<30 sec", label: "Response Time" },
    icon: Phone,
    color: "green",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: Zap, title: "Instant Response", description: "Within 30 seconds of a missed call, they get a personalized text. Before they can dial your competitor." },
      { icon: TrendingUp, title: "62% More Leads Captured", description: "Most callers won't leave a voicemail. Text back captures leads you'd otherwise lose forever." },
      { icon: MessageSquare, title: "Start a Conversation", description: "The text opens a dialogue. They can text back their needs, and you respond when free." },
      { icon: Target, title: "Customizable Messages", description: "Tailor responses for your business. Include booking links, hours, or special offers." }
    ],
    howItWorks: [
      { step: 1, title: "Connect Your Phone", description: "We integrate with your existing business phone number. No new number needed." },
      { step: 2, title: "Set Your Message", description: "Customize what gets sent when you miss a call. We help you write something that converts." },
      { step: 3, title: "Miss a Call", description: "When you can't answer, our system detects it instantly." },
      { step: 4, title: "Text Sent Automatically", description: "Within 30 seconds, they receive your message. The conversation continues via text." }
    ],
    faqs: [
      { question: "Does it work with my current phone number?", answer: "Yes, we integrate with your existing number. No need to change anything or get a new line." },
      { question: "What if I answer the call?", answer: "Smart detection. If you answer, no text is sent. Only triggers on actual missed calls." },
      { question: "Can I customize the message?", answer: "Completely. You control exactly what gets sent. We provide templates that work, but you can write your own." }
    ],
    metaTitle: "Missed Call Text Back System | Never Lose a Lead | ForgeOS",
    metaDescription: "Turn missed calls into customers. Automatic text response within 30 seconds captures leads before they call your competitor.",
    ctaText: "Stop Losing Calls"
  },
  "all-in-one-inbox": {
    slug: "all-in-one-inbox",
    title: "All-In-One Inbox",
    tagline: "Get all your messages in one place",
    description: "Facebook messages, Google messages, texts, emails—all scattered across different apps. Our unified inbox brings everything together so you never miss a customer message again.",
    heroStat: { value: "1 inbox", label: "All Channels" },
    icon: Inbox,
    color: "blue",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: Inbox, title: "Unified Communications", description: "SMS, email, Facebook, Instagram, Google Business—all in one dashboard. No more app switching." },
      { icon: Clock, title: "Faster Response Times", description: "See all messages instantly. Respond from one place. Cut your response time in half." },
      { icon: Users, title: "Team Collaboration", description: "Multiple team members can access and respond. See who's handling what conversation." },
      { icon: Bell, title: "Never Miss a Message", description: "Real-time notifications across all channels. Every customer inquiry gets seen." }
    ],
    howItWorks: [
      { step: 1, title: "Connect Your Channels", description: "Link your Facebook, Instagram, Google Business, email, and phone number." },
      { step: 2, title: "Messages Flow In", description: "All customer messages appear in one unified inbox, tagged by source." },
      { step: 3, title: "Respond From One Place", description: "Reply to any channel without switching apps. Your response goes back through the original channel." },
      { step: 4, title: "Track & Organize", description: "Tag conversations, assign to team members, and track response times." }
    ],
    faqs: [
      { question: "Which platforms does it support?", answer: "Facebook Messenger, Instagram DMs, Google Business Messages, SMS, email, and more. We're always adding new integrations." },
      { question: "Can my whole team use it?", answer: "Yes, unlimited team members. You can assign conversations and see who's responding to what." },
      { question: "Does it work on mobile?", answer: "Absolutely. Full mobile app so you can respond to customers from anywhere." }
    ],
    metaTitle: "All-In-One Inbox | Unified Business Communications | ForgeOS",
    metaDescription: "All your customer messages in one place. Facebook, Instagram, Google, SMS, and email unified in a single inbox.",
    ctaText: "Unify Your Inbox"
  },
  "business-phone": {
    slug: "business-phone",
    title: "Business Phone",
    tagline: "Separate business and personal",
    description: "Stop giving out your personal number. Get a dedicated business line that works on your existing phone—with call tracking, recording, and professional features.",
    heroStat: { value: "1 number", label: "Business & Personal Separate" },
    icon: Smartphone,
    color: "purple",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: Smartphone, title: "Dedicated Business Line", description: "Professional business number that rings on your personal phone. No second device needed." },
      { icon: Shield, title: "Privacy Protected", description: "Keep your personal number private. Customers only see your business number." },
      { icon: BarChart3, title: "Call Tracking", description: "See which marketing channels drive calls. Track ROI on every campaign." },
      { icon: MessageSquare, title: "Voicemail Transcription", description: "Get voicemails transcribed and sent to your email. Read messages instead of listening." }
    ],
    howItWorks: [
      { step: 1, title: "Choose Your Number", description: "Pick a local or toll-free number. We can even port your existing business number." },
      { step: 2, title: "Download the App", description: "Install our app on your phone. It runs alongside your personal line." },
      { step: 3, title: "Set Business Hours", description: "Define when calls ring through and when they go to voicemail." },
      { step: 4, title: "Start Taking Calls", description: "Answer business calls professionally. Your personal number stays private." }
    ],
    faqs: [
      { question: "Do I need a second phone?", answer: "No. The business line works through an app on your existing phone. One device, two numbers." },
      { question: "Can I keep my current business number?", answer: "Yes, we can port your existing number over. No need to change your marketing materials." },
      { question: "What about after-hours calls?", answer: "Set custom business hours. After-hours calls can go to voicemail or trigger an auto-response." }
    ],
    metaTitle: "Business Phone System | Separate Business & Personal | ForgeOS",
    metaDescription: "Get a dedicated business phone number on your existing phone. Call tracking, voicemail transcription, and professional features.",
    ctaText: "Get Your Business Line"
  },
  "local-seo": {
    slug: "local-seo",
    title: "Local SEO",
    tagline: "Actually get found on Google",
    description: "When customers search for your services, do they find you or your competitors? Our local SEO system gets you ranking in the map pack and local search results.",
    heroStat: { value: "Top 3", label: "Map Pack Goal" },
    icon: Search,
    color: "amber",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: Search, title: "Google Map Pack Rankings", description: "Get into the top 3 local results that appear before organic listings. That's where 44% of clicks go." },
      { icon: Target, title: "Targeted Keywords", description: "Rank for the exact services you offer in your specific service areas." },
      { icon: TrendingUp, title: "Consistent Citations", description: "Your business info consistent across 50+ directories. Google rewards consistency." },
      { icon: Star, title: "Review Strategy", description: "More reviews = higher rankings. Our review system feeds directly into your SEO." }
    ],
    howItWorks: [
      { step: 1, title: "SEO Audit", description: "We analyze your current rankings, competitors, and opportunities." },
      { step: 2, title: "Google Business Optimization", description: "Your Google Business Profile optimized with keywords, photos, and posts." },
      { step: 3, title: "Citation Building", description: "We list your business on 50+ directories with consistent NAP (Name, Address, Phone)." },
      { step: 4, title: "Ongoing Optimization", description: "Monthly updates, new content, and strategy adjustments based on results." }
    ],
    faqs: [
      { question: "How long until I see results?", answer: "Local SEO typically shows improvement in 30-90 days. Significant results in 3-6 months." },
      { question: "Do I need a website for local SEO?", answer: "A website helps, but we can start with just your Google Business Profile and build from there." },
      { question: "What if I serve multiple areas?", answer: "We optimize for all your service areas. Multi-location businesses are our specialty." }
    ],
    metaTitle: "Local SEO Services | Get Found on Google | ForgeOS",
    metaDescription: "Rank higher in local search results. Get into Google's map pack and attract more local customers searching for your services.",
    ctaText: "Boost Your Rankings"
  },
  "review-funnel": {
    slug: "review-funnel",
    title: "5-Star Magic Review Funnel",
    tagline: "Get more 5-star reviews and prevent bad ones",
    description: "Our magic funnel guides happy customers to leave 5-star reviews on Google. Unhappy customers get routed to you privately first. Protect your reputation while building social proof.",
    heroStat: { value: "+47", label: "Avg New Reviews" },
    icon: Star,
    color: "amber",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: Star, title: "More 5-Star Reviews", description: "Happy customers are guided directly to Google. Average client gains 47 new reviews in 90 days." },
      { icon: Shield, title: "Reputation Protection", description: "Unhappy customers filtered to private feedback first. Address issues before they go public." },
      { icon: Bell, title: "Automated Follow-Up", description: "People forget to leave reviews. We gently remind them for weeks until they remember." },
      { icon: BarChart3, title: "Track Everything", description: "See who's been asked, who's responded, and your rating trend over time." }
    ],
    howItWorks: [
      { step: 1, title: "Customer Completes Service", description: "After a job is done, you (or your system) triggers a review request." },
      { step: 2, title: "They Rate Their Experience", description: "A simple 'How did we do?' with a star rating. Takes 2 seconds." },
      { step: 3, title: "Smart Routing", description: "5-star ratings go to Google. Lower ratings go to private feedback form." },
      { step: 4, title: "Automated Reminders", description: "If they don't complete the review, we follow up. Gently. For a few weeks." }
    ],
    faqs: [
      { question: "Is this against Google's terms?", answer: "No. We're not buying reviews or incentivizing them. We're simply making it easy for happy customers to share." },
      { question: "What about negative reviews?", answer: "Unhappy customers are routed to a private feedback form first. You get a chance to make it right." },
      { question: "How do you send the requests?", answer: "SMS, email, or both. SMS gets 3x higher response rates." }
    ],
    metaTitle: "5-Star Review Funnel | Get More Google Reviews | ForgeOS",
    metaDescription: "Automate your review collection. Our smart funnel guides happy customers to Google while protecting you from negative reviews.",
    ctaText: "Get More Reviews"
  },
  "marketing-campaigns": {
    slug: "marketing-campaigns",
    title: "One-Click Marketing Campaigns",
    tagline: "Keep your customers thinking about you",
    description: "Stay top-of-mind with automated marketing campaigns. Seasonal promotions, holiday specials, and regular touchpoints—all running on autopilot.",
    heroStat: { value: "12x", label: "More Touchpoints" },
    icon: Mail,
    color: "blue",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: Mail, title: "Pre-Built Campaigns", description: "Holiday promotions, seasonal specials, and industry-specific campaigns ready to deploy." },
      { icon: Zap, title: "One-Click Launch", description: "Select a campaign, customize your offer, and launch. Takes less than 5 minutes." },
      { icon: Target, title: "Multi-Channel Delivery", description: "Reach customers via email, SMS, or both. Go where they're most responsive." },
      { icon: BarChart3, title: "Track Results", description: "See opens, clicks, and conversions. Know exactly what's working." }
    ],
    howItWorks: [
      { step: 1, title: "Choose a Campaign", description: "Browse our library of proven campaigns for your industry." },
      { step: 2, title: "Customize Your Offer", description: "Add your specific promotion, discount, or message." },
      { step: 3, title: "Select Your Audience", description: "Target all customers, specific segments, or past customers only." },
      { step: 4, title: "Launch & Track", description: "Hit send and watch the results come in. Adjust and repeat." }
    ],
    faqs: [
      { question: "What kind of campaigns are included?", answer: "Holiday promotions, seasonal specials, birthday campaigns, anniversary offers, re-engagement sequences, and more." },
      { question: "Can I create my own campaigns?", answer: "Absolutely. Use our templates as a starting point or build completely custom campaigns." },
      { question: "How often should I send campaigns?", answer: "We recommend monthly touchpoints at minimum. Our system helps you stay consistent without overwhelming customers." }
    ],
    metaTitle: "One-Click Marketing Campaigns | Automated Promotions | ForgeOS",
    metaDescription: "Stay top-of-mind with automated marketing campaigns. Pre-built templates, one-click launch, and multi-channel delivery.",
    ctaText: "Launch Campaigns"
  },
  "lead-follow-up": {
    slug: "lead-follow-up",
    title: "Automated Lead Follow-Up",
    tagline: "Automatically follow up with leads via text",
    description: "80% of sales require 5+ follow-ups, but most businesses stop after 1. Our automated sequences keep following up until they book or buy.",
    heroStat: { value: "5x", label: "More Follow-Ups" },
    icon: MousePointer,
    color: "green",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: MousePointer, title: "Persistent Follow-Up", description: "Automated sequences that follow up 5, 10, even 15 times. Never let a lead go cold." },
      { icon: Clock, title: "Perfect Timing", description: "Messages sent at optimal times based on response data. Not too soon, not too late." },
      { icon: MessageSquare, title: "Conversational Tone", description: "Messages feel personal, not automated. Leads respond because it feels human." },
      { icon: Target, title: "Smart Stopping", description: "Sequences pause when they respond. No awkward double-messages." }
    ],
    howItWorks: [
      { step: 1, title: "Lead Enters System", description: "New lead from your website, ad, or referral triggers the sequence." },
      { step: 2, title: "Immediate Response", description: "First message goes out within minutes. Strike while they're interested." },
      { step: 3, title: "Automated Sequence", description: "Follow-up messages spread over days/weeks. Each adds value or creates urgency." },
      { step: 4, title: "Conversion or Nurture", description: "They book, or they enter a long-term nurture sequence for future conversion." }
    ],
    faqs: [
      { question: "Won't this annoy leads?", answer: "Our sequences are designed to add value, not spam. Messages are spaced appropriately and stop when they respond." },
      { question: "Can I customize the messages?", answer: "Yes, every message is customizable. We provide proven templates, but you can write your own." },
      { question: "What if they respond?", answer: "The sequence pauses immediately and alerts you. You take over the conversation from there." }
    ],
    metaTitle: "Automated Lead Follow-Up | Never Lose a Lead | ForgeOS",
    metaDescription: "Automated text sequences that follow up with leads until they convert. 5x more follow-ups, 5x more sales.",
    ctaText: "Automate Follow-Up"
  },
  "database-reactivation": {
    slug: "database-reactivation",
    title: "Database Reactivation",
    tagline: "Turn old customers into new revenue",
    description: "Your past customers are a goldmine. Our automated campaigns re-engage your existing database and bring back customers who haven't bought in months.",
    heroStat: { value: "$2k+", label: "Avg Revenue Recovered" },
    icon: RefreshCw,
    color: "purple",
    videoPlaceholder: "https://www.youtube.com/embed/placeholder",
    benefits: [
      { icon: TrendingUp, title: "Instant Revenue", description: "Most businesses see $2,000+ in recovered revenue within the first 30 days." },
      { icon: Users, title: "Warm Leads", description: "These people already know and trust you. They're 5x more likely to buy than cold prospects." },
      { icon: Zap, title: "Fully Automated", description: "Set it and forget it. The system runs campaigns automatically based on customer inactivity." },
      { icon: Target, title: "Personalized Outreach", description: "Messages reference their past purchases and history. Feels personal, not spammy." }
    ],
    howItWorks: [
      { step: 1, title: "Import Your Database", description: "Upload your customer list. We'll clean and organize it for you." },
      { step: 2, title: "Set Reactivation Rules", description: "Define what 'inactive' means for your business. 30 days? 90 days? You decide." },
      { step: 3, title: "Campaigns Run Automatically", description: "When customers hit the inactivity threshold, they enter the reactivation sequence." },
      { step: 4, title: "Track Results", description: "See who's re-engaged, who's booked, and total revenue recovered." }
    ],
    faqs: [
      { question: "What if my database is messy?", answer: "We'll help clean it. Duplicate removal, formatting fixes, and validation are all included." },
      { question: "Will this annoy my customers?", answer: "The messaging is friendly and valuable—usually a special offer or helpful reminder." },
      { question: "How is this different from email marketing?", answer: "It's multi-channel (SMS + email) and triggered by behavior, not scheduled blasts." }
    ],
    metaTitle: "Database Reactivation | Win Back Old Customers | ForgeOS",
    metaDescription: "Recover $2,000+ in revenue from your existing customer database. Automated reactivation campaigns that bring back inactive customers.",
    ctaText: "Reactivate Customers"
  }
};

// Get all features for navigation
export const getAllFeatures = () => Object.values(featureData);

// GHL Calendar Embed Component
const GHLCalendarEmbed = ({ className = "" }: { className?: string }) => (
  <div className={`bg-white rounded-2xl border border-[#E8E4DD] shadow-lg overflow-hidden ${className}`}>
    <div className="p-6 border-b border-[#E8E4DD] bg-[#F7F4EF]">
      <h3 className="font-semibold text-lg">Book Your Free Strategy Call</h3>
      <p className="text-sm text-[#666]">Pick a time that works for you</p>
    </div>
    {/* GHL Calendar Embed Placeholder - Replace with actual embed */}
    <div className="p-8 min-h-[400px] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Calendar className="w-16 h-16 text-teal-500 mx-auto mb-4" />
        <p className="text-[#666] mb-2">GoHighLevel Calendar Embed</p>
        <p className="text-xs text-[#999]">Replace this placeholder with your GHL calendar embed code</p>
        <code className="block mt-4 p-3 bg-gray-100 rounded text-xs text-left overflow-x-auto">
          {`<!-- GHL Calendar Embed -->\n<iframe src="YOUR_GHL_CALENDAR_URL" \n  width="100%" height="600" \n  frameborder="0"></iframe>`}
        </code>
      </div>
    </div>
  </div>
);

// Video Player Component with Play Button Overlay
const VideoPlayer = ({ videoUrl, title }: { videoUrl: string; title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
          
          {/* Play button */}
          <div className="relative z-10 w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center group-hover:bg-teal-400 transition-colors shadow-lg">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
          
          {/* Video title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-medium">Watch: {title}</p>
            <p className="text-white/60 text-sm">Click to play video</p>
          </div>
        </div>
      ) : (
        <iframe
          src={`${videoUrl}?autoplay=1`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default function FeaturePage() {
  const params = useParams();
  const featureSlug = params.feature as string;
  const feature = featureData[featureSlug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Update document title for SEO
  useEffect(() => {
    if (feature) {
      document.title = feature.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', feature.metaDescription);
      }
    }
  }, [feature]);

  if (!feature) {
    return (
      <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4">Feature Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = feature.icon;
  const colorClasses: Record<string, { bg: string; text: string; light: string; gradient: string }> = {
    teal: { bg: "bg-teal-500", text: "text-teal-600", light: "bg-teal-50", gradient: "from-teal-500 to-teal-600" },
    blue: { bg: "bg-blue-500", text: "text-blue-600", light: "bg-blue-50", gradient: "from-blue-500 to-blue-600" },
    green: { bg: "bg-green-500", text: "text-green-600", light: "bg-green-50", gradient: "from-green-500 to-green-600" },
    amber: { bg: "bg-amber-500", text: "text-amber-600", light: "bg-amber-50", gradient: "from-amber-500 to-amber-600" },
    purple: { bg: "bg-purple-500", text: "text-purple-600", light: "bg-purple-50", gradient: "from-purple-500 to-purple-600" }
  };
  const colors = colorClasses[feature.color] || colorClasses.teal;

  // Get adjacent features for navigation
  const featureKeys = Object.keys(featureData);
  const currentIndex = featureKeys.indexOf(featureSlug);
  const prevFeature = currentIndex > 0 ? featureData[featureKeys[currentIndex - 1]] : null;
  const nextFeature = currentIndex < featureKeys.length - 1 ? featureData[featureKeys[currentIndex + 1]] : null;

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#E8E4DD]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Forge<span className="text-teal-500">OS</span></span>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-[#666] hover:text-[#1A1A1A] hover:bg-[#E8E4DD]">
                  ← Back to Home
                </Button>
              </Link>
              <a href="#book">
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white shadow-sm">
                  {feature.ctaText}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with VSL */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#666] mb-8">
            <Link href="/" className="hover:text-[#1A1A1A]">Home</Link>
            <span>/</span>
            <Link href="/#features" className="hover:text-[#1A1A1A]">Features</Link>
            <span>/</span>
            <span className={colors.text}>{feature.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              {/* Icon Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.light} rounded-full mb-6`}>
                <Icon className={`w-5 h-5 ${colors.text}`} />
                <span className={`text-sm font-medium ${colors.text}`}>{feature.tagline}</span>
              </div>

              {/* H1 - Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {feature.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                {feature.description}
              </p>

              {/* Hero Stat */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl ${colors.light} flex items-center justify-center`}>
                  <span className={`text-2xl font-bold ${colors.text}`}>{feature.heroStat.value}</span>
                </div>
                <div>
                  <p className="font-medium">{feature.heroStat.label}</p>
                  <p className="text-sm text-[#666]">Average result</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#book">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white shadow-md">
                    {feature.ctaText} <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="border-[#D4D0C8] bg-white">
                    See How It Works
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Video Player */}
            <div>
              <VideoPlayer 
                videoUrl={feature.videoPlaceholder} 
                title={`How ${feature.title} Works`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className={`text-sm font-medium ${colors.text} uppercase tracking-wider mb-3`}>Why Choose This</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why {feature.title}?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feature.benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <Card key={idx} className="bg-[#F7F4EF] border-[#E8E4DD] hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center mb-4`}>
                      <BenefitIcon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-[#666]">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className={`text-sm font-medium ${colors.text} uppercase tracking-wider mb-3`}>The Process</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How It Works
            </h2>
          </div>
          
          <div className="space-y-6">
            {feature.howItWorks.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg`}>
                  {step.step}
                </div>
                <div className="flex-1 pb-6 border-b border-[#E8E4DD] last:border-0">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[#666] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className={`text-sm font-medium ${colors.text} uppercase tracking-wider mb-3`}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
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
                    <h3 className="font-medium pr-4">{faq.question}</h3>
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

      {/* CTA Section with Calendar */}
      <section id="book" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: CTA Text */}
            <div className="lg:sticky lg:top-32">
              <div className={`w-16 h-16 rounded-2xl ${colors.light} flex items-center justify-center mb-6`}>
                <Icon className={`w-8 h-8 ${colors.text}`} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Get Started with {feature.title}?
              </h2>
              <p className="text-lg text-[#666] mb-6 leading-relaxed">
                Book a free 15-minute strategy call. We'll show you exactly how {feature.title.toLowerCase()} can transform your business and answer any questions you have.
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

      {/* Feature Navigation */}
      <section className="py-8 px-6 border-t border-[#E8E4DD] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            {prevFeature ? (
              <Link href={`/features/${prevFeature.slug}`}>
                <Button variant="ghost" className="text-[#666] hover:text-[#1A1A1A]">
                  <ArrowLeft className="w-4 h-4 mr-2" /> {prevFeature.title}
                </Button>
              </Link>
            ) : <div />}
            
            <Link href="/#features">
              <Button variant="outline" className="border-[#D4D0C8]">
                All Features
              </Button>
            </Link>
            
            {nextFeature ? (
              <Link href={`/features/${nextFeature.slug}`}>
                <Button variant="ghost" className="text-[#666] hover:text-[#1A1A1A]">
                  {nextFeature.title} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#E8E4DD] bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="font-bold">Forge<span className="text-teal-500">OS</span></span>
              </div>
            </Link>
            
            <div className="flex items-center gap-6 text-sm text-[#666]">
              <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
              <Link href="/#features" className="hover:text-[#1A1A1A] transition-colors">Features</Link>
              <Link href="/privacy" className="hover:text-[#1A1A1A] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#1A1A1A] transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-[#1A1A1A] transition-colors">Contact</Link>
            </div>
            
            <p className="text-sm text-[#666]">
              © 2025 ForgeOS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
