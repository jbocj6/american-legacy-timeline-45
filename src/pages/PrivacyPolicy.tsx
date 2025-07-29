import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-600 to-red-600 py-4 px-4">
      <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-red-600 px-6 py-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-background p-3 rounded-full">
              <div className="text-2xl font-bold text-primary">JB</div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">Jeff Brown J6</p>
          <p className="text-blue-200 text-sm mt-2">Patriot • Proven Leader • America First</p>
        </div>

        {/* Back Button */}
        <div className="px-6 pt-6">
          <Button 
            variant="ghost" 
            onClick={() => window.close()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Close
          </Button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 py-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white border-l-4 border-primary p-4 mb-8 rounded-r-lg">
              <p className="text-black font-semibold mb-2">Last Updated: January 2025</p>
              <p className="text-black text-sm">This privacy policy describes how we collect, use, and protect your personal information.</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">1. Information We Collect</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information You Provide</h3>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-black mb-3">When you interact with our website and services, we may collect:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-black space-y-1">
                      <li>Name and contact information</li>
                      <li>Email address and phone number</li>
                      <li>Mailing address</li>
                      <li>Age and date of birth</li>
                    </ul>
                    <ul className="list-disc list-inside text-black space-y-1">
                      <li>Employment information</li>
                      <li>Interests in constitutional rights and justice topics</li>
                      <li>Financial support history through approved platforms</li>
                      <li>Newsletter subscription preferences</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-black mb-3">When you visit our website, we automatically collect:</p>
                  <ul className="list-disc list-inside text-black space-y-1">
                    <li>IP address and geographic location</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website and search terms</li>
                    <li>Device type and screen resolution</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Third-Party Information</h3>
                <p className="text-black leading-relaxed">
                  We may receive additional information about you from publicly available sources and 
                  social media platforms to better understand your interests in constitutional rights and justice topics.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">2. How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Communications & Newsletter</h3>
                  <ul className="list-disc list-inside text-black space-y-1 text-sm">
                    <li>Send newsletters and personal updates</li>
                    <li>Share educational content about justice topics</li>
                    <li>Provide commentary on current events</li>
                    <li>Announce public speaking engagements</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Financial Support</h3>
                  <ul className="list-disc list-inside text-black space-y-1 text-sm">
                    <li>Process support through CashApp, Venmo, GiveSendGo</li>
                    <li>Send requests for financial assistance</li>
                    <li>Maintain supporter contribution records</li>
                    <li>Thank supporters for their contributions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <h3 className="font-semibold text-black mb-2">Website Optimization</h3>
                <p className="text-black text-sm">
                  We use analytics data to improve our website performance, understand visitor behavior, 
                  and optimize our digital outreach efforts to better serve supporters.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold text-black mb-2">Social Media Integration</h3>
                <p className="text-black text-sm">
                  We integrate with social media platforms to share content and engage with supporters. 
                  This may involve sharing content across platforms and tracking engagement metrics.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">3. Information Sharing and Disclosure</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Service Providers and Partners</h3>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-black mb-3">We may share your information with:</p>
                  <ul className="list-disc list-inside text-black space-y-1">
                    <li>Email newsletter service providers</li>
                    <li>Social media platform integrations</li>
                    <li>Payment processors (CashApp, Venmo, GiveSendGo)</li>
                    <li>Website hosting and security services</li>
                    <li>Analytics and website optimization tools</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Legal Requirements</h3>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <p className="text-black leading-relaxed">
                    <strong>Legal Compliance:</strong> We may disclose information when required by law, 
                    court order, or government request. Since this is not an active political campaign, 
                    we are not subject to FEC reporting requirements.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">We Do NOT Sell Personal Information</h3>
                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-black leading-relaxed">
                    Jeff Brown J6 does not sell, rent, or trade your personal information 
                    to commercial entities for marketing purposes unrelated to our educational and advocacy activities.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">4. Data Security</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Technical Safeguards</h3>
                  <ul className="list-disc list-inside text-black space-y-1 text-sm">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Administrative Safeguards</h3>
                  <ul className="list-disc list-inside text-black space-y-1 text-sm">
                    <li>Limited staff access to personal data</li>
                    <li>Staff training on privacy practices</li>
                    <li>Data retention and disposal policies</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg mt-4">
                <p className="text-black text-sm">
                  <strong>Important:</strong> While we implement reasonable security measures, no online transmission 
                  or storage system is 100% secure. We cannot guarantee absolute security of your information.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">5. Your Rights and Choices</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Communication Preferences</h3>
                  <p className="text-black text-sm mb-2">You can control how we communicate with you:</p>
                  <ul className="list-disc list-inside text-black space-y-1 text-sm">
                    <li>Unsubscribe from emails using the link in each message</li>
                    <li>Opt out of text messages by replying "STOP"</li>
                    <li>Contact us to update your communication preferences</li>
                    <li>Request to be removed from our phone contact list</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Access and Correction</h3>
                  <p className="text-black text-sm">
                    You may request to access, correct, or update your personal information by contacting us. 
                    We will respond to reasonable requests within 30 days.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Data Deletion Limitations</h3>
                  <p className="text-black text-sm">
                    Some information may need to be retained for business records and tax purposes. 
                    We will honor deletion requests where legally permissible.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">6. Cookies and Tracking</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-lg border">
                    <h4 className="font-semibold text-black text-sm mb-1">Essential Cookies</h4>
                    <p className="text-black text-xs">Required for website functionality and security</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border">
                    <h4 className="font-semibold text-black text-sm mb-1">Analytics Cookies</h4>
                    <p className="text-black text-xs">Help us understand how visitors use our site</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border">
                    <h4 className="font-semibold text-black text-sm mb-1">Marketing Cookies</h4>
                    <p className="text-black text-xs">Enable targeted political advertising</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold text-black mb-2">Managing Cookies</h3>
                <p className="text-black text-sm">
                  You can control cookies through your browser settings. Note that disabling cookies may 
                  affect website functionality and your ability to make donations or sign up for events.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">7. Children's Privacy</h2>
              <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-black leading-relaxed">
                  Our website is not directed to children under 13, and we do not knowingly collect personal information 
                  from children under 13. Financial support requires contributors to be at least 18 years old. 
                  If we learn we have collected information from a child under 13, we will delete it immediately.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">8. Changes to This Policy</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed mb-3">
                  We may update this privacy policy to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes by:
                </p>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to our subscriber list</li>
                  <li>Updating the "Last Modified" date at the top of this policy</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">9. Contact Us</h2>
              <div className="bg-white p-6 rounded-lg border">
                <p className="text-black leading-relaxed mb-4">
                  If you have questions about this privacy policy or want to exercise your privacy rights, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-black mb-2">General Inquiries</h3>
                    <div className="text-black text-sm space-y-1">
                      <p><strong>Jeff Brown J6</strong></p>
                      <p>Location: Orange County, California</p>
                      <p>Email: jeffbrownj6@protonmail.com</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Privacy Requests</h3>
                    <div className="text-black text-sm space-y-1">
                      <p>Email: jeffbrownj6@protonmail.com</p>
                      <p>Subject: Privacy Policy Inquiry</p>
                      <p>Response Time: 30 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">10. State-Specific Rights</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed mb-3">
                  Residents of certain states may have additional privacy rights under state law, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="list-disc list-inside text-black space-y-1">
                    <li><strong>California (CCPA):</strong> Right to know, delete, and opt-out</li>
                    <li><strong>Virginia (VCDPA):</strong> Access, correction, and deletion rights</li>
                  </ul>
                  <ul className="list-disc list-inside text-black space-y-1">
                    <li><strong>Colorado (CPA):</strong> Data portability and processing limits</li>
                    <li><strong>Connecticut (CTDPA):</strong> Transparency and choice requirements</li>
                  </ul>
                </div>
                <p className="text-black text-sm mt-3">
                  Contact us to learn more about your specific state privacy rights and how to exercise them.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-secondary px-6 py-4 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">Jeff Brown J6 - Orange County, California</p>
            <p className="font-semibold text-primary">STAND WITH JUSTICE • SUPPORT CONSTITUTIONAL RIGHTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;