import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A]">
      <PublicNavbar />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-[#1A1A1A]">Privacy Policy</h1>
          <p className="text-sm text-[#666] mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[#444]">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  request a demo, or contact us for support. This may include your name, email address, 
                  phone number, business name, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">2. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">3. Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy or as required by law. We may 
                  share information with service providers who assist us in operating our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">4. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">5. Cookies and Tracking</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and 
                  hold certain information. You can instruct your browser to refuse all cookies or to 
                  indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">6. Your Rights</h2>
                <p className="leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">7. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@forgeos.com or through our contact page.
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
