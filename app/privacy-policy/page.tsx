import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

              <div className="prose max-w-none">
                <p className="text-gray-600 mb-8">Last updated: July 12, 2025</p>

                <p className="mb-6">
                  At County wide auto parts ("we", "our", "us"), accessible from https://www.countywideauto.com/, we value your privacy. 
                  This Privacy Policy outlines how we collect, use, store, and protect your information when you visit our website 
                  or interact with our services.
                </p>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    We may collect the following types of information:
                  </p>

                  <h3 className="text-lg font-semibold mb-2">a. Personal Information</h3>
                  <p className="mb-4">
                    When you contact us, place an order, or fill out a form, we may collect:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Shipping and billing address</li>
                    <li>Payment information (processed securely via third-party providers)</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-2">b. Non-Personal Information</h3>
                  <p className="mb-4">
                    We automatically collect non-identifying information including:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Browser type</li>
                    <li>IP address</li>
                    <li>Device type</li>
                    <li>Pages visited and time spent on the site</li>
                    <li>Referring URL</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your order or inquiry</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Provide customer service and support</li>
                    <li>Send marketing emails (with your consent)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">3. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">
                    We use cookies and similar technologies to enhance your experience. Cookies help us:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Remember your preferences</li>
                    <li>Understand website usage</li>
                    <li>Deliver relevant ads (if applicable)</li>
                  </ul>
                  <p className="mb-4">
                    You can choose to disable cookies in your browser settings.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">4. Third-Party Services</h2>
                  <p className="mb-4">
                    We may share your data with trusted third parties who help us operate our website or conduct our business, such as:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Payment processors (e.g., Stripe, PayPal)</li>
                    <li>Shipping and delivery providers</li>
                    <li>Analytics tools (e.g., Google Analytics)</li>
                    <li>Email marketing services</li>
                  </ul>
                  <p className="mb-4">
                    These third parties are obligated to keep your data secure and use it only for the services we've requested.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">5. Data Security</h2>
                  <p className="mb-4">
                    We take appropriate security measures to protect your personal information from unauthorized access, 
                    alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">6. Your Rights and Choices</h2>
                  <p className="mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction or deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request restriction or objection to data processing</li>
                  </ul>
                  <p className="mb-4">
                    To exercise any of these rights, please contact us at support@countywideauto.com.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">7. Children's Privacy</h2>
                  <p className="mb-4">
                    Our website is not intended for children under 13, and we do not knowingly collect 
                    personal information from children.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy periodically. The revised version will be 
                    posted on this page with the updated date.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">9. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
                  </p>
                  <p className="mb-4">
                    County wide auto parts
                    <br />
                    Email: support@countywideauto.com
                    <br />
                    Phone: 888 419-4055
                    <br />
                    Address: 3815 N Lewis Ave Tulsa, OK 74110
                    <br />
                    Website: https://www.countywideauto.com/
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
