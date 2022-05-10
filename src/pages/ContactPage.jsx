import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Button from "react-bootstrap/Button";

const ContactPage = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
        <div className="rounded-4 my-3 border-white bg-light  border">
        <div className="my-5">
          <h1>Contact Us</h1>
        </div>
        <form className="my-5 frm-contrl">
          <div className="form-group text-start my-4">
            <label className="text-secondary fst" >Email address</label>
            <input
              type="email"
              className="form-control border-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group text-start mb-5">
            <label className="fst text-secondary" htmlFor="exampleInputPassword1">Message</label>
            <textarea
              className="form-control border-0"
              id="exampleInputPassword1"
              placeholder="Enter your message"
            />
          </div>
          <Button type="submit" className="bg-white cont-button" variant="outline-success">Submit</Button>
        </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
