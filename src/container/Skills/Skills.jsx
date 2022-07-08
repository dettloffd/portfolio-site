import { motion } from "framer-motion";
import React, { useState } from "react";
import { AppWrapper } from "../../wrapper";
import { SkillsArray } from "./SkillsArray";
import "./Skills.scss";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("None");
  const [isFiltering, setIsFiltering] = useState(false);

  const handleSkillsFilter = (item) => {
    setActiveFilter(item);

    if (item !== "None") {
      setIsFiltering(true);
    } else {
      setIsFiltering(false);
    }
  };

  return (
    <>
    <h1 className="skills_watermark">Skills</h1>
      <div className="skills-container">
      
        
        <motion.div className="skills-list">
          {SkillsArray.map((skill) => (
            <motion.div
              whileInView={{ x: [-25, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-item app__flex"
              key={skill.name}
            >
              <div
                className={`app__flex skills-item-imgcontainer ${
                  !skill.tags.includes(activeFilter) && isFiltering
                    ? "skill-fadeout"
                    : "skill-fadein"
                } `}
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{ backgroundColor: skill.bgColor }}
                  className={`app__flex skills-item-imgcontainer ${
                    skill.tags.includes(activeFilter)
                      ? "active-skill"
                      : "non-active-skill"
                  }`}
                />
              </div>
              <p className="skills-item-text ">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="skills-info">
          <h1 className="header-text skills-header">Skills & Technologies</h1>
          <h2
            className="header-text-3 skills-info-about"
            style={{ marginTop: "1.6rem" }}
          >
            As a full stack developer, I utilize several{" "}
            <span className="color-primary-dark">tools</span> and{" "}
            <span className="color-primary-dark">database/cloud</span> platforms
            in order to master both the{" "}
            <span className="color-primary-dark">front</span> and{" "}
            <span className="color-primary-dark">back</span> end.
          </h2>

          {/* Buttons for skill tags */}
          <div className="skills-filter" style={{ marginTop: "1.6rem" }}>
            {["Frontend", "Backend", "Tools", "Database"].map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleSkillsFilter(item)}
                onMouseLeave={() => handleSkillsFilter("None")}
                className={`skills-filter-item app__flex ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrapper(Skills, "skills");