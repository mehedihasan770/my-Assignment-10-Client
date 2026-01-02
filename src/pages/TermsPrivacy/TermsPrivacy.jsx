import { FaShieldAlt, FaBook, FaUserCheck, FaRegClock, FaCheckCircle, FaLock } from "react-icons/fa";

const TermsPrivacy = () => {
  return (
    <section className="py-24 space-y-48">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-2xl font-extrabold text-[#F3601A]">
          Terms & Privacy
        </h1>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
          Welcome to HomeHero’s Terms of Service and Privacy Policy. Learn how we operate, what we expect from users, and how your data is protected.
        </p>
        <p className="text-gray-500 text-md md:text-lg  leading-relaxed">
          Using our services indicates agreement with these terms and policies. Transparency, security, and user satisfaction are our priorities.
        </p>
      </div>

      {/* TERMS OF SERVICE */}
      <div className="space-y-32">
        <h2 className="text-2xl font-semibold text-[#F3601A] mb-12 text-center border-b-2 border-gray-300 pb-4">
          Terms of Service
        </h2>

        <div className="space-y-20">
          {[
            {
              icon: <FaUserCheck className="text-[#F3601A] text-5xl mt-1" />,
              title: "Account Responsibility",
              desc: "Users are responsible for maintaining account credentials and all activities under their account. HomeHero is not liable for unauthorized access if credentials are compromised.",
            },
            {
              icon: <FaRegClock className="text-[#F3601A] text-5xl mt-1" />,
              title: "Service Booking",
              desc: "Bookings are subject to availability. While HomeHero strives to deliver services on time, exact scheduling may vary due to third-party constraints.",
            },
            {
              icon: <FaBook className="text-[#F3601A] text-5xl mt-1" />,
              title: "Payment & Cancellation",
              desc: "Payments are processed securely on our platform. Cancellations within 24 hours receive full refunds; later cancellations may incur partial fees.",
            },
            {
              icon: <FaShieldAlt className="text-[#F3601A] text-5xl mt-1" />,
              title: "User Conduct",
              desc: "Respectful interaction with professionals and other users is mandatory. Abuse or misconduct may result in account suspension.",
            },
            {
              icon: <FaCheckCircle className="text-[#F3601A] text-5xl mt-1" />,
              title: "Service Quality",
              desc: "All services provided meet HomeHero standards. Users can report issues or provide feedback to ensure service quality remains high.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-8">
              {item.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-500 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PRIVACY POLICY */}
      <div className="space-y-40">
        <h2 className="text-2xl font-semibold text-[#F3601A] mb-12 text-center border-b-2 border-gray-300 pb-4">
          Privacy Policy
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {[
            {
              title: "Data Collection",
              desc: "We collect information such as account info, booking history, feedback, and usage data to improve our services and personalize user experience.",
            },
            {
              title: "Data Usage",
              desc: "Collected data is used to process requests, communicate with users, improve platform features, and maintain a secure environment.",
            },
            {
              title: "Cookies & Tracking",
              desc: "Cookies enhance user experience and help gather analytics for service improvement. Users can control cookie preferences in settings.",
            },
            {
              title: "Data Security",
              desc: "We employ industry-standard security measures including encryption, firewalls, and access control to protect your data.",
            },
            {
              title: "User Rights",
              desc: "Users can access, update, or request deletion of personal data anytime by contacting our support team.",
            },
            {
              title: "Third-Party Sharing",
              desc: "We never sell personal data. Data may be shared only with trusted service providers to fulfill bookings.",
            },
            {
              title: "Children's Privacy",
              desc: "HomeHero does not knowingly collect personal information from children under 13. Parental consent is required for users under 18.",
            },
            {
              title: "Policy Updates",
              desc: "Terms and Privacy policies may change over time. Users will be notified of major updates and continued use constitutes agreement.",
            },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-500">{item.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
              <hr className="border-gray-300 my-4" />
            </div>
          ))}
        </div>
      </div>

      {/* ADDITIONAL INFORMATION */}
      <div className="space-y-28">
        <h2 className="text-2xl font-semibold text-[#F3601A] mb-12 text-center border-b-2 border-gray-300 pb-4">
          Additional Information
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">Service Transparency</h3>
            <p className="text-gray-500 text-lg leading-relaxed">
              All services listed on HomeHero include clear pricing, descriptions, and expected timeframes. Users can compare options before booking.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Ratings and reviews are publicly visible, ensuring transparency and trustworthiness.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">Support & Feedback</h3>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our support team is available 24/7 to answer queries, resolve complaints, and assist users promptly.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Users are encouraged to provide feedback to improve the platform continuously.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center pt-28 border-t border-gray-300">
        <p className="text-sm text-gray-500">
          HomeHero — committed to providing secure, transparent, and reliable home services for all users.
        </p>
      </div>
    </section>
  );
};

export default TermsPrivacy;
