import Container from '@/components/ui/Container'
import Awards from '@/components/sections/Awards'
import Offices from '@/components/sections/Offices'

export const metadata = {
  title: 'Privacy Policy | Cogtix Solutions',
  description: 'At Cogtix Solutions, we prioritize your privacy. Learn about the types of information we collect, record, and how we use it in our Privacy Policy.',
}

export default function PrivacyPolicy() {
  return (
    <main className="relative pt-32 pb-0 overflow-hidden">
      {/* ── Background Decorations ─────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
        
        {/* Subtle geometric accents */}
        <div className="absolute top-[15%] left-[5%] h-64 w-64 rounded-full border-[2px] border-blue-100/20" />
        <div className="absolute bottom-[10%] right-[5%] h-44 w-44 rounded-full border-[2px] border-dashed border-blue-100/15 animate-spin-slow" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Cogtix Solutions, accessible from <a href="https://www.cogtix.com/" className="text-blue-600 hover:underline">https://www.cogtix.com/</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Cogtix Solutions and how we use it.
            </p>
          </div>

          <div className="max-w-none space-y-16 mb-24">
            <section className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Cogtix Solutions. This policy is not applicable to any information collected offline or via channels other than this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Consent</h2>
              <p className="text-gray-600 leading-relaxed">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Information we collect</h2>
              <p className="text-gray-600 leading-relaxed">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              <p className="text-gray-600 leading-relaxed">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
              <p className="text-gray-600 leading-relaxed">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">How we use your information</h2>
              <p className="text-gray-600 leading-relaxed">We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Log Files</h2>
              <p className="text-gray-600 leading-relaxed">Cogtix Solutions follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Advertising Partners Privacy Policies</h2>
              <p className="text-gray-600 leading-relaxed">You may consult this list to find the Privacy Policy for each of the advertising partners of Cogtix Solutions.</p>
              <p className="text-gray-600 leading-relaxed">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Cogtix Solutions, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
              <p className="text-gray-600 leading-relaxed">Note that Cogtix Solutions has no access to or control over these cookies that are used by third-party advertisers.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Third Party Privacy Policies</h2>
              <p className="text-gray-600 leading-relaxed">Cogtix Solutions&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
              <p className="text-gray-600 leading-relaxed">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
              <p className="text-gray-600 leading-relaxed">Under the CCPA, among other rights, California consumers have the right to:</p>
              <p className="text-gray-600 leading-relaxed">Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
              <p className="text-gray-600 leading-relaxed">Request that a business delete any personal data about the consumer that a business has collected.</p>
              <p className="text-gray-600 leading-relaxed">Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</p>
              <p className="text-gray-600 leading-relaxed">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-navy-900">GDPR Data Protection Rights</h2>
              <p className="text-gray-600 leading-relaxed">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed"><strong>The right to access</strong>: You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
                <p className="text-gray-600 leading-relaxed"><strong>The right to rectification</strong>: You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
                <p className="text-gray-600 leading-relaxed"><strong>The right to erasure</strong>: You have the right to request that we erase your personal data, under certain conditions.</p>
                <p className="text-gray-600 leading-relaxed"><strong>The right to restrict processing</strong>: You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
                <p className="text-gray-600 leading-relaxed"><strong>The right to object to processing</strong>: You have the right to object to our processing of your personal data, under certain conditions.</p>
                <p className="text-gray-600 leading-relaxed"><strong>The right to data portability</strong>: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
              </div>
              <p className="text-gray-600 leading-relaxed">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Children&apos;s Information</h2>
              <p className="text-gray-600 leading-relaxed">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
              <p className="text-gray-600 leading-relaxed">Cogtix Solutions does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:info@cogtix.com" className="text-blue-600 hover:underline">info@cogtix.com</a>.</p>
            </section>
          </div>
        </div>
      </Container>
      
      <div className="bg-gray-50/50">
        <Awards />
        <Offices />
      </div>
    </main>
  )
}
