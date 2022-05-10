import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Process from "../components/Process";

const AboutPage = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
        <div className="my-5">
          <h1 className="mb-5">About Us</h1>
          <p className="lead fs-6 fst-italic px-5 mx-5 text-success">
            We are a team of web developers and designers who are passionate
            about creating beautiful and functional websites. This website is
            designd particularly for branding and marketing purposes. we can
            help you develope a website that will be a success. Enjoy the link
            shortener and let us know how we can help you.
          </p>
        </div>
        <Process />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
