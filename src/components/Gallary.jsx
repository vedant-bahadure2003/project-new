import React from "react";

const PhotoGallery = () => {
  const photos = [
    "https://educationhubllp.com/wp-content/uploads/elementor/thumbs/Kharkiv-National-Medical-University-8-pu8ekqff2ojizmukfbmz7v2fr310qgylibfmdwm620.jpg",
    "https://www.eklavyaoverseas.com/uploads/galleries/mbbs-uzbekistan.jpg",
    "https://www.worldwidecolleges.com/wp-content/uploads/classified-listing/2024/02/Fergana-Medical-Institute-of-Public-Health-Uzbekistan-4.webp",
    "https://upsquil.com/static/images/mbbs/adasdfasdfa.jpg",
    "https://mbbsexpert.in/wp-content/uploads/2023/03/WhatsApp-Image-2022-09-29-at-10.31.56-AM.jpeg",
    "https://e2pconsultancy.com/wp-content/uploads/2021/07/TMA-Urgench-.jpeg",
    "https://peoplelinkplacements.com/img/uz-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0q2lfV0ovifrXsB6J-nJlFceoYS7nMBNNdQ&s",
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Recent Photo Gallery</h2>
        <p className="text-gray-500">Explore our latest picture gallery</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border shadow-lg h-60 w-full sm:w-60 md:w-60"
          >
            <img
              src={photo}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
