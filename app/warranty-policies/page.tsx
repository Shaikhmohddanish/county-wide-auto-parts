import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Check, Shield, AlertTriangle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WarrantyPoliciesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Warranty Policies" }]} />

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Product Warranty Policies</h1>
              </div>

              <p className="text-gray-600 mb-8">Last updated: May 21, 2025</p>

              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Shield className="h-5 w-5 text-teal-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-teal-800">Our Warranty Promise</h3>
                    <p className="mt-2 text-teal-700">
                      At County wide auto parts, we stand behind the quality of our products. Our warranty is designed to
                      give you peace of mind with your purchase, knowing that we're committed to your satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Standard Warranty Coverage</h2>
                  <p className="mb-4">
                    All used auto parts purchased from County wide auto parts come with our standard warranty, which
                    provides coverage against defects in materials and workmanship under normal use and service.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 my-6">
                    <h3 className="flex items-center text-lg font-semibold mb-4">
                      <Check className="h-5 w-5 text-teal-600 mr-2" /> Standard Warranty Periods
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-b pb-2">
                        <span className="font-medium">Engines:</span> 90 days or 3,000 miles, whichever comes first
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-medium">Transmissions:</span> 90 days or 3,000 miles, whichever comes
                        first
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-medium">Transfer Cases:</span> 90 days or 3,000 miles, whichever comes
                        first
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-medium">Differentials/Axle Assemblies:</span> 90 days or 3,000 miles,
                        whichever comes first
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-medium">Electrical Components:</span> 30 days
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-medium">Body Parts:</span> 30 days (for fitment issues only)
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-medium">All Other Mechanical Parts:</span> 60 days
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Extended Warranty Options</h2>
                  <p className="mb-4">
                    For additional peace of mind, County wide auto parts offers extended warranty options for select
                    parts. Extended warranties can be purchased at the time of your original order and provide
                    additional coverage beyond our standard warranty periods.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 my-6">
                    <h3 className="flex items-center text-lg font-semibold mb-4">
                      <Check className="h-5 w-5 text-teal-600 mr-2" /> Extended Warranty Options
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-teal-500 pl-4 py-2">
                        <h4 className="font-semibold">Gold Protection Plan</h4>
                        <p>Extends coverage to 6 months or 6,000 miles for engines and transmissions</p>
                      </div>
                      <div className="border-l-4 border-teal-500 pl-4 py-2">
                        <h4 className="font-semibold">Platinum Protection Plan</h4>
                        <p>Extends coverage to 12 months or 12,000 miles for engines and transmissions</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">What Is Covered</h2>
                  <p className="mb-4">
                    Our warranty covers defects in materials and workmanship under normal use. If a part fails during
                    the warranty period due to a defect, we will, at our option:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Replace the part with a similar part</li>
                    <li>Repair the part</li>
                    <li>Refund the purchase price of the part</li>
                  </ul>
                  <p className="mb-4">
                    The warranty covers the part only and does not include any labor costs associated with the
                    diagnosis, removal, or reinstallation of the part.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">What Is Not Covered</h2>
                  <p className="mb-4">Our warranty does not cover:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Damage resulting from improper installation</li>
                    <li>Damage resulting from misuse, abuse, or neglect</li>
                    <li>Damage resulting from modifications or alterations</li>
                    <li>Normal wear and tear</li>
                    <li>Labor costs for installation or removal</li>
                    <li>Towing charges or rental car expenses</li>
                    <li>Incidental or consequential damages</li>
                    <li>Parts used in racing or competition</li>
                    <li>Parts used in vehicles for commercial purposes unless specifically approved</li>
                    <li>Damage caused by environmental factors or acts of nature</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-yellow-800">Important Notes</h3>
                      <ul className="mt-2 text-yellow-700 list-disc pl-5 space-y-1">
                        <li>
                          All warranties are void if the part is installed on a vehicle other than the one specified at
                          the time of purchase.
                        </li>
                        <li>Warranties are non-transferable and apply only to the original purchaser.</li>
                        <li>Proof of purchase is required for all warranty claims.</li>
                        <li>
                          For engine and transmission warranties, proof of proper installation by a licensed mechanic is
                          required.
                        </li>
                        <li>Failure to perform required maintenance will void the warranty.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">How to Make a Warranty Claim</h2>
                  <p className="mb-4">If you believe you have a warranty claim, please follow these steps:</p>
                  <ol className="list-decimal pl-6 space-y-2 mb-4">
                    <li>
                      Contact our customer service department at 888 347-1455 or support@countywideauto.com
                      within the warranty period.
                    </li>
                    <li>Provide your order number, the part number, and a detailed description of the issue.</li>
                    <li>
                      Our warranty department will review your claim and provide instructions for returning the part if
                      necessary.
                    </li>
                    <li>
                      Return the part as instructed, along with proof of purchase and, if required, proof of proper
                      installation.
                    </li>
                    <li>After inspection, we will notify you of our decision regarding your warranty claim.</li>
                  </ol>
                  <p className="mb-4">
                    Please note that all warranty claims must be authorized by our warranty department before returning
                    any parts. Unauthorized returns may be refused.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Return Shipping for Warranty Claims</h2>
                  <p className="mb-4">
                    If your warranty claim is approved, we will reimburse you for the cost of shipping the defective
                    part back to us. We will also pay for shipping the replacement part to you. If your warranty claim
                    is denied, you will be responsible for the cost of return shipping.
                  </p>
                  <p className="mb-4">
                    We recommend using a trackable shipping method for all warranty returns. County wide auto parts is not
                    responsible for parts lost or damaged during return shipping.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Core Charges and Returns</h2>
                  <p className="mb-4">
                    Some parts require a core charge, which is refundable when you return your old part. Core returns
                    must be complete and in rebuildable condition. Core refunds will be processed within 10 business
                    days of receipt of the core.
                  </p>
                  <p className="mb-4">
                    Core returns must be made within 30 days of purchase. After 30 days, core charges may not be
                    refundable. Please contact our customer service department if you need additional time to return
                    your core.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Modifications to Warranty Policy</h2>
                  <p className="mb-4">
                    County wide auto parts reserves the right to modify this warranty policy at any time. Any changes will
                    apply to purchases made after the date of the change. The warranty in effect at the time of your
                    purchase will continue to apply to your purchase.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-teal-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">Need Help?</h3>
                      <p className="mt-2 text-gray-600">
                        If you have any questions about our warranty policy or need assistance with a warranty claim,
                        please don't hesitate to contact our customer service team.
                      </p>
                      <div className="mt-4">
                        <p className="font-medium">Contact Information:</p>
                        <p className="mt-1">
                          Phone: 888 347-1455
                          <br />
                          Email: support@countywideauto.com
                          <br />
                          Hours: Monday - Friday, 8AM - 6PM EST
                        </p>
                      </div>
                    </div>
                  </div>
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
