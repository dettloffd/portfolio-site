import React from "react";
import { motion } from "framer-motion";

import { AppWrapper } from "../../wrapper";
import { SkillsArray } from "../Skills/SkillsArray";
import { ProjectsArray } from "./ProjectsArray";
import { MotionPill } from "../../components";
import "./Work.scss";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <div className="work-info">
          <h2 className="header-text education-header">Work & Projects
          <MotionPill />
          </h2>
          <h3 className="header-text-3" style={{ marginTop: "1.6rem" }}>
            A non-exhaustive list of some of the work that I've done.
          </h3>
        </div>

        {ProjectsArray.map((project, index) => (
          <div className="project" key={index}>
            <motion.div
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="project-info"
            >
              <div className="project-info-container">
              <h1 className="project-title">{project.title}</h1>
              <p className="p-text project-desc">{project.description}</p>

              <div className="project-links">
                <a
                  href={`${project.projectLink}`}
                  target="_blank"
                  rel="noreferrer"
                  className="project-links-button"
                >
                  Live Demo
                </a>
                <a
                  href={`${project.githubLink}`}
                  target="_blank"
                  rel="noreferrer"
                  className="project-links-button"
                >
                  Github
                </a>
              </div>

              <div className="project-tech">
                <div className="tech-list">
                  {SkillsArray.map((skill) => (
                    <div
                      style={{
                        display: project.projectTech.includes(skill.name)
                          ? ""
                          : "None",
                      }}
                      className="tech-item app__flex"
                      key={skill.name}
                    >
                      <div
                        className={`app__flex tech-item-imgcontainer `}
                        style={{ backgroundColor: skill.bgColor }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          style={{ backgroundColor: skill.bgColor }}
                          className={`app__flex tech-item-imgcontainer`}
                        />
                      </div>
                      <p className="tech-item-text ">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </motion.div>
            <div className="project-visual">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true }}
                className="project-img-container"
              >
                <img
                  src={project.projectImage}
                  alt="A mockup of the project on different screen sizes"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(Work, "work");
