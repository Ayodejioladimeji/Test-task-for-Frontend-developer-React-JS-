import React from "react";

// COMPONENTS
import funnel from "../../../assets/funnel.png";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <>
      <div className="section-two-left">
        <img src={funnel} alt="left_one" />
        <div className="left-active"></div>
      </div>

      <div className="section-two-right">
        <div className="right-one">
          <div className="right-one-box">
            <h4>Searches</h4>
            <div className="tag">+5%</div>
          </div>
          <div className="right-one-box">
            <h3>29,380</h3>
            <div className="">Yesterday</div>
          </div>
          <div className="right-one-box">
            <h3 className="deep">27,985</h3>
            <div className="deep">Last friday</div>
          </div>
        </div>

        <div className="right-two">
          <h3>Mobile traffic: 100%</h3>
          <h3>Web traffic: 100%</h3>
          <p>You get 100% traffic on mobile and desktop devices.</p>
          <small>
            Help: <span>Searches, Pessimisation</span>
          </small>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
