"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { brandModels } from "@/lib/brand-models"
import { parts as partsList } from "@/lib/parts"
import { parts as partsData } from "@/lib/parts-data"
import { useRouter } from "next/navigation"

export default function SearchPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    part: ""
  });
  const [models, setModels] = useState<string[]>([]);
  const [showFillMessage, setShowFillMessage] = useState(false);

  // Function to get models for a selected make
  const getModelsForMake = (make: string) => {
    return brandModels[make as keyof typeof brandModels] || []
  }

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Update models when make changes
  useEffect(() => {
    if (formData.make) {
      setModels(getModelsForMake(formData.make))
    } else {
      setModels([])
    }
  }, [formData.make])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.year || !formData.make || !formData.model || !formData.part) {
      setShowFillMessage(true);
      return;
    }
    
    setShowFillMessage(false);
    
    // Find matching part in the parts data
    const partSlug = formData.part.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    const matchingPart = partsData.find(part => part.slug === partSlug || 
                                               part.name.toLowerCase() === formData.part.toLowerCase());
    
    if (matchingPart) {
      // Navigate to the part page if it exists
      router.push(matchingPart.link);
    } else {
      // Navigate to general parts page if specific part page doesn't exist
      router.push('/parts');
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Search" }]} />
      </div>

      <main className="flex-1">
        <section className="py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Search For Auto Parts</h1>

            <div className="max-w-4xl mx-auto">
              {showFillMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-700 rounded-md text-center">
                  Please fill in all fields to search
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="p-6 border rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Year</label>
                      <select 
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Year</option>
                        {Array.from({ length: 122 }, (_, i) => 2023 - i).map((year) => (
                          <option key={year} value={year.toString()}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Make</label>
                      <select 
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Make</option>
                        {Object.keys(brandModels).map((make) => (
                          <option key={make} value={make}>
                            {make}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Model</label>
                      <select 
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Model</option>
                        {models.map((model) => (
                          <option key={model} value={model}>
                            {model}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Part</label>
                      <select 
                        name="part"
                        value={formData.part}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Part</option>
                        {partsList.slice(0, 100).map((part) => (
                          <option key={part} value={part}>
                            {part}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3">
                    Find My Part Now
                  </Button>
                </div>
              </form>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Popular Parts Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {partsData.filter(part => ['engine', 'transmission', 'ac-compressor', 'air-bag'].includes(part.slug)).map(part => (
                    <Link
                      key={part.slug}
                      href={part.link}
                      className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <div className="relative h-16 w-full mb-2">
                        <Image 
                          src={part.image || "/placeholder.svg"} 
                          alt={part.name} 
                          fill 
                          className="object-contain"
                        />
                      </div>
                      <div className="font-medium">{part.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
