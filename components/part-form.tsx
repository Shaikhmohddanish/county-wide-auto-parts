"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"

interface PartFormProps {
  selectedPart?: string
}

export function PartForm({ selectedPart }: PartFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    part: selectedPart || "",
    name: "",
    email: "",
    contact: "",
    zip: "",
  })
  const [showFillMessage, setShowFillMessage] = useState(false)
  const [models, setModels] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Function to get models for a selected make
  const getModelsForMake = (make: string) => {
    return brandModels[make as keyof typeof brandModels] || []
  }

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  // Validate first step
  const validateFirstStep = () => {
    if (!formData.year || !formData.make || !formData.model) {
      setShowFillMessage(true)
      return false
    }
    return true
  }

  // Handle find part button click
  const handleFindPart = () => {
    if (validateFirstStep()) {
      setShowFillMessage(false)
      setStep(2)
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwTGkISdNpa_zlNpHN_DmNaERhCjhHI8paMy80yH0-cd5I4lfQpRvIwNuO3le1DL4Jp/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )
      if (!response.ok) throw new Error("Submission failed")
      setShowSuccess(true)
      setStep(3)
      setFormData({
        year: "",
        make: "",
        model: "",
        part: selectedPart || "",
        name: "",
        email: "",
        contact: "",
        zip: "",
      })
      setTimeout(() => {
        setStep(1)
        setShowSuccess(false)
      }, 3000)
    } catch (err) {
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
      <div className="bg-teal-500 text-white p-3 md:p-4 text-center text-lg md:text-xl font-semibold">
        <h2>Find {selectedPart || "Part"} Now</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
        {showFillMessage && <p className="text-red-500 font-bold text-center">Fill in all Details</p>}

        {step === 1 && (
          <div className="space-y-3 md:space-y-4">
            <div>
              <select
                name="year"
                id="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-2 border rounded text-black text-sm md:text-base"
                required
              >
                <option value="">Select Year</option>
                {Array.from({ length: 122 }, (_, i) => 2023 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="make"
                id="make"
                value={formData.make}
                onChange={handleChange}
                className="w-full p-2 border rounded text-black text-sm md:text-base"
                required
              >
                <option value="">Select Make</option>
                {Object.keys(brandModels).map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="model"
                id="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full p-2 border rounded text-black text-sm md:text-base"
                required
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
              <select
                name="part"
                id="part"
                value={formData.part}
                onChange={handleChange}
                className="w-full p-2 border rounded text-black text-sm md:text-base"
                disabled={!!selectedPart}
                required
              >
                <option value={selectedPart || ""}>{selectedPart || "Select Part"}</option>
                {!selectedPart &&
                  [
                    "A/C Compressor",
                    "Alternator",
                    "Axle Assembly",
                    "Brake Caliper",
                    "Catalytic Converter",
                    "Engine",
                    "Fuel Pump",
                    "Headlight Assembly",
                    "Power Steering Pump",
                    "Radiator",
                    "Starter",
                    "Transmission",
                  ].map((part) => (
                    <option key={part} value={part}>
                      {part}
                    </option>
                  ))}
              </select>
            </div>

            <Button
              type="button"
              onClick={handleFindPart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 md:py-3"
            >
              Find My Part Now
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center mb-3 md:mb-4">
              <p className="text-base md:text-lg text-black">
                You have selected a <span className="text-teal-500 font-semibold">{formData.year}</span>{" "}
                <span className="text-teal-500 font-semibold">{formData.make}</span>{" "}
                <span className="text-teal-500 font-semibold">{formData.model}</span>{" "}
                <span className="text-teal-500 font-semibold">{formData.part}</span>
                <br />
                Complete the fields to get detailed information.
              </p>
            </div>

            <div>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border rounded text-black text-sm md:text-base"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border rounded text-black text-sm md:text-base"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="contact"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact"
                className="w-full p-2 border rounded text-black text-sm md:text-base"
                pattern="[0-9]{10}"
                title="Please enter exactly 10 digits"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="zip"
                id="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip Code"
                className="w-full p-2 border rounded text-black text-sm md:text-base"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 md:py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Get Part Information"}
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 md:space-y-4">
            <div className="text-center">
              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-3 md:p-4 rounded-md">
                  <p className="font-bold">Thank you for your request!</p>
                  <p className="mt-2">
                    We've received your inquiry about the {formData.year} {formData.make} {formData.model}{" "}
                    {formData.part}. Our team will compile detailed information and send it to your email shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </form>

      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
            <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-t-2 border-b-2 border-teal-500 mx-auto mb-3 md:mb-4"></div>
            <p className="text-base md:text-lg font-semibold text-black">Processing your request...</p>
          </div>
        </div>
      )}
    </div>
  )
}
