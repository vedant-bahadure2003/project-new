import React from "react";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";

const stats = [
  {
    id: 1,
    number: "12",
    text: "Years of Expertise",
  },
  {
    id: 2,
    number: "1500",
    text: "Satisfied Students Counselled",
  },
  {
    id: 3,
    number: "10",
    text: "Universities Affiliated With Us!",
  },
  {
    id: 4,
    number: "100",
    text: "Visa Assistance",
  },
];

// Partner logos
const partners = [
  {
    id: 1,
    src: "https://w7.pngwing.com/pngs/343/327/png-transparent-university-of-cambridge-university-of-oxford-cambridge-university-press-cambridge-assessment-english-proactive-text-logo-university.png",
    alt: "Partner 1",
  },
  {
    id: 2,
    src: "https://admin.seedglobaleducation.com/assets/img/school_logos/670f9bbc49f22_Columbia_University_Logo.jpg",
    alt: "Partner 2",
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkPkeFgx_TzTXwvf8TGinVpoSIosOK5wu_iWP9vJPGnpJkwhHCXujKeIC1PUGv_Yru6s&usqp=CAU",
    alt: "Partner 3",
  },
  {
    id: 4,
    src: "https://aeliusa.com/wp-content/uploads/2018/04/College-Logos-CSU-5-1024x628.png",
    alt: "Partner 4",
  },
  {
    id: 5,
    src: "https://intouniversity.org/wp-content/uploads/2022/09/UoH_Secondary_Brandmark_RGB.png",
    alt: "Partner 5",
  },
];

const NumberSpeaksSection = () => {
  return (
    <section className="bg-blue-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
          Number Speaks Everything For Us
        </h2>
        <p className="text-blue-600 text-lg">
          Uzbekistan Expert always stands out in the Crowd
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {stat.number}
            </div>
            <p className="text-lg font-semibold text-gray-700">{stat.text}</p>
          </div>
        ))}
      </div>

      {/* Our Partners Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partners</h2>
        <p className="text-gray-600 mb-8">
          We are proudly partners with these best career crafting and future
          building universities.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-32 h-32 flex items-center justify-center shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="object-contain w-24 h-24"
              />
            </div>
          ))}
        </div>
      </div>

      {/* New Brochure Download Section */}
      <div className="bg-yellow-100 mt-12 rounded-lg shadow-lg flex flex-col md:flex-row items-center p-8 gap-6 relative">
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <BsFillFileEarmarkMedicalFill className="size-16" />
        </div>

        {/* Center Text Section */}
        <div className="text-center md:text-left w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
            Want to know more about{" "}
            <span className="text-blue-600">Studying MBBS Abroad?</span>
          </h3>
          <p className="text-gray-700">
            Download our{" "}
            <span className="font-bold text-blue-600">Brochure</span> now
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center gap-2">
          <input
            type="text"
            placeholder="City*"
            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Mobile no*"
            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email id*"
            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="w-full md:w-auto bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NumberSpeaksSection;
