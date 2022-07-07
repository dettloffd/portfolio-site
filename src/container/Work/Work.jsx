import { motion } from "framer-motion";
import React  from "react";
import { AppWrapper } from "../../wrapper";
import { SkillsArray } from "../Skills/SkillsArray";
import { ProjectsArray } from "./ProjectsArray";

import "./Work.scss";

const Work = () => {

  return (
    <>
      <div className="work-container">
        <div className="work-info">
          <h2 className="header-text education-header">Work & Projects</h2>
          <h3 className="header-text-3" style={{ marginTop: "1.6rem" }}>
            A non exhaustive list of some of the work that I've done.
          </h3>
        </div>

        {ProjectsArray.map((project) => (
          <div className="project">
            <div className="project-info">
              <h1 className="project-title">{project.title}</h1>
              <p className="p-text project-desc">{project.description}</p>

              <div className="project-links">
              <a href={`${project.projectLink}`} target="_blank" className="project-links-button">
                Live Demo
              </a>
              <a href={`${project.githubLink}`} target="_blank" className="project-links-button">
                Github
              </a>

            </div>

              <div className="project-tech">
                <motion.div className="tech-list">
                  {SkillsArray.map((skill) => (
                    // {project.skil}
                    <motion.div
                      style={{
                        display: project.projectTech.includes(skill.name)
                          ? ""
                          : "None",
                      }}
                      whileInView={{ y: [50, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
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
                    </motion.div>
                  ))}
                </motion.div>
              </div>


            </div>
            <div className="project-visual">
              <div className="project-img-container">
                <img src={project.projectImage}></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(Work, "work");
