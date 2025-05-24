import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FindPartForm } from "@/components/find-part-form"
import { Button } from "@/components/ui/button"
import { Testimonials } from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { Check, ArrowRight } from "lucide-react"

export default function Home() {
  const popularParts = [
    { name: "Engines", image: "/engine.png?height=400&width=300", link: "/parts/engine" },
    { name: "Transmissions", image: "/images/transmission.png?height=400&width=300", link: "/parts/transmission" },
    { name: "AC Compressors", image: "/ac-compressor.png?height=400&width=300", link: "/parts/ac-compressor" },
    { name: "Transfer Cases", image: "/images/transfer-case.jpg?height=400&width=300", link: "/parts/transfer-case" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/slider-home.jpeg"
              alt="Auto parts"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 w-full">
              {/* Desktop/Tablet: Show 2 columns */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                    Quality Used <span className="text-teal-400">Auto Parts</span> Information
                  </h1>
                  <p className="text-lg md:text-xl mb-6 text-gray-200">
                    Find comprehensive information about auto parts, specifications, and compatibility for your vehicle.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-start gap-4">
                    <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 w-full sm:w-auto">
                      <Link href="/parts">Browse Parts</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-black hover:bg-white/10 hover:text-white font-semibold w-full sm:w-auto"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-white/20 mt-6 md:mt-0 max-w-md w-full mx-auto">
                  <FindPartForm />
                </div>
              </div>
              {/* Mobile: Show only form */}
              <div className="flex md:hidden justify-center items-center w-full min-h-[400px]">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 w-full max-w-md mx-auto">
                  <FindPartForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-4 md:p-6">
                <div className="bg-teal-100 rounded-full p-4 inline-flex mb-4">
                  <Check className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Comprehensive Database</h3>
                <p className="text-gray-600">
                  Access our extensive database of auto parts with detailed specifications and compatibility
                  information.
                </p>
              </div>
              <div className="text-center p-4 md:p-6">
                <div className="bg-teal-100 rounded-full p-4 inline-flex mb-4">
                  <Check className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Expert Information</h3>
                <p className="text-gray-600">
                  Get expert advice and detailed information about auto parts and their functions.
                </p>
              </div>
              <div className="text-center p-4 md:p-6">
                <div className="bg-teal-100 rounded-full p-4 inline-flex mb-4">
                  <Check className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Vehicle Compatibility</h3>
                <p className="text-gray-600">
                  Find parts that are compatible with your specific vehicle make and model.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Parts Section */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Popular Parts Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our most popular categories or use our search to find information about specific parts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {popularParts.map((part, index) => (
                <Link key={index} href={part.link} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg">
                    <div className="relative h-40 md:h-48">
                      <Image src={part.image || "/placeholder.svg"} alt={part.name} fill className="object-cover" />
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <h3 className="text-base md:text-lg font-semibold text-gray-800">{part.name}</h3>
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-teal-600 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-6 md:mt-8">
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/parts">View All Categories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  )
}
