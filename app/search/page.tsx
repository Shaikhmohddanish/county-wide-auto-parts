import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-teal-600 font-bold text-xl">
              County wide auto parts
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-teal-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-500 transition-colors">
              About Us
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
              Search By Parts
            </Link>
            <Link href="/junkyards" className="text-gray-700 hover:text-teal-500 transition-colors">
              Junkyards Near Me
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-teal-500 transition-colors">
              Blogs
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-700">Free Shipping*</p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Search For Auto Parts</h1>

            <div className="max-w-4xl mx-auto">
              <div className="p-6 border rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Year</label>
                      <select className="w-full p-2 border rounded">
                        <option>Select Year</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Make</label>
                      <select className="w-full p-2 border rounded">
                        <option>Select Make</option>
                        <option>Toyota</option>
                        <option>Honda</option>
                        <option>Ford</option>
                        <option>Chevrolet</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Model</label>
                      <select className="w-full p-2 border rounded">
                        <option>Select Model</option>
                        <option>Camry</option>
                        <option>Corolla</option>
                        <option>RAV4</option>
                        <option>Civic</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Part</label>
                      <select className="w-full p-2 border rounded">
                        <option>Select Part</option>
                        <option>Engine</option>
                        <option>Transmission</option>
                        <option>Alternator</option>
                        <option>Starter</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3">
                    Find My Part Now
                  </Button>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Popular Parts Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    href="/category/engines"
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <div className="font-medium">Engines</div>
                  </Link>
                  <Link
                    href="/category/transmissions"
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <div className="font-medium">Transmissions</div>
                  </Link>
                  <Link
                    href="/category/body-parts"
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <div className="font-medium">Body Parts</div>
                  </Link>
                  <Link
                    href="/category/electrical"
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <div className="font-medium">Electrical</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 border-t">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">#1 Online Car Quality Parts Locator!</h3>
            <p className="text-sm text-gray-600">
              countywideauto.com has helped millions of customers over the decades locate hard to find car parts
              around the United States.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Guaranteed Customer Service</h3>
            <p className="text-sm text-gray-600">
              100% customer service guaranteed! Finding any used parts will be quick and easy with us.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
