import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight,
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
  Play,
  ChevronDown,
  Bot,
  Calendar,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

// Stats data
const stats = [
  { value: "500+", label: "Businesses Powered" },
  { value: "$2.3M", label: "Revenue Generated" },
  { value: "4.9", label: "Average Rating", icon: Star },
  { value: "24/7", label: "AI Working For You" }
];

// Features data
const features = [
  {
    icon: Globe,
    title: "AI-Powered Website",
    description: "High-converting websites built in 30 minutes. SEO-optimized, mobile-first, and designed to turn visitors into customers.",
    highlight: "Foundation"
  },
  {
    icon: Bot,
    title: "Conversation AI",
    description: "Your 24/7 virtual receptionist. Qualifies leads, answers questions, and books appointments while you sleep.",
    highlight: "Automation"
  },
  {
    icon: Phone,
    title: "Missed Call Text Back",
    description: "Never lose a lead again. Missed calls trigger instant text responses, keeping prospects engaged.",
    highlight: "Recovery"
  },
  {
    icon: Star,
    title: "Review Automation",
    description: "5-star reviews on autopilot. Our magic funnel guides happy customers to Google while filtering feedback privately.",
    highlight: "Reputation"
  },
  {
    icon: Mail,
    title: "Reactivation Campaigns",
    description: "Turn your existing customer list into recurring revenue. Automated campaigns that bring customers back.",
    highlight: "Growth"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Mike Rodriguez",
    business: "Rodriguez Plumbing",
    location: "Houston, TX",
    quote: "We went from 3.2 to 4.8 stars in 60 days. The review system alone paid for itself 10x over.",
    result: "+47 new reviews",
    avatar: "MR"
  },
  {
    name: "Sarah Chen",
    business: "Bright Smile Dental",
    location: "Austin, TX",
    quote: "The AI bot books 30% of our appointments now. My front desk can finally focus on patients, not phones.",
    result: "+$18k/month",
    avatar: "SC"
  },
  {
    name: "James Wilson",
    business: "Wilson HVAC",
    location: "Dallas, TX",
    quote: "I was skeptical about 'AI marketing' but the missed call text back alone saved 12 jobs last month.",
    result: "12 saved leads",
    avatar: "JW"
  }
];

// FAQ data
const faqs = [
  {
    question: "How is this different from other marketing agencies?",
    answer: "We don't sell 'marketing services'. We install a complete AI-powered system that works 24/7. No monthly retainers for 'strategy calls'. Just a machine that generates customers on autopilot."
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see their first new leads within 48 hours of going live. The review system typically generates 5-10 new reviews in the first month. Full ROI is usually achieved within 60-90 days."
  },
  {
    question: "Do I need to be tech-savvy?",
    answer: "Not at all. We handle 100% of the setup and provide a simple dashboard. If you can send a text message, you can use ForgeOS. Plus, our AI handles most customer interactions automatically."
  },
  {
    question: "What if I already have a website?",
    answer: "Great! We can integrate our systems with your existing site, or build you a new high-converting one. Either way, the AI automation layer works the same."
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contracts. We offer month-to-month plans because we're confident you'll stay once you see the results. Most clients have been with us for 2+ years."
  }
];

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">Forge<span className="text-primary">OS</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Results</a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                  Team Login
                </Button>
              </Link>
              <a href="#book">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Book a Call <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Growth Engine</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stop chasing leads.
                <span className="block text-primary">Let them chase you.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                ForgeOS is the complete AI marketing system that turns your local business into a 
                customer-generating machine. Website, AI bot, reviews, and automation—all working 
                24/7 while you focus on what you do best.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#book">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    Book Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#demo">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-border">
                    <Play className="w-5 h-5 mr-2" /> Watch Demo
                  </Button>
                </a>
              </div>
              
              {/* Social Proof Bar */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {["MR", "SC", "JW", "DK", "AL"].map((initials, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium">
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">500+ businesses trust ForgeOS</p>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 shadow-2xl">
                {/* Mock Dashboard */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">This Week's Performance</span>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">+23% ↑</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-2xl font-bold">47</p>
                      <p className="text-xs text-muted-foreground">New Leads</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-2xl font-bold">$12.4k</p>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-2xl font-bold">4.9</p>
                      <p className="text-xs text-muted-foreground">Avg Rating</p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-2xl font-bold">23</p>
                      <p className="text-xs text-muted-foreground">Appointments</p>
                    </div>
                  </div>
                  
                  {/* Mock Notification */}
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New lead captured</p>
                      <p className="text-xs text-muted-foreground">AI Bot just booked an appointment with John D.</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  LIVE
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Your competitors are stealing your customers.
            <span className="block text-muted-foreground mt-2">And you might not even know it.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            While you're busy running your business, leads are slipping through the cracks. 
            Missed calls go unanswered. Bad reviews sit unfixed. Your website collects dust 
            instead of customers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { stat: "80%", desc: "of leads go to the first business that responds" },
              { stat: "67%", desc: "of customers check reviews before calling" },
              { stat: "5 min", desc: "is all it takes for a lead to go cold" }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-destructive">{item.stat}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">The Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              One system. Five revenue engines.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ForgeOS isn't a collection of tools—it's an integrated system where every 
              component feeds the next. The more you install, the more powerful it becomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {feature.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
            
            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
              <CardContent className="p-6 flex flex-col justify-center h-full space-y-4">
                <h3 className="text-lg font-semibold">Ready to see it in action?</h3>
                <p className="text-sm text-muted-foreground">
                  Book a 15-minute strategy call and we'll show you exactly how ForgeOS 
                  would work for your business.
                </p>
                <a href="#book">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Book Free Strategy Call
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Numbers don't lie.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: TrendingUp, 
                value: "312%", 
                label: "Average ROI", 
                desc: "For every $1 invested, clients see $3.12 back in new revenue." 
              },
              { 
                icon: Users, 
                value: "47", 
                label: "New Leads/Month", 
                desc: "Average new leads generated per client in the first 90 days." 
              },
              { 
                icon: Star, 
                value: "4.8", 
                label: "Avg Review Score", 
                desc: "Clients go from 3.2 to 4.8 stars within 60 days on average." 
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="bg-card border-border text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-4xl font-bold text-primary">{item.value}</p>
                    <p className="text-lg font-semibold">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Don't take our word for it.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.business}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                      {testimonial.result}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section id="book" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 overflow-hidden relative">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to turn your business into a
                <span className="text-primary"> customer-generating machine?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book a free 15-minute strategy call. We'll analyze your current setup, 
                show you exactly where you're losing customers, and map out a custom 
                ForgeOS implementation plan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Calendar className="w-5 h-5 mr-2" /> Book Strategy Call
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No commitment
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 15 minutes
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Custom plan
                </span>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Common questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card 
                key={idx} 
                className={`bg-card border-border cursor-pointer transition-all ${openFaq === idx ? 'border-primary/50' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === idx && (
                    <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
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
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold">Forge<span className="text-primary">OS</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                The AI-powered growth engine for local businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#results" className="hover:text-foreground transition-colors">Results</a></li>
                <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 ForgeOS. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
