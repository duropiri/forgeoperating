import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star,
  MessageSquare,
  Phone,
  Globe,
  Mail,
  Zap,
  Shield,
  TrendingUp,
  Users,
  CheckCircle2,
  ChevronDown,
  Bot,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Bell,
  ThumbsUp,
  RefreshCw,
  Target,
  BadgeCheck
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

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

// Animated counter
const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
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
  
  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Features data
const features = [
  {
    icon: Bell,
    title: "Automatic Follow-Up Reminders",
    description: '"Sure I\'ll leave you a review", but the truth is people forget. We\'ll \'gently\' remind them for a few weeks until they remember.',
    color: "bg-teal-50 text-teal-600"
  },
  {
    icon: ThumbsUp,
    title: "Ask For Reviews In One Click",
    description: "As promised, we keep it simple. If you're confused, we're fired and extremely embarrassed.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Shield,
    title: "Stop worrying about bad reviews",
    description: "Unsure if you should ask for a review? We'll take the guesswork out by guiding your customer to leave a 5-star review!",
    color: "bg-blue-50 text-blue-600"
  }
];

// Full system features
const systemFeatures = [
  {
    icon: Globe,
    title: "AI-Powered Website",
    description: "High-converting sites built in 30 minutes. Your digital storefront that works 24/7.",
    stat: "30 min setup"
  },
  {
    icon: Bot,
    title: "Conversation AI",
    description: "Your tireless virtual receptionist. Qualifies leads and books appointments while you sleep.",
    stat: "24/7 active"
  },
  {
    icon: Phone,
    title: "Missed Call Text Back",
    description: "Every missed call gets an instant text. Never lose a lead to voicemail again.",
    stat: "< 30 sec response"
  },
  {
    icon: Star,
    title: "5-Star Review Funnel",
    description: "Our magic funnel guides happy customers to Google. Five stars, every time.",
    stat: "+47 avg reviews"
  },
  {
    icon: RefreshCw,
    title: "Database Reactivation",
    description: "Turn your old customer list into new revenue. Automated campaigns that bring them back.",
    stat: "$2k+ recovered"
  }
];

// Testimonials
const testimonials = [
  {
    name: "Mike R.",
    business: "Rodriguez Plumbing",
    quote: "We went from 3.2 to 4.8 stars in 60 days. The review system alone paid for itself 10x over.",
    rating: 5,
    result: "+47 reviews"
  },
  {
    name: "Sarah C.",
    business: "Bright Smile Dental",
    quote: "The AI bot books 30% of our appointments now. My front desk can finally focus on patients.",
    rating: 5,
    result: "+$18k/mo"
  },
  {
    name: "James W.",
    business: "Wilson HVAC",
    quote: "I was skeptical, but the missed call text back alone saved 12 jobs last month.",
    rating: 5,
    result: "12 saved leads"
  }
];

// FAQ data
const faqs = [
  {
    question: "How is this different from other marketing agencies?",
    answer: "We don't sell 'marketing services'. We install a complete system that works 24/7. No monthly retainers for 'strategy calls'. Just a machine that generates customers on autopilot."
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see their first new leads within 48 hours. The review system typically generates 5-10 new reviews in the first month. Full ROI is usually achieved within 60-90 days."
  },
  {
    question: "Do I need to be tech-savvy?",
    answer: "Not at all. We handle 100% of the setup. If you can send a text message, you can use this. Plus, our AI handles most customer interactions automatically."
  },
  {
    question: "What if I already have a website?",
    answer: "Great! We can integrate our systems with your existing site, or build you a new high-converting one. Either way, the automation layer works the same."
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contracts. Month-to-month because we're confident you'll stay once you see the results. Most clients have been with us for 2+ years."
  }
];

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen light-landing bg-[#F7F4EF] text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#E8E4DD]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Forge<span className="text-teal-500">OS</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors">How It Works</a>
              <a href="#testimonials" className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors">Reviews</a>
              <a href="#faq" className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors">FAQ</a>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-[#666] hover:text-[#1A1A1A] hover:bg-[#E8E4DD]">
                  Team Login
                </Button>
              </Link>
              <a href="#book">
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white shadow-sm">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-teal-700">The Complete AI Marketing System</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              5-Star Magic
              <span className="block text-teal-500">Review Funnel</span>
            </h1>
            
            {/* Star Rating Display */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#E8E4DD]">
                <StarRating filled={5} size="w-6 h-6" />
                <span className="text-sm font-medium text-[#666]">Every time.</span>
              </div>
            </div>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#666] max-w-2xl mx-auto mb-8 leading-relaxed">
              "Sure I'll leave you a review", but the truth is people forget. 
              We'll 'gently' remind them for a few weeks until they remember.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#book">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 shadow-md hover:shadow-lg transition-all">
                  Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-8 border-[#D4D0C8] text-[#1A1A1A] hover:bg-[#E8E4DD] bg-white">
                  See How It Works
                </Button>
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#666]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["MR", "SC", "JW", "DK"].map((initials, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-teal-100 border-2 border-[#F7F4EF] flex items-center justify-center text-xs font-medium text-teal-700">
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
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">Why It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              You can't make everyone happy, but our
              <span className="text-teal-500"> magic funnel</span> sure can.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="bg-white border-[#E8E4DD] shadow-sm hover:shadow-md transition-all duration-300 card-hover">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-[#666] leading-relaxed">{feature.description}</p>
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
              { value: 24, suffix: "/7", label: "AI Working For You" }
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

      {/* The Full System */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">The Complete System</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Five revenue engines.
              <span className="text-teal-500"> One system.</span>
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              The review funnel is just the start. Here's everything that works together 
              to turn your business into a customer-generating machine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="bg-white border-[#E8E4DD] shadow-sm hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                        <Icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                        {feature.stat}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-[#666]">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
            
            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-teal-500 to-teal-600 border-0 shadow-lg">
              <CardContent className="p-6 flex flex-col justify-center h-full text-white">
                <h3 className="text-lg font-semibold mb-2">Ready to see it in action?</h3>
                <p className="text-sm text-teal-100 mb-4">
                  Book a 15-minute demo and we'll show you exactly how it works for your business.
                </p>
                <a href="#book">
                  <Button className="w-full bg-white text-teal-600 hover:bg-teal-50">
                    Book Free Demo
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">Real Results</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Don't take our word for it.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-[#F7F4EF] border-[#E8E4DD] shadow-sm">
                <CardContent className="p-6">
                  <StarRating filled={testimonial.rating} size="w-4 h-4" />
                  <p className="text-[#1A1A1A] mt-4 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DD]">
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-[#666]">{testimonial.business}</p>
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

      {/* CTA Section */}
      <section id="book" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white border-[#E8E4DD] shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Ready to get more 5-star reviews?
              </h2>
              <p className="text-[#666] mb-8 max-w-lg mx-auto">
                Book a free 15-minute demo. We'll show you exactly how the system works 
                and map out a custom implementation plan for your business.
              </p>
              
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-10 shadow-md">
                <Calendar className="w-5 h-5 mr-2" /> Book Your Demo
              </Button>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-[#666]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" /> No commitment
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" /> 15 minutes
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" /> Custom plan
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Common questions
            </h2>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#E8E4DD] bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="font-bold">Forge<span className="text-teal-500">OS</span></span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-[#666]">
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Contact</a>
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
