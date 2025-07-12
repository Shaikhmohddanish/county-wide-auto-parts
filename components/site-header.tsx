"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-md" : "bg-white",
      )}
    >
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <Phone className="h-4 w-4 mr-2" />
            <Link href="tel:8883471455" className="text-sm hover:underline">Call Us: 888 347-1455</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <img 
                src="/website-logo.png" 
                alt="County Wide Auto Parts Logo"
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
              />
              <div className="text-teal-600 font-bold text-xl md:text-2xl">County wide auto parts</div>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center">
            <button
              className="p-2 ml-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center space-x-8 py-3">
            <li>
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/parts" className="text-gray-700 hover:text-teal-600 font-medium">
                Parts Catalog
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-gray-700 hover:text-teal-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/parts"
                  className="block py-2 text-gray-700 hover:text-teal-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Parts Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 text-gray-700 hover:text-teal-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
