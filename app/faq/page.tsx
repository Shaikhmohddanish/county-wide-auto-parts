"use client"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumb } from "@/components/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function FAQPage() {
  const faqCategories = [
    { id: "general", name: "General Information" },
    { id: "parts", name: "Parts & Specifications" },
    { id: "compatibility", name: "Vehicle Compatibility" },
    { id: "technical", name: "Technical Information" },
    { id: "resources", name: "Resources & Guides" },
    { id: "contact", name: "Contact & Support" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "FAQ" }]} />

          <div className="max-w-4xl mx-auto mt-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to the most common questions about auto parts, specifications, compatibility, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <Button
                    variant="link"
                    className="text-teal-600 hover:text-teal-700"
                    onClick={() => document.getElementById(category.id)?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Questions
                  </Button>
                </div>
              ))}
            </div>

            <div className="space-y-12">
              <section id="general">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  General Information
                </h2>
                <div className="bg-white rounded-lg shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        What is County wide auto parts?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          County wide auto parts is a comprehensive online resource for auto parts information. We provide
                          detailed specifications, compatibility information, technical guides, and resources for a wide
                          range of auto parts across all major vehicle makes and models. Our goal is to help vehicle
                          owners, mechanics, and automotive enthusiasts find accurate and reliable information about the
                          parts they need.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        How do I navigate the website?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Our website is organized to make finding information easy. You can browse parts by category,
                          search for specific parts using the search bar, or look up parts by vehicle make and model.
                          Each part page contains detailed specifications, compatibility information, technical details,
                          and related resources. The main navigation menu at the top of the page provides quick access
                          to all sections of our website.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        Is the information on your website accurate?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          We strive to provide the most accurate and up-to-date information possible. Our data is
                          sourced from manufacturer specifications, industry databases, and technical documentation. We
                          regularly review and update our information to ensure accuracy. However, we always recommend
                          verifying critical specifications with your vehicle's service manual or a professional
                          mechanic, especially for complex repairs or installations.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              <section id="parts">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  Parts & Specifications
                </h2>
                <div className="bg-white rounded-lg shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        What information do you provide about auto parts?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          For each auto part, we provide detailed specifications including dimensions, material,
                          function, compatibility with vehicle makes and models, installation guides, troubleshooting
                          tips, and technical diagrams. We also include information about OEM part numbers, common
                          issues, and maintenance recommendations.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        What is the difference between OEM and aftermarket parts?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          OEM (Original Equipment Manufacturer) parts are made by the same manufacturer that produced
                          the original parts for your vehicle. These parts are identical to the ones that came with your
                          vehicle when it was new. Aftermarket parts are made by companies other than the original
                          manufacturer. They may offer similar or sometimes improved performance, often at a lower cost.
                          However, quality can vary significantly among aftermarket brands.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        How do I find specifications for a specific part?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          You can find specifications for a specific part by using our search function or by browsing
                          through our parts categories. Once you locate the part you're interested in, click on it to
                          view its detailed specifications page. If you're looking for a part for a specific vehicle,
                          you can also search by make and model to find compatible parts and their specifications.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              <section id="compatibility">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  Vehicle Compatibility
                </h2>
                <div className="bg-white rounded-lg shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        How do I know if a part is compatible with my vehicle?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Each part in our database includes a compatibility list showing which vehicle makes, models,
                          and years it fits. You can also use our vehicle selector tool to enter your vehicle's
                          information and see all compatible parts. For the most accurate compatibility information,
                          always check your vehicle's VIN number and consult with a professional mechanic if you're
                          unsure.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        Can parts from different vehicle models be interchangeable?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Yes, in many cases parts can be interchangeable between different vehicle models, especially
                          if they share the same platform or are made by the same manufacturer. Our database includes
                          information about cross-compatibility between different makes and models. However, even if a
                          part physically fits, there may be electrical or computer system differences that affect
                          functionality, so always verify complete compatibility before installation.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        What if my vehicle has been modified?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Vehicle modifications can affect part compatibility. Our compatibility information is based on
                          standard factory specifications. If your vehicle has been modified (engine swaps, suspension
                          lifts, performance upgrades, etc.), you may need to consult with a specialist or the
                          manufacturer of the modification to determine which parts will work with your specific setup.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              <section id="technical">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  Technical Information
                </h2>
                <div className="bg-white rounded-lg shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        Do you provide installation guides?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Yes, we provide basic installation guides for many parts in our database. These guides include
                          step-by-step instructions, tools required, and important precautions. For more complex
                          installations, we recommend consulting a professional mechanic or your vehicle's service
                          manual. Some of our part pages also include links to video tutorials and additional resources.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        Where can I find technical diagrams?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Technical diagrams are available on most of our part detail pages. These diagrams show the
                          part's location in the vehicle, its components, and how it connects to other parts. You can
                          also find exploded view diagrams for many assemblies, which show all the individual components
                          and how they fit together. For additional technical diagrams, check our resources section or
                          contact our support team.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        Do you provide troubleshooting information?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Yes, we include troubleshooting information for many common issues related to specific parts.
                          This includes symptoms of failure, diagnostic steps, and potential solutions. Our
                          troubleshooting guides are designed to help you identify problems and determine whether a part
                          needs to be replaced or if there might be another issue affecting its performance.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              <section id="resources">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  Resources & Guides
                </h2>
                <div className="bg-white rounded-lg shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        What additional resources do you offer?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          In addition to our parts database, we offer a variety of resources including maintenance
                          guides, repair tutorials, technical articles, and educational content about automotive systems
                          and components. We also provide downloadable PDFs with specifications, compatibility charts,
                          and technical diagrams for many parts. Our blog features articles on common repairs,
                          maintenance tips, and automotive technology.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        Do you have video tutorials?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Yes, we provide links to video tutorials for many common repairs and part replacements. These
                          videos offer visual guidance that complements our written installation guides. You can find
                          these videos on our part detail pages or in our resources section. We also have a YouTube
                          channel with additional automotive repair and maintenance videos.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        How often is your content updated?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          We regularly review and update our content to ensure accuracy and relevance. New parts, guides, and resources are added as they become available, and we update existing information based on the latest manufacturer data and industry standards. If you notice outdated information or have suggestions, please contact our support team.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  Contact & Support
                </h2>
                <div className="bg-white rounded-lg shadow-sm">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        How can I contact County wide auto parts for support?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          You can reach our support team through the contact form on our website or by emailing us at{" "}
                          <a
                            href="mailto:support@countywideauto.com"
                            className="text-teal-600 underline"
                          >
                            support@countywideauto.com
                          </a>
                          . We aim to respond to all inquiries within 1-2 business days.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        Can I suggest a new FAQ or resource?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">
                          Absolutely! We welcome suggestions for new FAQs, guides, or resources. Please use our contact
                          form or email us with your ideas, and our team will review your submission for inclusion on
                          the site.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
