import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Ford F-150 Owner",
      content:
        "I was skeptical about buying used auto parts online, but QuickSnap exceeded my expectations. The engine I purchased was in excellent condition and arrived faster than expected. Their customer service was outstanding throughout the process.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Toyota Camry Owner",
      content:
        "After a minor accident, I needed a new bumper for my Camry. QuickSnap had exactly what I needed at half the price of the dealership. The part matched perfectly and the shipping was free. I'll definitely be using them again!",
      rating: 5,
    },
    {
      id: 3,
      name: "David Martinez",
      role: "Professional Mechanic",
      content:
        "As a mechanic, I need reliable parts at competitive prices. QuickSnap has become my go-to source for quality used OEM parts. Their warranty policy gives me confidence, and my customers are always satisfied with the results.",
      rating: 4,
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with
            County wide auto parts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
            >
              <div className="flex mb-3 md:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 md:h-5 md:w-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="flex-grow">
                <p className="text-gray-600 italic mb-4 text-sm md:text-base">"{testimonial.content}"</p>
              </blockquote>
              <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
