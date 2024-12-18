import React from "react";

const BlogGallery = () => {
  const blogs = [
    {
      image:
        "https://www.mbbsadmissionabroad.in/uploads/topics/Are%20you%20Looking%20for%20MBBS%20in%20Uzbekistan%20(2).jpg",
      title: "How to Apply for MBBS in uzbekistan?",
      description:
        "Are you seeking MBBS admission in Uzbekistan? This article will help you to get a precise information related to ...",
      date: "December 18, 2024",
    },
    {
      image:
        "https://rukastudyservices.com/img/kazan_state_medical_university_big.jpg",
      title: "PG in Kazan state",
      description:
        "Are you planning to pursue a Master’s Degree from Kazan? Eklavya Overseas will shed a light on this dream of yours.",
      date: "December 18, 2024",
    },
    {
      image:
        "https://c.ndtvimg.com/2023-12/psur94h_uzbekistan-university_625x300_10_December_23.jpg",
      title: "Top Medical Universities In Uzbekistan",
      description:
        "Uzbekistan has made a great advancement in the field of medical education. At present, medical education in Uzbekistan has reached...",
      date: "December 18, 2024",
    },
    {
      image:
        "https://lh6.googleusercontent.com/proxy/YeWz3EZTYMCFNfEUWBlLI0Mzc0JOtue7J0IuxQcf_h4CnJ5rFc1pkH8UrByCmVLVkYzJqroaB67kDtUn6jzqWl1mxgeZOLt2I0FcTwhdTEUCvQlWUIY_406uuvggkB9xWSpgC2E",
      title: "MBBS Course in Bogomolets",
      description:
        "Bogomolets is well renowned for providing with affordable and quality education. There are many Indian students who pursue ...",
      date: "December 18, 2024",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Our Latest Blog</h2>
        <p className="text-gray-500">
          Check out our Latest posts on Studying in Uzbekistan
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              <p className="text-gray-400 text-xs">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGallery;
