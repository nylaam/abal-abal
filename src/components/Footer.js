import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <p>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              SMK Telkom Malang
            </p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +62-812-2231-8396
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              naylaamalia798@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h5>About the Port</h5>
          <p>
            Hello, this is Nayla Nur Amalia. A software engineering student at
            SMK Telkom Malang. Interested in the web, currently participating in
            the teaching factory unit at Telkom Indonesia, part of the Digital
            Business Technology Department
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
