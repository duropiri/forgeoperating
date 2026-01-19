import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | ForgeOS";
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#E8E4DD]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Forge<span className="text-teal-500">OS</span></span>
              </div>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-[#666] hover:text-[#1A1A1A]">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[#666] mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-[#666] leading-relaxed">
                  ForgeOS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI marketing platform and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-[#666] leading-relaxed mb-4">We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 text-[#666] space-y-2">
                  <li>Contact information (name, email, phone number, business name)</li>
                  <li>Account credentials</li>
                  <li>Business information and customer data you upload to our platform</li>
                  <li>Communications with us and your customers through our platform</li>
                  <li>Payment and billing information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-[#666] leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-[#666] space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                <p className="text-[#666] leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with service providers who assist us in operating our platform, conducting our business, or serving our users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-[#666] leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-[#666] leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-[#666] space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
                <p className="text-[#666] leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p className="text-[#666] leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@forgeos.com or through our <Link href="/contact" className="text-teal-600 hover:text-teal-700">contact page</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#E8E4DD]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666]">© 2025 ForgeOS. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-[#666]">
            <Link href="/terms" className="hover:text-[#1A1A1A]">Terms of Service</Link>
            <Link href="/contact" className="hover:text-[#1A1A1A]">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
