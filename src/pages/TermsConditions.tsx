import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-600 to-red-600 py-4 px-4">
      <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-red-600 px-6 py-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/b76dd5c2-3af3-42e7-bd95-b1af7f688d5e.png" 
              alt="JBJ6 - Jeff Brown" 
              className="h-16 w-auto" 
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
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
              <p className="text-black text-sm">These terms and conditions govern your use of our website and services.</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">1. Acceptance of Terms</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed">
                  By accessing and using this website operated by Jeff Brown J6, you accept and agree to be bound by the terms 
                  and provision of this agreement. These terms apply to the entire website and any email or other type of 
                  communication between you and Jeff Brown J6.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">2. Use License</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Permitted Use</h3>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-black mb-3">Permission is granted to temporarily view the materials on Jeff Brown J6's website for personal, non-commercial transitory viewing only. This includes:</p>
                  <ul className="list-disc list-inside text-black space-y-1">
                    <li>Viewing website content and educational materials</li>
                    <li>Sharing links to our content on social media</li>
                    <li>Making financial contributions through approved platforms</li>
                    <li>Subscribing to newsletters and updates</li>
                    <li>Participating in legitimate political discourse</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Prohibited Activities</h3>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-black mb-3">Under this license you may NOT:</p>
                  <ul className="list-disc list-inside text-black space-y-1">
                    <li>Modify or copy the materials without permission</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or mirror the materials on any other server</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">3. Disclaimer</h2>
              
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h3 className="font-semibold text-black mb-2">Content Accuracy</h3>
                  <p className="text-black text-sm">
                    The materials on Jeff Brown J6's website are provided on an 'as is' basis. Jeff Brown J6 makes no warranties, 
                    expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                    implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                    of intellectual property or other violation of rights.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Political Commentary</h3>
                  <p className="text-black text-sm">
                    Content on this website represents the personal views and opinions of Jeff Brown J6. These views are protected 
                    under the First Amendment and should be considered educational and advocacy content related to constitutional 
                    rights and justice topics.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">No Legal Advice</h3>
                  <p className="text-black text-sm">
                    Information provided on this website does not constitute legal advice and should not be relied upon as such. 
                    For specific legal matters, consult with a qualified attorney.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">4. Limitations</h2>
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <p className="text-black leading-relaxed">
                  In no event shall Jeff Brown J6 or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                  the materials on Jeff Brown J6's website, even if Jeff Brown J6 or an authorized representative has been notified 
                  orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on 
                  implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">5. Financial Contributions</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Voluntary Support</h3>
                  <p className="text-black text-sm mb-2">All financial contributions are voluntary and are used to support:</p>
                  <ul className="list-disc list-inside text-black space-y-1 text-sm">
                    <li>Legal defense and advocacy efforts</li>
                    <li>Educational content creation and distribution</li>
                    <li>Website maintenance and operational costs</li>
                    <li>Speaking engagements and travel expenses</li>
                    <li>General support for constitutional rights advocacy</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Platform Terms</h3>
                  <p className="text-black text-sm">
                    Contributions made through CashApp, Venmo, or GiveSendGo are subject to those platforms' respective terms of service. 
                    We are not responsible for platform-specific issues or disputes.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                  <h3 className="font-semibold text-black mb-2">Contributor Age Requirement</h3>
                  <p className="text-black text-sm">
                    All financial contributors must be at least 18 years of age and legally authorized to make such contributions.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">6. User Conduct</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Acceptable Behavior</h3>
                  <ul className="list-disc list-inside text-black space-y-1 text-sm">
                    <li>Respectful communication and discourse</li>
                    <li>Constructive feedback and suggestions</li>
                    <li>Sharing content with proper attribution</li>
                    <li>Reporting technical issues or concerns</li>
                    <li>Supporting constitutional rights advocacy</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Prohibited Conduct</h3>
                  <ul className="list-disc list-inside text-black space-y-1 text-sm">
                    <li>Harassment, threats, or intimidation</li>
                    <li>Spreading false or misleading information</li>
                    <li>Attempting to hack or disrupt the website</li>
                    <li>Violating applicable laws or regulations</li>
                    <li>Impersonating Jeff Brown J6 or associates</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">7. Intellectual Property</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Content Ownership</h3>
                  <p className="text-black text-sm">
                    Original content, including but not limited to text, images, videos, and audio materials created by Jeff Brown J6, 
                    is protected by copyright law. This includes personal stories, political commentary, and educational materials.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Fair Use</h3>
                  <p className="text-black text-sm">
                    Limited use of our content for educational, commentary, or news reporting purposes may be permitted under 
                    fair use doctrine. Please contact us for permission regarding significant use of our materials.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold text-black mb-2">Third-Party Content</h3>
                  <p className="text-black text-sm">
                    Some content may include materials from third parties. We respect intellectual property rights and expect 
                    users to do the same.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">8. Privacy and Data</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, 
                  to understand our practices regarding the collection and use of your personal information.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">9. Third-Party Links</h2>
              <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-black leading-relaxed">
                  Our website may contain links to third-party websites or services that are not owned or controlled by Jeff Brown J6. 
                  We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any 
                  third-party websites or services. You acknowledge and agree that Jeff Brown J6 shall not be responsible or liable, 
                  directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or 
                  reliance on any such content, goods or services available on or through any such websites or services.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">10. Termination</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed">
                  Jeff Brown J6 may terminate or suspend your access to the website immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to 
                  use the website will cease immediately.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">11. Changes to Terms</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed mb-3">
                  Jeff Brown J6 reserves the right, at our sole discretion, to modify or replace these Terms at any time. 
                  Significant changes will be communicated through:
                </p>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Website announcement and updated posting date</li>
                  <li>Email notification to newsletter subscribers</li>
                  <li>Social media announcements when appropriate</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">12. Contact Information</h2>
              <div className="bg-white p-6 rounded-lg border">
                <p className="text-black leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
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
                    <h3 className="font-semibold text-black mb-2">Legal Notices</h3>
                    <div className="text-black text-sm space-y-1">
                      <p>Email: jeffbrownj6@protonmail.com</p>
                      <p>Subject: Terms & Conditions Inquiry</p>
                      <p>Response Time: 30 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">13. Governing Law</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of the State of California and the United States, 
                  without regard to conflict of law provisions. Our failure to enforce any right or provision of these Terms 
                  will not be considered a waiver of those rights.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">14. Severability</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and 
                  interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law 
                  and the remaining provisions will continue in full force and effect.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-red-500 pb-2">15. Entire Agreement</h2>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-black leading-relaxed">
                  These Terms constitute the entire agreement between us regarding our website, and supersede and replace any 
                  prior agreements we might have between us regarding the website. Changes to these Terms will be effective 
                  when posted on this page.
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

export default TermsConditions;