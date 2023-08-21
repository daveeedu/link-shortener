import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="row bg m-auto">
        <div className="col-md-3 display-6 mb-5 text-danger logo">
          <h3><Link to="/HomePage" className="text-danger text-decoration-none">LinkMasteer</Link></h3>
        </div>
        <div className="col-md-2">
          <h5 className="text-start">Feature</h5> 
          <ul className="list-unstyled text-start">
            <li className="text-secondary">Link shortening</li>
            <li className="text-secondary">Branded links</li>
            <li className="text-secondary">Analytics</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5 className="text-start">Resources</h5>
          <ul className="list-unstyled text-start">
            <li className="text-secondary">Blog</li>
            <li className="text-secondary">developers</li>
            <li className="text-secondary">Support</li>
          </ul>
        </div>
        <div className="col-md-2">
        <h5 className="text-start">Company</h5>
          <ul className="list-unstyled text-start">
            <li>
                <Link className="text-decoration-none text-secondary" to="/Home">Home</Link>
            </li>
            <li>
                <Link className="text-decoration-none text-secondary"  to="/AboutPage">About Us</Link>
            </li>
            <li>
                <Link className="text-decoration-none text-secondary" to="/ContactPage">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <a href="https://facebook.com">  
          <img className="me-2 socials" src="./images/icon-facebook.svg" alt="logo" />
          </a>
          <a href="https://instagram.com">
          <img className="me-2 socials" src="./images/icon-instagram.svg" alt="logo" />
          </a>
          <a href="https://twitter.com">
          <img className="me-2 socials" src="./images/icon-twitter.svg" alt="logo" />
          </a>
          <a href="https://pinterest.com">
          <img className="socials"src="./images/icon-pinterest.svg" alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
