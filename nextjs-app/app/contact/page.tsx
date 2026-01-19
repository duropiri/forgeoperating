"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with GHL
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight text-[#1A1A1A]">
              Get In Touch
            </h1>
            <p className="text-lg text-[#666] leading-relaxed">
              Have questions? Ready to get started? We'd love to hear from you. 
              Fill out the form below or use our contact info.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-[#E8E4DD] shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1A1A1A]">Your Name</label>
                      <Input 
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-[#E8E4DD] focus:border-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1A1A1A]">Email</label>
                      <Input 
                        type="email"
                        placeholder="john@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-[#E8E4DD] focus:border-teal-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1A1A1A]">Phone</label>
                      <Input 
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-[#E8E4DD] focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1A1A1A]">Business Name</label>
                      <Input 
                        placeholder="Your Business LLC"
                        value={formData.business}
                        onChange={(e) => setFormData({...formData, business: e.target.value})}
                        className="border-[#E8E4DD] focus:border-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#1A1A1A]">Message</label>
                    <Textarea 
                      placeholder="Tell us about your business and what you're looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-[#E8E4DD] focus:border-teal-500 min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>

                {/* GHL Form Embed Placeholder */}
                <div className="mt-8 pt-8 border-t border-[#E8E4DD]">
                  <p className="text-xs text-[#999] text-center">
                    Or replace this form with your GoHighLevel form embed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white border-[#E8E4DD] shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#1A1A1A]">Email Us</h3>
                      <p className="text-[#666]">hello@forgeos.com</p>
                      <p className="text-sm text-[#999] mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#E8E4DD] shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#1A1A1A]">Call Us</h3>
                      <p className="text-[#666]">(555) 123-4567</p>
                      <p className="text-sm text-[#999] mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#E8E4DD] shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#1A1A1A]">Business Hours</h3>
                      <p className="text-[#666]">Monday - Friday</p>
                      <p className="text-sm text-[#999] mt-1">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#E8E4DD] shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#1A1A1A]">Location</h3>
                      <p className="text-[#666]">Remote-First Company</p>
                      <p className="text-sm text-[#999] mt-1">Serving businesses nationwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
