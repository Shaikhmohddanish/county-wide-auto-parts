import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">About County wide auto parts</h1>

            <div className="max-w-3xl mx-auto prose">
              <p>
                County wide auto parts is one of the growing, practically new auto parts dealers in the United States. We
                specialize in providing high-quality used OEM parts for all major vehicle makes and models.
              </p>

              <p>
                Our mission is to make finding and purchasing used auto parts as simple and affordable as possible. We
                understand that vehicle repairs can be stressful and expensive, which is why we offer certified and
                tested parts at prices up to 50% off dealer rates.
              </p>

              <h2>Our Commitment</h2>

              <p>At County wide auto parts, we are committed to:</p>

              <ul>
                <li>Providing only certified and tested used parts</li>
                <li>Offering free shipping and delivery across the USA</li>
                <li>Giving quick quotes that save you money</li>
                <li>Maintaining an extensive inventory of parts for all major makes</li>
                <li>Delivering exceptional customer service</li>
              </ul>

              <h2>Our Network</h2>

              <p>
                We have built a wide network of suppliers and junkyards across the country, allowing us to source even
                the hardest-to-find parts. Whether you need a rear light assembly, quarter panel, or full engine,
                QuickSnap either has it in stock or can arrange to get it for you through our extensive network.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
