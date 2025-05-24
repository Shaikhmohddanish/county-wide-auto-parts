"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<null | "success" | "error">(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterStatus(null);
    try {
      // Use FormData for compatibility with your proxy route
      const formData = new FormData();
      formData.append("newsletterEmail", newsletterEmail);

      const response = await fetch("/api/google-form-proxy", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Submission failed");
      setNewsletterStatus("success");
      setNewsletterEmail("");
    } catch (err) {
      setNewsletterStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-teal-600 rounded-lg p-4 md:p-6 mb-8 md:mb-12 -mt-16 md:-mt-20 shadow-lg">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-white/80 text-sm md:text-base">
                Stay updated with our latest information, new arrivals, and helpful auto part guides.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                required
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                disabled={isSubmitting}
              />
              <Button
                className="bg-white text-teal-600 hover:bg-gray-100 whitespace-nowrap"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </Button>
              {newsletterStatus === "success" && (
                <span className="text-green-200 text-xs ml-2 mt-1">Subscribed!</span>
              )}
              {newsletterStatus === "error" && (
                <span className="text-red-200 text-xs ml-2 mt-1">Error. Try again.</span>
              )}
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">County wide auto parts</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Your trusted source for high-quality used OEM auto parts with the best information and resources for your
              vehicle needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/parts" className="text-gray-400 hover:text-white">
                  Parts Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/warranty-policies" className="text-gray-400 hover:text-white">
                  Warranty Policies
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Auto Parts Lane, Anytown, USA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">support@countywideauto.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Business Hours:</h4>
              <p className="text-gray-400">Monday - Friday: 8AM - 6PM</p>
              <p className="text-gray-400">Saturday: 9AM - 4PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-4 md:pt-6 mt-4 md:mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} County wide auto parts. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white text-xs md:text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
