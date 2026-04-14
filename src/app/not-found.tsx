import Link from "next/link";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/layouts/PublicNavbar";
import PublicFooter from "@/components/layouts/PublicFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <PublicNavbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4 text-[#0A0A0A]">Page Not Found</h2>
          <p className="text-lg text-[#3B3B3B] mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-[#D1D5DB] text-[#0A0A0A] hover:bg-gray-200 bg-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
