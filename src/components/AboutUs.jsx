import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-6 md:px-16 lg:px-32">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-10 tracking-wide">
          Why Study MBBS in Uzbekistan?
        </h2>

        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              </div>
              <h3 className="text-xl font-semibold text-blue-700">
                Quality Education
              </h3>
            </div>
            <p className="text-gray-600">
              Get the best quality education in Uzbekistan with direct
              admissions to top medical universities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <svg
                  className="w-6 h-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 1.343-3 3v4c0 1.657 1.343 3 3 3s3-1.343 3-3v-4c0-1.657-1.343-3-3-3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700">
                Low Tuition Fee
              </h3>
            </div>
            <p className="text-gray-600">
              Medical universities in Uzbekistan offer low-cost education for
              foreign students.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-red-100 rounded-full">
                <svg
                  className="w-6 h-6 text-red-600"
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
              </div>
              <h3 className="text-xl font-semibold text-red-700">
                100% Safety
              </h3>
            </div>
            <p className="text-gray-600">
              Uzbekistan is one of the safest European countries for
              international students.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <svg
                  className="w-6 h-6 text-purple-600"
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
              </div>
              <h3 className="text-xl font-semibold text-purple-700">
                Worldwide Recognition
              </h3>
            </div>
            <p className="text-gray-600">
              MBBS degrees in Uzbekistan are recognized worldwide by NMC & WHO.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <svg
                  className="w-6 h-6 text-yellow-600"
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
              </div>
              <h3 className="text-xl font-semibold text-yellow-700">
                Top Medical Colleges
              </h3>
            </div>
            <p className="text-gray-600">
              Both private and government medical colleges in Uzbekistan rank
              high globally.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-indigo-100 rounded-full">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              </div>
              <h3 className="text-xl font-semibold text-indigo-700">
                Affordable Living
              </h3>
            </div>
            <p className="text-gray-600">
              Cost of living in Uzbekistan is very affordable, approximately 62
              USD per month.
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700">
            Join the growing community of international students thriving in
            Uzbekistan!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
