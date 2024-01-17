import React from "react";
import Me from "../assets/me.jpeg";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { experienceConfig } from "../config/resume/experienceConfig";
import { technicalSkillsConfig } from "../config/resume/technicalSkillsConfig";
import { transferrableSkillsConfig } from "../config/resume/transferrableSkillsConfig";
import { AnimatedHeader } from "../components/AnimateHeader";

const Resume = () => {
  return (
    <div id="resume" className="container">
      <div
        className="projects__text-container"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <AnimatedHeader className={"projects__header"} headerText={"Resume"} />
      </div>
      <div className="resume__wrapper">
        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__image">
            <img src={Me} alt="" />
          </div>
          <div>
            <div className="resume__name playfair">David Bragg</div>
            <div className="resume__title lato">Software Engineer</div>
            <div className="resume__contact--info">
              <div>
                <FaDownload />
                <a className="resume__link" href="/resume.pdf" target="_blank">
                  Download resume
                </a>
              </div>
              <div>
                <MdEmail />
                <a className="resume__link" href="mailto:example@example.com">
                  Email
                </a>
              </div>
              <div>
                <AiFillLinkedin />
                <a
                  className="resume__link"
                  href="https://linkedin.com/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div>
              A highly motivated software engineer prepared to utilise
              exceptional software, problem-solving and communication skills to
              further my programming passion as a website developer.
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Education</div>
          <div>
            <div className="resume__education--wrapper">
              <div className="resume__education">
                <div className="resume__job--name">
                  University of Technology, Sydney
                </div>
                <div>
                  Bachelor of Engineering (Honours), Software Engineering Major
                  Diploma in Professional Engineering Practice
                </div>
              </div>
              <div className="resume__job--date">2018 - 2021</div>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Experience</div>
          <div>
            {experienceConfig.map((experience, index) => (
              <div className="resume__job--wrapper" key={index}>
                <div className="resume__job">
                  <div>
                    <div className="resume__job--name">{experience.name}</div>
                    <div className="resume__job--description">
                      {experience.title}
                    </div>
                  </div>
                  <div className="resume__job--date">{experience.date}</div>
                </div>

                <ul className="resume__list-wrapper">
                  {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Technical Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {technicalSkillsConfig.map((technicalSkills, index) => (
                  <li key={index}>{technicalSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Transferrable Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {transferrableSkillsConfig.map((transferrableSkills, index) => (
                  <li key={index}>{transferrableSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="resume__grid resume__bottom" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">References</div>
          <div>Available Upon request</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
