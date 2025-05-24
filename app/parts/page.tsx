import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { parts } from "@/lib/parts-data";
export default function PartsPage() {
  
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="bg-gray-100 py-3 md:py-4">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-xs md:text-sm font-medium">
                Free Shipping* | 30 Days Return & Refund Warranty*
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Parts Catalog</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {parts.map((part, index) => (
              <Link key={index} href={part.link} className="block">
                <div className="border border-gray-300 rounded p-3 md:p-4 hover:border-teal-500 transition-colors flex flex-col items-center h-full">
                  <div className="relative h-16 w-16 md:h-20 md:w-20 mb-2">
                    <Image src={part.image || "/placeholder.svg"} alt={part.name} fill className="object-contain" />
                  </div>
                  <span className="text-teal-600 text-center text-sm md:text-base">{part.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
