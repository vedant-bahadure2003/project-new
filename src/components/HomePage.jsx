import React, { useState } from "react";
import { FaBookMedical } from "react-icons/fa6";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const universities = [
    "Vitebsk State Medical University",
    "Ivane Javakhishvili Tbilisi State University",
    "Tbilisi State Medical University",
    "European University",
    "Batumi Shota Rustaveli State University",
    "Caucasus International University",
    "Ilia State University",
    "Kazan State Medical University",
    "Bashkir State Medical University",
    "Volgograd State Medical University",
    "Pskov State University",
    "Al Farabi Kazakh National University",
    "Kazakh National Medical University",
    "Osh State Medical University",
  ];

  return (
    <div className="font-sans">
      <header className="bg-blue-900 text-white flex items-center justify-between p-4">
        <div className="text-2xl font-bold flex items-center">
          <FaBookMedical className="mr-3" />
          MediWorld Consultants
        </div>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
          >
            Menu
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-[80vw] md:w-[60vw] z-50 p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b pb-2">
                Top MBBS Universities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {universities.map((university, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-blue-100 hover:text-blue-800 transition duration-300 cursor-pointer text-center"
                  >
                    <p className="text-sm font-medium">{university}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="bg-gradient-to-b from-blue-900 to-white text-white">
        <div className="container mx-auto py-12 px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              Become a doctor with globally recognized universities Get
              admission into “Top Medical University in Uzbekistan”
            </h1>
            <br />
            <div>
              <h2 className="text-black font-bold">
                Study in NMC WHO recognized medical colleges
              </h2>

              <ul className="text-black list-disc ml-4">
                <li>Low-cost medical education starting from INR 5 Lacs*</li>
                <li>No Donation Capitation fees</li>
                <li>Practice in India across the world</li>
                <li>Worldwide accepted degree</li>
              </ul>
            </div>
            <br />
            <br />
            <div className="flex space-x-4 mt-4">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200">
                Explore Courses
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              International degree now in your budget
            </h2>

            <div className="flex items-center mb-6">
              <span className="text-blue-600 font-medium text-lg md:text-xl">
                Phone No:
              </span>
              <span className="ml-2 text-gray-700 text-lg md:text-xl font-semibold">
                +91
              </span>
              <input
                type="text"
                placeholder="xxxxx"
                className="ml-2 text-black border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg md:text-xl"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <button className="bg-blue-600 text-white font-medium py-2 px-4 w-full rounded-lg hover:bg-blue-700 transition duration-300">
              Book Your Free Counseling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
