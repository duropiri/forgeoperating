import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
import { useEffect } from "react";
import { Link } from "wouter";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | ForgeOS";
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      <PublicNavbar />

      {/* Content */}
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Privacy Policy</h1>
          <p className="text-[#666] mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">1. Introduction</h2>
                <p className="text-[#555] leading-relaxed">
                  ForgeOS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI marketing platform and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">2. Information We Collect</h2>
                <p className="text-[#555] leading-relaxed mb-4">We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 text-[#555] space-y-2">
                  <li>Contact information (name, email, phone number, business name)</li>
                  <li>Account credentials</li>
                  <li>Business information and customer data you upload to our platform</li>
                  <li>Communications with us and your customers through our platform</li>
                  <li>Payment and billing information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">3. How We Use Your Information</h2>
                <p className="text-[#555] leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-[#555] space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">4. Information Sharing</h2>
                <p className="text-[#555] leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with service providers who assist us in operating our platform, conducting our business, or serving our users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">5. Data Security</h2>
                <p className="text-[#555] leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">6. Your Rights</h2>
                <p className="text-[#555] leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-[#555] space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">7. Cookies and Tracking</h2>
                <p className="text-[#555] leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">8. Contact Us</h2>
                <p className="text-[#555] leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@forgeos.com or through our <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-medium">contact page</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
