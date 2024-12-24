import React from "react";

const UzbekistanExpert = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-12 tracking-wide">
          Why Uzbekistan Expert?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Best MBBS Education Consultants in India",
              description:
                "A one-stop solution for students specialized in MBBS overseas education counseling, and admission guidance.",
              icon: (
                <svg
                  className="w-8 h-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              ),
            },
            {
              title: "Complete Documentation Support",
              description:
                "Full assistance for all necessary documentation required for admission.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              ),
            },
            {
              title: "Guaranteed Admission",
              description:
                "Secure a spot in top MBBS universities in Uzbekistan with affordable fees for Indian students.",
              icon: (
                <svg
                  className="w-8 h-8 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11m4-6h4m-4 0v4"
                  />
                </svg>
              ),
            },
            {
              title: "Free Career Counseling",
              description:
                "Get free guidance and counseling to make the right decisions for your career growth.",
              icon: (
                <svg
                  className="w-8 h-8 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              ),
            },
            {
              title: "Travel & Visa Support",
              description:
                "Complete support for visa clearance and travel arrangements.",
              icon: (
                <svg
                  className="w-8 h-8 text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Educational Loan Assistance",
              description:
                "Guidance for educational loans and affordable accommodation support upon arrival.",
              icon: (
                <svg
                  className="w-8 h-8 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              ),
            },
            {
              title: "Study Patterns and Quality Insights",
              description:
                "Gain in-depth knowledge of top universities' study patterns and quality.",
              icon: (
                <svg
                  className="w-8 h-8 text-pink-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              ),
            },
            {
              title: "Passport, Tickets, and Forex",
              description:
                "Complete assistance for passports, air tickets, and forex needs.",
              icon: (
                <svg
                  className="w-8 h-8 text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transform transition duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-700">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UzbekistanExpert;
