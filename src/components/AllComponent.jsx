import React from "react";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import UzbekistanExpert from "./UzbekistanExpert";
import Universities from "./Universities";
import NumberSpeaksSection from "./NumberSpeaksSection";
import Gallary from "./Gallary";
import Blog from "./Blog";
import StudentReview from "./StudentReview";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";

const AllComponent = () => {
  return (
    <>
      <HomePage />
      <AboutUs />
      <Gallary />
      <ContactUsSection />
      <Blog />
      <UzbekistanExpert />
      <Universities />
      <StudentReview />
      <NumberSpeaksSection />
      <Footer />
    </>
  );
};

export default AllComponent;
