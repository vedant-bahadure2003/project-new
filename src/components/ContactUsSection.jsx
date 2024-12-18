import React from "react";

const ContactUsSection = () => {
  return (
    <div className="bg-blue-50 py-14 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Why Connect with Us?
          </h2>
          <p className="text-blue-600 leading-relaxed text-md">
            At Mediworld, we make sure you have all the right reasons to reach
            out to our experts for MBBS abroad. Our counselors provide
            personalized guidance, helping you pave the way for your future with
            clarity and confidence.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-lg text-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-3xl mr-3">🎓</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Book Your University
              </h3>
            </div>
            <p className="text-blue-600 text-xs">
              Connect with multiple NMC-approved universities through us and
              secure your admission seamlessly.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg text-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-3xl mr-3">🗂️</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Career Planning
              </h3>
            </div>
            <p className="text-blue-600 text-xs">
              Our guidance extends beyond your course—plan ahead for your career
              path.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg text-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-3xl mr-3">💵</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Financial Advice
              </h3>
            </div>
            <p className="text-blue-600 text-xs">
              We assist you with managing tuition fees, food expenses, and
              flight tickets.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg text-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-3xl mr-3">⚙️</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Customized Solutions
              </h3>
            </div>
            <p className="text-blue-600 text-xs">
              Tailored solutions to meet your unique needs, ensuring a smooth
              journey.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg text-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-3xl mr-3">📄</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Visa and Admission
              </h3>
            </div>
            <p className="text-blue-600 text-xs">
              We assist with visas and prepare all necessary documents to ease
              your entry.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg text-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-3xl mr-3">🌍</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Accommodations
              </h3>
            </div>
            <p className="text-blue-600 text-xs">
              We assist you with booking flights and finding suitable
              accommodations near universities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
