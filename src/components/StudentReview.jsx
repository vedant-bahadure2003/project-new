import React from "react";

const backgroundImage =
  "https://www.pacificeducation.in/wp-content/uploads/2022/11/mbbs-in-uzbekistan.jpg";

const testimonials = [
  {
    name: "nishant kharb",
    location: "haryana",
    image:
      "https://m.economictimes.com/thumb/msid-105880533,width-1200,height-1200,resizemode-4,imgsize-205590/samarkand.jpg",
    testimonial:
      "I am grateful to Eklavya to help me get admission in Irkutsk State Medical University, Russia. I strongly recommend them as the efficient faculty booked my seat for the course and helped me find accommodation.",
  },
  {
    name: "sanskar singh",
    location: "uttar pradesh",
    image: "https://gmfadmission.in/wp-content/uploads/2022/06/Samarkand-.jpeg",
    testimonial:
      "My dreams came true! I wanted to study MBBS in Georgia, but I was unable to complete my application due to proper guidance. The team of Eklavya guided me well and helped me study MBBS in Ivane Javakhishvili Tbilisi State University.",
  },
  {
    name: "harsh gautam",
    location: "haryana",
    image:
      "https://bosonmeditech.com/wp-content/uploads/2022/06/tashkent-medical-academy-mbbs-in-uzbekistan-for-indian-students.jpg",
    testimonial:
      "Are you clueless about how to join MBBS courses in Georgia? Then contact Eklavya in the first place. The best educational consultants helped me finish my MBBS in Georgia from Akaki Tsereteli State University.",
  },
];

const Testimonials = () => {
  return (
    <div
      className="relative bg-gray-100 py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black overlay layer */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{ zIndex: 0 }}
      ></div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-semibold text-white mb-8">
          What They Say
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Listen to our successfully Placed Students
        </p>
        <div className="flex justify-center space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-80 bg-white p-6 rounded-lg shadow-lg relative"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-48 object-fill rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name.charAt(0).toUpperCase() +
                  testimonial.name.slice(1)}
              </h3>
              <p className="text-gray-600">
                {testimonial.location.charAt(0).toUpperCase() +
                  testimonial.location.slice(1)}
              </p>
              <p className="mt-4 text-gray-700">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
