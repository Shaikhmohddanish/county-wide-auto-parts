import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { AlertTriangle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Disclaimer" }]} />

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

              <div className="prose max-w-none">
                <p className="text-gray-600 mb-8">Last updated: May 21, 2025</p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Please read this disclaimer carefully before using our website or relying on our information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">General Disclaimer</h2>
                  <p className="mb-4">
                    The information provided on County wide auto parts website is for general informational purposes only.
                    All information on the site is provided in good faith, however, we make no representation or
                    warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability,
                    availability, or completeness of any information on the site.
                  </p>
                  <p className="mb-4">
                    UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED
                    AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF
                    THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Information Disclaimer</h2>
                  <p className="mb-4">
                    County wide auto parts attempts to be as accurate as possible in the description of products and their
                    specifications. However, we do not warrant that product descriptions or other content of this site
                    are accurate, complete, reliable, current, or error-free.
                  </p>
                  <p className="mb-4">
                    The images of the products on our website are for illustrative purposes only. Due to the nature of
                    auto parts, the actual parts may vary from the images shown on our website. We do our best to ensure
                    that the specifications and conditions are represented accurately, but we cannot guarantee that your
                    computer's display accurately reflects the actual specifications of the products.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Fitment Information Disclaimer</h2>
                  <p className="mb-4">
                    While we make every effort to ensure that our fitment information is accurate, we cannot guarantee
                    that parts will fit your specific vehicle. It is the user's responsibility to verify fitment before
                    making any decisions based on our information. We recommend consulting with a professional mechanic
                    or referring to your vehicle's manual to ensure proper fitment.
                  </p>
                  <p className="mb-4">
                    Vehicle compatibility information is provided as a guide only and is based on standard factory
                    specifications. Modifications to your vehicle may affect compatibility. We are not responsible for
                    any modifications that have been made to your vehicle that may affect the fitment of parts.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">External Links Disclaimer</h2>
                  <p className="mb-4">
                    The County wide auto parts website may contain links to external websites that are not provided or
                    maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy,
                    relevance, timeliness, or completeness of any information on these external websites.
                  </p>
                  <p className="mb-4">
                    We have no control over the content and nature of these sites. These links to other websites do not
                    imply a recommendation for all the content found on these sites. Site owners and content may change
                    without notice and may occur before we have the opportunity to remove a link which may have gone
                    'bad'.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Errors and Omissions Disclaimer</h2>
                  <p className="mb-4">
                    The information given by County wide auto parts is for general guidance on matters of interest only.
                    Even if County wide auto parts takes every precaution to ensure that the content of this site is both
                    current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and
                    regulations, there may be delays, omissions, or inaccuracies in the information contained on this
                    site.
                  </p>
                  <p className="mb-4">
                    County wide auto parts is not responsible for any errors or omissions, or for the results obtained
                    from the use of this information. All information on this site is provided "as is," with no
                    guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this
                    information.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Fair Use Disclaimer</h2>
                  <p className="mb-4">
                    County wide auto parts may use copyrighted material which has not always been specifically authorized
                    by the copyright owner. We are making such material available for criticism, comment, news
                    reporting, teaching, scholarship, or research. We believe this constitutes a "fair use" of any such
                    copyrighted material as provided for in section 107 of the US Copyright Law.
                  </p>
                  <p className="mb-4">
                    If you wish to use copyrighted material from this site for your own purposes that go beyond fair
                    use, you must obtain permission from the copyright owner.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Views Expressed Disclaimer</h2>
                  <p className="mb-4">
                    The views and opinions expressed in this website are those of the authors and do not necessarily
                    reflect the official policy or position of any other agency, organization, employer, or company.
                    Assumptions made in the analysis are not reflective of the position of any entity other than the
                    author(s).
                  </p>
                  <p className="mb-4">
                    Comments published by users are their sole responsibility and the users will take full
                    responsibility, liability, and blame for any libel or litigation that results from something written
                    in or as a direct result of something written in a comment. County wide auto parts is not liable for
                    any comment published by users and reserves the right to delete any comment for any reason
                    whatsoever.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">No Responsibility Disclaimer</h2>
                  <p className="mb-4">
                    The information on the County wide auto parts website is provided with the understanding that we are
                    not herein engaged in rendering legal, accounting, tax, or other professional advice and services.
                    As such, it should not be used as a substitute for consultation with professional accounting, tax,
                    legal, or other competent advisers.
                  </p>
                  <p className="mb-4">
                    In no event shall County wide auto parts or its suppliers be liable for any special, incidental,
                    indirect, or consequential damages whatsoever arising out of or in connection with your access or
                    use or inability to access or use the website.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">'Use at Your Own Risk' Disclaimer</h2>
                  <p className="mb-4">
                    All information in this site is provided "as is," with no guarantee of completeness, accuracy,
                    timeliness, or of the results obtained from the use of this information, and without warranty of any
                    kind, express or implied, including, but not limited to warranties of performance, merchantability,
                    and fitness for a particular purpose.
                  </p>
                  <p className="mb-4">
                    County wide auto parts will not be liable to you or anyone else for any decision made or action taken
                    in reliance on the information given by the service or for any consequential, special, or similar
                    damages, even if advised of the possibility of such damages.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                  <p className="mb-4">If you have any questions about this Disclaimer, please contact us:</p>
                  <p className="mb-4">
                    Email: support@countywideauto.com
                    <br />
                    Phone: 888 347-1455
                    <br />
                    Address: 1828 NW US Hwy 50, Kingsville, MO 64061
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
