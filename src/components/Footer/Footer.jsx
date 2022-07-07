import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { socialLinks } from "../../constants/socials";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="app__wrapper footer app__flex">
          <div class="footer__up-arrow">
            <a href="#home">
              <FaArrowAltCircleUp class="iconify footer__icon footer__icon--up" />
            </a>
          </div>

        <ul class="footer__social--list">
          {socialLinks.map((item, index) => (
            <li className="footer__item" key={index}>
              <a
                href={item.address}
                target={item.target}
                className="footer__social--link"
              >
                <i className="footer__icon"> {item.icon} </i>
              </a>
            </li>
          ))}
        </ul>

        <div class="footer__hr"></div>
        <p class="footer__legal">@David Dettloff. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
