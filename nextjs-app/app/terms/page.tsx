import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      <PublicNavbar />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-[#1A1A1A]">Terms of Service</h1>
          <p className="text-sm text-[#666] mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[#444]">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using ForgeOS services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of the terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">2. Description of Services</h2>
                <p className="leading-relaxed">
                  ForgeOS provides AI-powered marketing automation services for local businesses, including 
                  but not limited to website development, review management, lead follow-up automation, 
                  and customer communication tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">3. User Accounts</h2>
                <p className="leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and 
                  for all activities that occur under your account. You agree to notify us immediately of 
                  any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">4. Payment Terms</h2>
                <p className="leading-relaxed">
                  Services are billed on a monthly basis unless otherwise specified. You agree to pay all 
                  fees associated with your selected plan. Failure to pay may result in suspension or 
                  termination of services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">5. Cancellation Policy</h2>
                <p className="leading-relaxed">
                  You may cancel your subscription at any time. Cancellation will take effect at the end 
                  of your current billing period. No refunds will be provided for partial months of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">6. Acceptable Use</h2>
                <p className="leading-relaxed mb-4">You agree not to use our services to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Send spam or unsolicited communications</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit malicious code or interfere with our systems</li>
                  <li>Engage in fraudulent or deceptive practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">7. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality of our services are owned by ForgeOS and are 
                  protected by copyright, trademark, and other intellectual property laws. You retain 
                  ownership of content you create using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">8. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  ForgeOS shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use of or inability to use our services. Our total 
                  liability shall not exceed the amount paid by you in the twelve months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">9. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify you of any 
                  material changes by posting the new terms on our website. Your continued use of our 
                  services after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">10. Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at legal@forgeos.com 
                  or through our contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
