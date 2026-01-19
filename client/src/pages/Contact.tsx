import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

// GHL Form Embed Component
const GHLFormEmbed = () => (
  <div className="bg-white rounded-2xl border border-[#E8E4DD] shadow-lg overflow-hidden">
    <div className="p-6 border-b border-[#E8E4DD] bg-[#F7F4EF]">
      <h3 className="font-semibold text-lg">Send Us a Message</h3>
      <p className="text-sm text-[#666]">We'll get back to you within 24 hours</p>
    </div>
    {/* GHL Form Embed Placeholder */}
    <div className="p-8 min-h-[400px] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <MessageSquare className="w-16 h-16 text-teal-500 mx-auto mb-4" />
        <p className="text-[#666] mb-2">GoHighLevel Form Embed</p>
        <p className="text-xs text-[#999] max-w-xs mx-auto mb-4">Replace this placeholder with your GHL contact form embed code</p>
        <code className="block p-3 bg-gray-100 rounded text-xs text-left overflow-x-auto">
          {`<!-- GHL Form Embed -->\n<iframe src="YOUR_GHL_FORM_URL" \n  width="100%" height="500" \n  frameborder="0"></iframe>`}
        </code>
      </div>
    </div>
  </div>
);

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | ForgeOS";
  }, []);

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
                <Button variant="ghost" size="sm" className="text-[#666] hover:text-[#1A1A1A]">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Button>
              </Link>
              <Link href="/#book">
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Have questions about ForgeOS? We're here to help. Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-[#666]">hello@forgeos.com</p>
                    <p className="text-sm text-[#999]">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-[#666]">(555) 123-4567</p>
                    <p className="text-sm text-[#999]">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-[#666]">Monday - Friday: 9am - 5pm EST</p>
                    <p className="text-sm text-[#999]">Weekend support available for clients</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Quick Actions</h3>
                
                <Card className="bg-white border-[#E8E4DD]">
                  <CardContent className="p-4">
                    <Link href="/#book">
                      <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                          <Calendar className="w-5 h-5 text-teal-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-teal-600 transition-colors">Book a Demo</p>
                          <p className="text-sm text-[#666]">Schedule a 15-minute strategy call</p>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white border-[#E8E4DD]">
                  <CardContent className="p-4">
                    <Link href="/#faq">
                      <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                          <MessageSquare className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-amber-600 transition-colors">View FAQ</p>
                          <p className="text-sm text-[#666]">Find answers to common questions</p>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: Contact Form */}
            <GHLFormEmbed />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#E8E4DD]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666]">© 2025 ForgeOS. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-[#666]">
            <Link href="/privacy" className="hover:text-[#1A1A1A]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1A1A1A]">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
