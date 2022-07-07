import { images } from "../../constants";

export const ProjectsArray = [
  {
    title: "Tip Tracker",
    description:
      "Deployed a full stack web application for the purpose of providing service industry employees an application to track and analyze trends in tips received. Provides a log/history of transactions as well as graphical insights regarding tips received by several metrics including month, day, year, etc. ",
    projectTech: [
      "React",
      "Node JS",
      "Express",
      "MongoDB",
      "JavaScript",
      "CSS",
      "HTML",
    ],
    projectLink: "https://tip-tracker-mern.herokuapp.com",
    githubLink: "https://github.com/dettloffd/tip-tracker",
    projectImage: images.tips_mockup
  },

  {
    title: "Sports Social Media Locator",
    description:
      "Worked on a team in order to develop a web application which scrapes the social media profiles of sports team members and displays them in an organized graphical fashion to a user. The user can register an email address and save favorite players which can be viewed and tracked on a profile page.",
    projectTech: [
      "JavaScript",
      "Python",
      "Express",
      "Node",
      "Firebase",
      "CSS",
      "HTML",
      "AWS",
      "Node JS"
    ],
    projectLink: "https://ssmpl.herokuapp.com/",
    githubLink: "https://github.com/WSU-4110/sports-social-media-profile-locater",
    projectImage: images.ssmpl_mockup
  },
];
