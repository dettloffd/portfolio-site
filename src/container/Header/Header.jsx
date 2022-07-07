import { motion } from "framer-motion";
import React from "react";

import { AppWrapper } from "../../wrapper";

import { images } from "../../constants";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./Header.scss";

const headerLinks = [
  {
    name: "Github",
    address: "https://github.com/dettloffd",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    address: "https://www.linkedin.com/in/david-dettloff/",
    icon: <FaLinkedin />,
  },
  { name: "Email", address: "", icon: <FaMailBulk></FaMailBulk> },
];

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-info">
          <div className="header-info-container">
            <p className="p-text">Hello! My name is</p>
            <h1 class="header-text header-header" style={{ fontSize: "7.2rem", marginTop: "1.2rem" }}>
              {/* Hello, I'm */}
              <span>David Dettloff</span>
            </h1>

            <h2 class="header-text-2" style={{ marginTop: "1.2rem" }}>
              I'm a college educated{" "}
              <span className="color-primary" style={{ fontWeight: 600 }}>
                Software Engineer
              </span>
              .
            </h2>
            <h3 className="header-text-3" style={{ marginTop: "1.2rem" }}>I specialize in building things for the web.</h3>

            <ul className="header-links" style={{ marginTop: "4.4rem" }} >
              {headerLinks.map((item) => (
                <li className="header-links-item">
                  <a href={item.address} target="_blank">
                    <i className="header-links-icon"> {item.icon} </i>
                    <span class="about-me__info--list-name">Github</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* <p className="p-text">Connect with me and check it ooout</p> */}
          </div>
        </div>
        <div className="header-img">
          <img src={images.web_app}></img>
        </div>
      </div>
    </>
  );
};

export default AppWrapper(Header, "home");
