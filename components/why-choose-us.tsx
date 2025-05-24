import { Shield, Book, Clock, ThumbsUp, Award, Search } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="h-10 w-10 text-teal-600" />,
      title: "Reliable Information",
      description: "All our part information is thoroughly researched and verified for accuracy.",
    },
    {
      icon: <Book className="h-10 w-10 text-teal-600" />,
      title: "Comprehensive Database",
      description: "Access detailed specifications for thousands of auto parts across all major makes and models.",
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-600" />,
      title: "Up-to-Date Content",
      description: "Our information is regularly updated to include the latest parts and vehicle models.",
    },
    {
      icon: <Search className="h-10 w-10 text-teal-600" />,
      title: "Easy Search",
      description: "Find the exact part information you need with our intuitive search tools.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-teal-600" />,
      title: "Expert Resources",
      description: "Access guides and resources created by automotive professionals.",
    },
    {
      icon: <Award className="h-10 w-10 text-teal-600" />,
      title: "Trusted Source",
      description: "Relied upon by mechanics, DIY enthusiasts, and auto parts professionals nationwide.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose County wide auto parts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the most comprehensive and accurate auto parts information to help you make
            informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
