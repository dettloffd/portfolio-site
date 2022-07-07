import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";


export const socialLinks = [
    {
      name: "Github",
      address: "https://github.com/dettloffd",
      icon: <FaGithub />,
      target: "_blank",
    },
    {
      name: "LinkedIn",
      address: "https://www.linkedin.com/in/david-dettloff/",
      icon: <FaLinkedin />,
      target: "_blank",
    },
    { name: "Email", address: "#contact", icon: <FaMailBulk></FaMailBulk> },
  ];
