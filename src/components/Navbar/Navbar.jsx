import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset);



  return (
    <nav className="app__navbar">
        {/* <div>
            <h1>Home</h1>
        </div> */}
      <ul className="app__navbar-links">
        {["home", "about", "education", "skills", "work", "contact"].map(
          (item) => (
            <li className={`app__flex app__navbar-li ${
              offset > 50
                ? "app__navbar-li-scrolling"
                : ""
            }`} key={`link-${item}`}>
              <div >
                <a href={`#${item}`}>{item}</a>
              </div>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
