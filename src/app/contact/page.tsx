import { Card, CardContent } from "@/components/ui/card";
import PublicNavbar from "@/components/layouts/PublicNavbar";
import PublicFooter from "@/components/layouts/PublicFooter";
import {
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Calendar
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Forge Operating Group",
  description: "Get in touch with Forge Operating Group. We're here to help with your AI marketing automation needs.",
};

// GHL Form Embed Component
const GHLFormEmbed = () => (
  <div className="bg-white rounded-2xl border border-[#E5E2DB] shadow-lg overflow-hidden">
    <div className="p-6 border-b border-[#E5E2DB] bg-[#F5F2ED]">
      <h3 className="font-semibold text-lg text-[#1A1A1A]">Send Us a Message</h3>
      <p className="text-sm text-[#666]">We&apos;ll get back to you within 24 hours</p>
    </div>
    {/* GHL Calendar Embed */}
    <div className="p-4">
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/hBKZNkdYJIOKUevPGaxf"
        style={{ width: '100%', height: '800px', border: 'none' }}
        id="msgsndr-calendar-contact"
        title="Book a Demo"
      />
    </div>
  </div>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      <PublicNavbar />

      {/* Hero */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1A1A1A]">
            Get in Touch
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Have questions about Forge Operating Group? We&apos;re here to help. Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1A1A1A]">Email</h3>
                    <p className="text-[#555]">hello@forgeoperatinggroup.com</p>
                    <p className="text-sm text-[#888]">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1A1A1A]">Phone</h3>
                    <p className="text-[#555]">(555) 123-4567</p>
                    <p className="text-sm text-[#888]">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1A1A1A]">Business Hours</h3>
                    <p className="text-[#555]">Monday - Friday: 9am - 5pm EST</p>
                    <p className="text-sm text-[#888]">Weekend support available for clients</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[#1A1A1A]">Quick Actions</h3>

                <Card className="bg-white border-[#E5E2DB]">
                  <CardContent className="p-4">
                    <Link href="/#book">
                      <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                          <Calendar className="w-5 h-5 text-teal-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-teal-600 transition-colors text-[#1A1A1A]">Book a Demo</p>
                          <p className="text-sm text-[#666]">Schedule a 15-minute consultation</p>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white border-[#E5E2DB]">
                  <CardContent className="p-4">
                    <Link href="/#faq">
                      <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                          <MessageSquare className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-amber-600 transition-colors text-[#1A1A1A]">View FAQ</p>
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

      <PublicFooter />
    </div>
  );
}
