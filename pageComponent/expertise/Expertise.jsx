import React, { useEffect, useState } from "react";
import OldPaper from "../../assets/scan/oldPaper.png";
import paperPart from "../../assets/scan/paperPart.png";
import newPaper from "../../assets/scan/newPaper.png";
import part1 from "../../assets/scan/part1.png";
import part2 from "../../assets/scan/part2.png";
import part3 from "../../assets/scan/part3.png";
import "./expertise.scss";

const Expertise = () => {
  const [active, setActive] = useState(1);
  const [reAnimate, setReAnimate] = useState(false);
  useEffect(() => {
    const oldPaper = document.querySelector(".oldPage");
    const PaperPart = document.querySelector(".paperPart");
    const NewPaper = document.querySelector(".newPage");
    const line = document.querySelector(".scan_line");
    const paperAnimation = (isAnimate) => {
      if (isAnimate) {
        oldPaper.classList.add("oldPageActive");
        line.classList.add("lineActive");
        PaperPart.classList.add("paperPartActive");
        NewPaper.classList.add("newPageActive");
      } else {
        oldPaper.classList.remove("oldPageActive");
        line.classList.remove("lineActive");
        PaperPart.classList.remove("paperPartActive");
        NewPaper.classList.remove("newPageActive");
      }
    };
    paperAnimation(true);
    setTimeout(() => {
      paperAnimation(false);
      setTimeout(() => {
        setReAnimate(!reAnimate);
      }, 500);
    }, 8000);
  }, [reAnimate]);
  useEffect(() => {
    const video = document.querySelector('.video')
      video.play()
  }, [active]);
  return (
    <div className="container">
      <div className="expertise_wrapper">
        <div className="expertise_heading">
          <h1>Our fields of expertise</h1>
          <p>
            We enjoy adapting our strategies to offer every client the best
            solutions that are at the <br /> forefront of the industry.
          </p>
        </div>
        <div className="expertise_tab">
          <div className="tabs">
            <div
              className={`tab ${active === 1 && "tab_active"}`}
              onClick={() => setActive(1)}
            >
              Data Extraction
            </div>
            <div
              className={`tab ${active === 2 && "tab_active"}`}
              onClick={() => setActive(2)}
            >
              Process Automation
            </div>
          </div>
          <div className="tab_content_wrapper">
            <div
              className={`tab_content review_bg ${
                active === 1 && "tab_content_active"
              }`}
            >
              <div className="tab_content_wrapper">
                <div className="scan_animation">
                  <img className="oldPage" src={OldPaper} alt="paper" />
                  <div className="paperPart">
                    <div className="part_wrap">
                      <img src={paperPart} alt="" />
                      <img className="part" src={part1} alt="paper" />
                      <img className="part" src={part2} alt="paper" />
                      <img className="part" src={part3} alt="paper" />
                    </div>
                  </div>
                  <img className="newPage" src={newPaper} alt="paper" />
                  <div className="scan_line"></div>
                </div>
                <div>
                  <h4>Process 100% of Complex Documents</h4>
                  <p>
                    Automate business processes end-to-end with guaranteed
                    results using super.AI Intelligent Document Processing
                    (IDP).
                  </p>
                  <ul>
                    <li>Improving Business Analytics</li>
                    <li>Customized AI solutions</li>
                    <li>Best in class solutions</li>
                  </ul>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
            <div
              className={`tab_content review_bg ${
                active === 2 && "tab_content_active"
              }`}
            >
              <div className="tab_content_wrapper">
                <div>
                  <h4>Serving businesses AI</h4>
                  <p>
                    Whatever your business nature, ordinary or difficult,we will
                    be happy to serve you. Tell us your business plan and get
                    assistance from our experts in AI services.
                  </p>
                  <ul>
                    <li>Improving Business Analytics</li>
                    <li>Customized AI solutions</li>
                    <li>Best in class solutions</li>
                  </ul>
                  <button>Learn more</button>
                </div>
                <video src="./automation.mov" autoPlay width="100%" className="video"></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
