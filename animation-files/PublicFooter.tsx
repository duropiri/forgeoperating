"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const linkHoverVariants = {
  rest: { x: 0 },
  hover: { x: 4, color: "#1A1A1A" },
};

export default function PublicFooter() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-12 px-6 border-t border-[#E5E2DB] bg-[#F7F4EF] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link href="/">
              <motion.div
                className="flex items-center gap-2.5 mb-4 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/fog-icon.png"
                    alt="Forge Operating Group"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </motion.div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-[#1A1A1A]">
                    Forge Operating
                  </span>
                  <span className="text-xs font-semibold text-teal-500 tracking-wide">
                    GROUP
                  </span>
                </div>
              </motion.div>
            </Link>
            <p className="text-sm text-[#666] leading-relaxed">
              AI-powered marketing systems for serious operators. Contractors,
              dentists, med spas, and multi-location businesses.
            </p>
          </motion.div>

          {/* Features Column 1 */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-sm mb-4 text-[#1A1A1A]">
              Systems
            </h4>
            <ul className="space-y-2 text-sm text-[#666]">
              {allFeatures.slice(0, 5).map((feature, idx) => (
                <motion.li
                  key={feature.slug}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Link href={`/features/${feature.slug}`}>
                    <motion.span
                      variants={linkHoverVariants}
                      className="inline-block transition-colors cursor-pointer"
                    >
                      {feature.title}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Features Column 2 */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-sm mb-4 text-[#1A1A1A]">
              More Features
            </h4>
            <ul className="space-y-2 text-sm text-[#666]">
              {allFeatures.slice(5).map((feature, idx) => (
                <motion.li
                  key={feature.slug}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Link href={`/features/${feature.slug}`}>
                    <motion.span
                      variants={linkHoverVariants}
                      className="inline-block transition-colors cursor-pointer"
                    >
                      {feature.title}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-sm mb-4 text-[#1A1A1A]">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#666]">
              {[
                { href: "/#testimonials", label: "Reviews" },
                { href: "/#faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/dashboard", label: "Team Login" },
              ].map((link) => (
                <motion.li
                  key={link.href}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Link href={link.href}>
                    <motion.span
                      variants={linkHoverVariants}
                      className="inline-block transition-colors cursor-pointer"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E5E2DB]"
        >
          <p className="text-sm text-[#666]">
            © 2025 Forge Operating Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#666]">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/privacy"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/terms"
                className="hover:text-[#1A1A1A] transition-colors"
              >
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
