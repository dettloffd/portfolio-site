import React from "react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import { AppWrapper } from "../../wrapper";
import { images } from "../../constants";
import { MotionPill } from "../../components";
import "./Education.scss";

let courses = [
  "Data Structures & Algorithms",
  "Algorithm Design & Analysis",
  "Software Engineering",
  "Computer Operating Systems",
  "Human Computer Interaction",
  "Database Management Systems",
  "Software Testing",
  "Architecture & Design",
  "Linear Algebra",
  "Java Programming",
  "Programming: Python",
  "C++ Programming 1 & 2",
  "Engineering: Arduino",
  "Discrete Mathematics",
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.03,
      type: "tween",
    },
  },
};

const item = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Education = () => {
  return (
    <div className="education app__flex">
      <div className="education-container">
        <div className="education-info">
          <h2 className="header-text education-header">
            Education
            <MotionPill />
          </h2>

          <h3
            className="header-text-2 university-name"
            style={{ marginTop: "2.4rem" }}
          >
            Wayne State University
          </h3>
          <h3 className="header-text-3" style={{ marginTop: "2rem" }}>
            Bachelor of Science in Computer Science (2022)
          </h3>
          <h3 className="header-text-3" style={{ marginTop: "2rem" }}>
            GPA: 3.84/4.00
          </h3>
          <motion.img
            src={images.wsu_shield}
            className="education-img"
          ></motion.img>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          transition={{ duration: 1 }}
          className="education-courses"
        >
          {courses.map((course, index) => (
            <motion.div
              className="courses-item"
              variants={item}
              key={`course-${index}`}
            >
              <HiChevronRight className="courses-item-icon" />
              <p>{course}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrapper(Education, "education");
