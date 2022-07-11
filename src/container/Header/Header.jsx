import React from "react";
import { motion } from "framer-motion";
import { AppWrapper } from "../../wrapper";
import { images } from "../../constants";
import { socialLinks } from "../../constants/socials";
import "./Header.scss";

const headerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const childVariants = {
  initial: { translateY: 10, opacity: 0 },
  animate: { translateY: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Header = () => {
  return (
    <>
      <div className="header-container">
        <motion.div
          className="header-info"
          variants={headerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="header-info-container">
            <p className="p-text">
              <motion.div variants={childVariants}>
                Hello! My name is
              </motion.div>
            </p>
            <h1
              className="header-text header-header "
              style={{ marginTop: "1.2rem" }}
            >
              <motion.div variants={childVariants}>David Dettloff</motion.div>
            </h1>

            <h2
              className="header-text-3"
              style={{ fontSize: "2.8rem", marginTop: "1.2rem" }}
            >
              <motion.div variants={childVariants}>
                I'm a{" "}
                <span className="color-primary" style={{ fontWeight: 600 }}>
                  Software Engineer
                </span>{" "}
                who builds things for the web.
              </motion.div>
            </h2>
            <h3 className="header-text-3" style={{ marginTop: "1.2rem" }}>
              <motion.div variants={childVariants}></motion.div>
            </h3>

            <motion.ul
              variants={childVariants}
              className="header-links"
              style={{ marginTop: "4.4rem" }}
            >
              {socialLinks.map((item, index) => (
                <li className="header-links-item" key={index}>
                  <a href={item.address} target={item.target}>
                    <i className="header-links-icon"> {item.icon} </i>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="header-img"
        >
          <img
            src={images.web_app}
            alt="illustration of a laptop and phone screen"
          />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Header, "home");
