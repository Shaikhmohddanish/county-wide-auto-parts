import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-10 md:py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Detailed Auto Part Information?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6 md:mb-8">
          Browse our extensive catalog of auto parts information or let us help you find exactly what you need for your
          vehicle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link href="/parts">Browse Parts Catalog</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-teal-700 hover:text-white"
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
