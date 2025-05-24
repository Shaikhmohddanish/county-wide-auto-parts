import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PartForm } from "@/components/part-form";
import Image from "next/image";
import { parts } from "@/lib/parts-data";

interface Part {
  slug: string;
  name: string;
  image: string;
  link: string;
}

interface PartPageProps {
  params: {
    part: string;
  };
}

export default function PartPage({ params }: PartPageProps) {
  const part = parts.find((p) => p.slug === params.part);  
  if (!part) {
    // Not found fallback, you can use Next.js's notFound() for a 404 page if you want
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Part Not Found</h1>
            <p className="mb-4">Sorry, we couldn’t find the requested part.</p>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
            Used {part.slug} in millions. Find in our live inventory of more than 72 warehouse.
          </h1>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
            <div className="flex flex-col">
              <div className="relative h-[300px] md:h-[400px] mb-4 md:mb-6">
                <Image
                  src={part.image}
                  alt={part.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg">
                <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Millions of Quality Used OEM {part.name}
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Our Used {part.name} Are Certified & Tested</span>
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
              <PartForm selectedPart={part.name} />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
