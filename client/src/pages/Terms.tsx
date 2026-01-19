import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | ForgeOS";
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-[#666] mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-[#666] leading-relaxed">
                  By accessing or using ForgeOS services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p className="text-[#666] leading-relaxed">
                  ForgeOS provides an AI-powered marketing automation platform for local businesses, including but not limited to website creation, review management, lead follow-up automation, and customer communication tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
                <p className="text-[#666] leading-relaxed">
                  You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
                <p className="text-[#666] leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-[#666] space-y-2">
                  <li>Use our services for any unlawful purpose</li>
                  <li>Send spam or unsolicited messages</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services to harass, abuse, or harm others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
                <p className="text-[#666] leading-relaxed">
                  Subscription fees are billed monthly or annually as selected. All fees are non-refundable except as required by law. We reserve the right to change our pricing with 30 days notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Cancellation</h2>
                <p className="text-[#666] leading-relaxed">
                  You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period. No refunds will be provided for partial months.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                <p className="text-[#666] leading-relaxed">
                  All content, features, and functionality of ForgeOS are owned by us and are protected by copyright, trademark, and other intellectual property laws. You retain ownership of your data and content uploaded to our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="text-[#666] leading-relaxed">
                  ForgeOS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-[#666] leading-relaxed">
                  Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
                <p className="text-[#666] leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify you of significant changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
                <p className="text-[#666] leading-relaxed">
                  For questions about these Terms of Service, please contact us at legal@forgeos.com or through our <Link href="/contact" className="text-teal-600 hover:text-teal-700">contact page</Link>.
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
            <Link href="/privacy" className="hover:text-[#1A1A1A]">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-[#1A1A1A]">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
