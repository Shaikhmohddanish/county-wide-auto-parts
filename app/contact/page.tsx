import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
                  <p className="text-gray-600 mb-6">
                    Have questions about our products or services? Fill out the form and our team will get back to you
                    as soon as possible.
                  </p>

                  <div className="space-y-4 mb-6">                      <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Our Location</h3>
                        <p className="text-gray-600">3815 N Lewis Ave Tulsa, OK 74110</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone Number</h3>
                        <a
                          href="tel:8884194055"
                          className="text-yellow-500 text-lg font-bold underline underline-offset-4 hover:text-yellow-400 focus:text-yellow-400 transition-colors duration-150"
                        >
                          888 419-4055
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email Address</h3>
                        <p className="text-gray-600">support@countywideauto.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8AM - 6PM</p>
                        <p className="text-gray-600">Saturday: 9AM - 4PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="block text-sm font-medium">
                          First Name
                        </label>
                        <input id="first-name" placeholder="John" className="w-full p-2 border rounded" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="block text-sm font-medium">
                          Last Name
                        </label>
                        <input id="last-name" placeholder="Doe" className="w-full p-2 border rounded" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="w-full p-2 border rounded"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        className="w-full p-2 border rounded"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-teal-500 hover:bg-teal-600">Send Message</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
