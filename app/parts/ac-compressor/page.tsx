import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PartForm } from "@/components/part-form"
import Image from "next/image"

export default function ACCompressorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Used AC-Compressor in millions. Find in our live inventory of more than 72 warehouse.
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col">
              <div className="relative h-[400px] mb-6">
                <Image
                  src="/images/ac-compressor.png?height=400&width=400"
                  alt="AC Compressor"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Millions of Quality Used OEM AC-Compressor</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Our Used AC-Compressor Are Certified & Tested</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Free Shipping And Delivery all USA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Quick Quotes that save you money</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Customer 100% satisfaction guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <PartForm selectedPart="AC Compressor" />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
