import React from "react";

import { AppWrapper } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  return (
    <><h2 className="header-text contact-header">Contact Me</h2>
        <div className="contact-container">
        
        <h3 className="header-text-3 contact__secondary-header">
          Please feel free to send me a message or connect with me through my
          social links!
        </h3>
        <h1 className="contact_watermark">Contact</h1>

        <form
          action="https://formsubmit.co/2fdd191d0c7266926552bddcedcfdb9f"
          method="POST"
          className="form"
        >
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Name"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form__group">
            <textarea
              required
              className="form__input"
              placeholder="Message"
              id="message"
              name="message"
            ></textarea>
          </div>
          <button className="form__btn" type="submit">
            Send Message
          </button>
        </form>

        </div>

    </>
  );
};

export default AppWrapper(Contact, "contact");
