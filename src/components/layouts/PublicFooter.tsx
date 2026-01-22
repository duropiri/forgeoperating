"use client";

import Link from "next/link";
import Image from "next/image";

// All 9 features
const allFeatures = [
  { slug: "functional-website", title: "Functional Website" },
  { slug: "missed-call-text-back", title: "Missed Call Text Back" },
  { slug: "all-in-one-inbox", title: "All-In-One Inbox" },
  { slug: "business-phone", title: "Business Phone" },
  { slug: "local-seo", title: "Local SEO" },
  { slug: "review-funnel", title: "5-Star Magic Review Funnel" },
  { slug: "marketing-campaigns", title: "One-Click Marketing Campaigns" },
  { slug: "lead-follow-up", title: "Automated Lead Follow-Up" },
  { slug: "database-reactivation", title: "Database Reactivation" },
];

export default function PublicFooter() {
  return (
    <footer className="py-12 px-6 border-t border-[#E5E2DB] bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2.5 mb-4 cursor-pointer">
                <Image
                  src="/fog-icon.png"
                  alt="Forge Operating Group"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-[#1A1A1A]">
                    Forge Operating
                  </span>
                  <span className="text-xs font-semibold text-teal-500 tracking-wide">
                    GROUP
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-[#666] leading-relaxed">
              AI-powered marketing systems for serious operators. Contractors,
              dentists, med spas, and multi-location businesses.
            </p>
          </div>

          {/* Features Column 1 */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#1A1A1A]">
              Systems
            </h4>
            <ul className="space-y-2 text-sm text-[#666]">
              {allFeatures.slice(0, 5).map((feature) => (
                <li key={feature.slug}>
                  <Link
                    href={`/features/${feature.slug}`}
                    className="hover:text-[#1A1A1A] transition-colors"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Column 2 */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#1A1A1A]">
              More Features
            </h4>
            <ul className="space-y-2 text-sm text-[#666]">
              {allFeatures.slice(5).map((feature) => (
                <li key={feature.slug}>
                  <Link
                    href={`/features/${feature.slug}`}
                    className="hover:text-[#1A1A1A] transition-colors"
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#1A1A1A]">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#666]">
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-[#1A1A1A] transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#1A1A1A] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#1A1A1A] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#1A1A1A] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#1A1A1A] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-[#1A1A1A] transition-colors"
                >
                  Team Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E5E2DB]">
          <p className="text-sm text-[#666]">
            © 2025 Forge Operating Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#666]">
            <Link
              href="/privacy"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
