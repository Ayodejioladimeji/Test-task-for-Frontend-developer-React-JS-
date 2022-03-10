import React from "react";

import click from "../../../assets/click.png";
import "./SectionThree.css";

const SectionTwo = () => {
  return (
    <>
      <div className="section-three-left">
        <img src={click} alt="left_one" />
        <div className="left-active"></div>
      </div>

      <div className="section-three-right">
        <div className="right-one">
          <div className="right-one-box">
            <h4>Clicks</h4>
            <div className="tag">-13%</div>
          </div>

          <div className="right-one-box">
            <h3>243</h3>
            <div className="">Yesterday</div>
          </div>

          <div className="right-one-box">
            <h3 className="deep">280</h3>
            <div className="deep">Last friday</div>
          </div>
        </div>

        <div className="right-two">
          <h3>CTR: 0.04%</h3>
          <p>Conversion from searches to clicks on all devices.</p>
          <small>
            Help: <span>CTR, Cliks</span>
          </small>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
