import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./project.scss";

const Project = () => {
  return (
    <div className="project_wrapper">
      <div className="container">
        <div className="project_heading">
        <h1>Ideas Brought to Life</h1>
        </div>
      </div>

      <div className="projects">
        <div className="project">
          <div className="container">
            <div className="project_wrap">
              <div className="title">
                <strong>Branding / Mobile App</strong>
                <h2>OpenAI</h2>
              </div>
              <div className="project_desc">
                <h3>Article Gen & Chatbot</h3>
                <div className="desc_cta">
                  <p>VIEW THE CASE STUDY</p>
                  <div>
                    <FiArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="container">
            <div className="project_wrap">
              <div className="title">
                <strong>Ar / Mobile App</strong>
                <h2>Intel</h2>
              </div>
              <div className="project_desc">
                <h3>Vehicle Plate Recognition</h3>
                <div className="desc_cta">
                  <p>VIEW THE CASE STUDY</p>
                  <div>
                    <FiArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="container">
            <div className="project_wrap">
              <div className="title">
                <strong>Ar / Mobile App</strong>
                <h2>
                  YOUTH <br /> OLYMPICS{" "}
                </h2>
              </div>
              <div className="project_desc">
                <h3>
                  Accounting for Gen-Z <br /> freelancers
                </h3>
                <div className="desc_cta">
                  <p>VIEW THE CASE STUDY</p>
                  <div>
                    <FiArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
