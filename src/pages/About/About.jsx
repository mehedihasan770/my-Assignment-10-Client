const About = () => {
  return (
    <section className="px-4 py-24 space-y-32">

      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-extrabold text-[#F3601A]">
          About HomeHero
        </h1>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
          A modern all-in-one platform designed to simplify your everyday home
          service needs with speed, trust, and convenience.
        </p>
        <p className="text-gray-500 text-md md:text-lg leading-relaxed">
          From home cleaning, appliance repair, plumbing, electrical work, to
          more — HomeHero brings all your essential services under one roof.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div className="space-y-6 text-gray-500 leading-relaxed text-xl">
          <p>
            <span className="font-semibold text-[#F3601A]">
              HomeHero
            </span>{" "}
            is a modern all-in-one home service platform where users can easily
            book essential services without leaving their home.
          </p>
          <p>
            Everything you need is available in one centralized system. Users
            can browse, compare, and select services based on price, reviews, or
            professional ratings.
          </p>
          <p>
            Our mission is to create a reliable, fast, and secure digital service
            ecosystem powered by skilled professionals.
          </p>
          <p>
            By eliminating traditional hassles, HomeHero saves time and effort
            while ensuring quality service delivery.
          </p>

          <div className="mt-6 space-y-3">
            <h3 className="text-xl font-semibold text-[#F3601A]">
              Key Benefits
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li>Book multiple services in one place</li>
              <li>Track service status in real-time</li>
              <li>Verified and trained professionals</li>
              <li>Flexible scheduling & payment options</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {[
            "Instant service booking",
            "Verified professionals",
            "Transparent pricing system",
            "User reviews & ratings",
            "Service filtering by budget",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-gray-500 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-[#F3601A] mb-12">
          Why Choose HomeHero
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Trusted Experts",
              desc: "All professionals are verified and selected based on skill and experience.",
              stat: "98% satisfaction rate",
            },
            {
              title: "Fast & Reliable",
              desc: "Quick booking and timely service delivery you can rely on.",
              stat: "Average service time: 2 hours",
            },
            {
              title: "User-Centric Design",
              desc: "Built with a focus on usability, accessibility, and performance.",
              stat: "Rated 4.8/5 by users",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-500 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">{card.desc}</p>
              <p className="text-blue-600 font-semibold">{card.stat}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-[#F3601A] mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "Create an account",
              desc: "Sign up with email or social login in seconds.",
            },
            {
              step: "Browse & select services",
              desc: "Search and filter services based on your needs and budget.",
            },
            {
              step: "Book with preferred schedule",
              desc: "Choose date & time that suits you best for the service.",
            },
            {
              step: "Get service at your doorstep",
              desc: "Our professionals arrive on time and complete the task efficiently.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-3xl font-bold text-blue-600">{i + 1}</span>
              <p className="mt-4 text-gray-500 font-medium">{item.step}</p>
              <p className="mt-2 text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#F3601A] mb-2">
          Our Vision
        </h2>
        <p className="text-gray-500 leading-relaxed text-lg">
          Our vision is to become the most trusted digital home service platform
          by continuously improving service quality, expanding coverage, and
          delivering exceptional user experiences through technology.
        </p>
        <p className="text-gray-500 leading-relaxed text-lg">
          We aim to introduce AI-based scheduling, instant service recommendations, 
          and personalized offers to enhance every user's experience.
        </p>
        <p className="text-gray-500 leading-relaxed text-lg">
          Our goal is to save time, reduce stress, and make home services accessible 
          to everyone.
        </p>
      </div>

      <div className="text-center pt-16 border-t border-gray-300">
        <p className="text-sm text-gray-500">
          HomeHero — simplifying home services through smart technology.
        </p>
      </div>
    </section>
  );
};

export default About;
