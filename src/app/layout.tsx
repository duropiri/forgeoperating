import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { TRPCProvider } from "@/lib/trpc/react";
import { ThemeProvider } from "@/contexts/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Forge Operating Group | AI Marketing Systems for Contractors, Dentists & Med Spas",
  description:
    "AI-powered marketing systems for serious operators. Contractors, dentists, med spas, and multi-location businesses trust Forge Operating Group to generate customers on autopilot.",
  keywords:
    "AI marketing systems, contractor marketing, dentist marketing, med spa marketing, local business automation, review automation, lead generation, multi-location business",
  authors: [{ name: "Forge Operating Group" }],
  metadataBase: new URL("https://forgeoperatinggroup.com"),
  openGraph: {
    type: "website",
    url: "https://forgeoperatinggroup.com/",
    title: "Forge Operating Group | AI Marketing Systems for Serious Operators",
    description:
      "AI-powered marketing systems for contractors, dentists, med spas, and multi-location businesses. Generate customers on autopilot.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Operating Group | AI Marketing Systems for Serious Operators",
    description:
      "AI-powered marketing systems for contractors, dentists, med spas, and multi-location businesses. Generate customers on autopilot.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/fog-icon.png",
    apple: "/fog-icon.png",
  },
  themeColor: "#14B8A6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <TRPCProvider>
          <ThemeProvider defaultTheme="dark" switchable={false}>
            <TooltipProvider>
              <Toaster position="top-right" theme="dark" />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </TRPCProvider>

        {/* GoHighLevel embed script */}
        <Script
          src="https://link.msgsndr.com/js/embed.js"
          strategy="afterInteractive"
        />

        {/* Analytics */}
        {process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT &&
          process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID && (
            <Script
              src={`${process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT}/umami`}
              data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID}
              strategy="lazyOnload"
            />
          )}
      </body>
    </html>
  );
}
