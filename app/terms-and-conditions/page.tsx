import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Terms and Conditions" }]} />

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

              <div className="prose max-w-none">
                <p className="text-gray-600 mb-8">Last updated: May 21, 2025</p>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing and using County wide auto parts website and services, you acknowledge that you have
                    read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any
                    part of these terms, you may not use our services.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">2. Use of Information</h2>
                  <p className="mb-4">
                    The information provided on our website is for general informational purposes only. While we strive
                    to keep the information up to date and correct, we make no representations or warranties of any
                    kind, express or implied, about the completeness, accuracy, reliability, suitability, or
                    availability with respect to the website or the information, products, services, or related graphics
                    contained on the website for any purpose.
                  </p>
                  <p className="mb-4">
                    Any reliance you place on such information is therefore strictly at your own risk. In no event will
                    we be liable for any loss or damage including without limitation, indirect or consequential loss or
                    damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in
                    connection with, the use of this website.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">3. Intellectual Property</h2>
                  <p className="mb-4">
                    This website contains material which is owned by or licensed to us. This material includes, but is
                    not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other
                    than in accordance with the copyright notice, which forms part of these terms and conditions.
                  </p>
                  <p className="mb-4">
                    All trademarks reproduced in this website, which are not the property of, or licensed to the
                    operator, are acknowledged on the website.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">4. User Submissions</h2>
                  <p className="mb-4">
                    By submitting any content to our website, including but not limited to comments, feedback, and
                    suggestions, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully
                    sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works
                    from, distribute, and display such content throughout the world in any media.
                  </p>
                  <p className="mb-4">
                    You represent and warrant that you own or otherwise control all of the rights to the content that
                    you post; that the content is accurate; that use of the content you supply does not violate these
                    Terms and Conditions and will not cause injury to any person or entity; and that you will indemnify
                    us for all claims resulting from content you supply.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">5. Links to Other Websites</h2>
                  <p className="mb-4">
                    Our website may contain links to other websites of interest. However, once you have used these links
                    to leave our site, you should note that we do not have any control over that other website.
                    Therefore, we cannot be responsible for the protection and privacy of any information which you
                    provide whilst visiting such sites and such sites are not governed by this privacy statement. You
                    should exercise caution and look at the privacy statement applicable to the website in question.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">6. Privacy Policy</h2>
                  <p className="mb-4">
                    Your use of County wide auto parts website and services is also governed by our Privacy Policy, which
                    is incorporated into these Terms and Conditions by reference.
                  </p>
                  <p className="mb-4">
                    We respect your privacy and are committed to protecting your personal information. Please review our
                    Privacy Policy to understand how we collect, use, and safeguard your information.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">7. Limitation of Liability</h2>
                  <p className="mb-4">
                    In no event shall County wide auto parts, nor any of its officers, directors, and employees, be liable
                    to you for anything arising out of or in any way connected with your use of this website, whether
                    such liability is under contract, tort, or otherwise, and County wide auto parts, including its
                    officers, directors, and employees shall not be liable for any indirect, consequential, or special
                    liability arising out of or in any way related to your use of this website.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">8. Indemnification</h2>
                  <p className="mb-4">
                    You hereby indemnify to the fullest extent County wide auto parts from and against any and all
                    liabilities, costs, demands, causes of action, damages, and expenses (including reasonable
                    attorney's fees) arising out of or in any way related to your breach of any of the provisions of
                    these Terms and Conditions.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">9. Governing Law</h2>
                  <p className="mb-4">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of the
                    United States. Any disputes arising under or in connection with these Terms and Conditions shall be
                    subject to the exclusive jurisdiction of the courts located within the United States.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">10. Changes to Terms</h2>
                  <p className="mb-4">
                    County wide auto parts reserves the right to modify these Terms and Conditions at any time. Changes
                    will be effective immediately upon posting on our website. Your continued use of our services after
                    any changes indicates your acceptance of the new terms.
                  </p>
                  <p className="mb-4">
                    We will make reasonable efforts to notify you of significant changes to these terms, but it is your
                    responsibility to review them periodically.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">11. Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <p className="mb-4">
                    Email: support@countywideauto.com
                    <br />
                    Phone: (555) 123-4567
                    <br />
                    Address: 123 Auto Parts Lane, Anytown, USA 12345
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
