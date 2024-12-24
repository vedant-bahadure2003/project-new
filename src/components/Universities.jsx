import React from "react";

const universities = [
  {
    id: 1,
    name: "Andijan State Medical Institute",
    fees: "Rs. 21,31,200",
    image:
      "https://argroupofeducation.com/wp-content/uploads/2022/11/imgpsh_fullsize_anim-7.png",
  },
  {
    id: 2,
    name: "Tbilisi State University",
    fees: "Rs. 31,08,000",
    image:
      "https://www.eklavyaoverseas.com/assets/images/ivane-javakhishvili-tbilisi-state-university.jpg",
  },
  {
    id: 3,
    name: "Kazan State Medical University",
    fees: "Rs. 26,49,200",
    image:
      "https://www.eklavyaoverseas.com/assets/images/kazan-state-medical-university.jpg",
  },
  {
    id: 4,
    name: "Bogomolets Medical University",
    fees: "Rs. 19,98,000",
    image:
      "https://www.eklavyaoverseas.com/assets/images/bogomolets-national-medical-university.jpg",
  },
];

const TopMedicalUniversities = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Top Medical Universities
        </h2>
        <p className="text-gray-600 text-lg">
          Connect with Eklavya and we will help you get admission in top
          universities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {universities.map((university) => (
          <div
            key={university.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={university.image}
              alt={university.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {university.name}
              </h3>
              <p className="text-sm text-blue-600 text-center mt-2">
                Fees Structure: {university.fees}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopMedicalUniversities;
