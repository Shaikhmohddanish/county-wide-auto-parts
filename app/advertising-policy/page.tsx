import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AdvertisingPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Advertising Policy" }]} />

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-6">Advertising Policy</h1>

              <div className="prose max-w-none">
                <p className="text-gray-600 mb-8">Last updated: July 12, 2025</p>

                <p className="mb-6">
                  At County wide auto parts ("we", "our", "us"), located at https://www.countywideauto.com/, we are committed to 
                  maintaining a trustworthy and transparent experience for our users. This Advertisement Policy explains how we 
                  handle advertising, affiliate partnerships, sponsored content, and third-party promotions on our website.
                </p>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">1. Types of Advertising</h2>
                  <p className="mb-4">
                    We may display the following types of advertising on our website:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">
                      <strong>Display Ads:</strong> Banners, sidebar ads, or in-content ads served by third-party ad networks.
                    </li>
                    <li className="mb-2">
                      <strong>Sponsored Content:</strong> Articles or product features paid for by advertisers, clearly labeled as "Sponsored."
                    </li>
                    <li className="mb-2">
                      <strong>Affiliate Links:</strong> Product links that may earn us a commission if you click or make a purchase.
                    </li>
                    <li className="mb-2">
                      <strong>Promotional Offers:</strong> Deals or discounts offered by third-party vendors, with or without compensation.
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">2. Advertising Standards</h2>
                  <p className="mb-4">
                    We aim to ensure all ads shown on our site are:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4">
                    <li>Relevant to our audience (automotive products, services, or related topics)</li>
                    <li>Non-intrusive and clearly distinguishable from editorial content</li>
                    <li>Honest, accurate, and not misleading</li>
                    <li>Free from malware, pop-ups, or deceptive redirects</li>
                  </ul>
                  
                  <p className="mb-4">We do not allow:</p>
                  
                  <ul className="list-disc pl-6 mb-4">
                    <li>Offensive, discriminatory, or inappropriate content</li>
                    <li>Ads promoting illegal or unethical products</li>
                    <li>Ads that compromise user privacy or contain malicious code</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">3. Affiliate Disclosure</h2>
                  <p className="mb-4">
                    Some pages or links on https://www.countywideauto.com/ may include affiliate links. This means we may earn 
                    a small commission if you purchase a product or service through the link—at no additional cost to you.
                  </p>
                  <p className="mb-4">
                    We only promote products or services that we believe are valuable to our customers, and all affiliate links 
                    are used with full transparency.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">4. Sponsored Content</h2>
                  <p className="mb-4">
                    Sponsored content may appear on our site in the form of product reviews, blog posts, or featured listings. 
                    Such content will always be clearly marked with labels such as:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4">
                    <li>"Sponsored"</li>
                    <li>"Paid Partnership"</li>
                    <li>"In collaboration with [Brand Name]"</li>
                  </ul>
                  
                  <p className="mb-4">
                    Sponsored content does not influence our editorial standards or opinions.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">5. Third-Party Advertisers</h2>
                  <p className="mb-4">
                    We may use third-party advertising networks like Google Ads or Meta Ads to serve content. 
                    These advertisers may collect data such as:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4">
                    <li>IP address</li>
                    <li>Cookies and device identifiers</li>
                    <li>User behavior on our site</li>
                  </ul>
                  
                  <p className="mb-4">
                    We encourage users to review our Privacy Policy for more on how we handle data and how third parties may use it.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">6. User Control</h2>
                  <p className="mb-4">
                    You can control some aspects of advertising through your browser or privacy settings, such as:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-4">
                    <li>Blocking cookies</li>
                    <li>Using ad blockers</li>
                    <li>Opting out of personalized ads via tools like the Network Advertising Initiative (NAI) or Digital Advertising Alliance (DAA)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">7. Reporting Advertising Concerns</h2>
                  <p className="mb-4">
                    If you come across any advertising on our site that you believe violates this policy or is inappropriate, 
                    please contact us immediately at:
                  </p>
                  
                  <p className="mb-4">
                    Email: support@countywideauto.com
                    <br />
                    Phone: 888 419-4055
                    <br />
                    Address: 3815 N Lewis Ave Tulsa, OK 74110
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">8. Changes to This Policy</h2>
                  <p className="mb-4">
                    We may update this Advertisement Policy periodically. Changes will be reflected with the updated date at the top of this page.
                  </p>
                  
                  <p className="mb-4">
                    Thank you for trusting County wide auto parts. We're committed to keeping your browsing experience informative, 
                    relevant, and respectful.
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
