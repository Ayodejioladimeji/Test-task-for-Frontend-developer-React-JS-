import React from "react";

import sales from "../../../assets/sales.png";
import "./SectionFour.css";

const SectionFour = () => {
  return (
    <>
      <div className="section-four-left">
        <img src={sales} alt="left_one" />
        <div className="left-active"></div>
      </div>

      <div className="section-four-right">
        <div className="right-one">
          <div className="right-one-box">
            <h4>Searches</h4>
            <div className="tag">+5%</div>
          </div>
          <div className="right-one-box">
            <h3>24</h3>
            <div className="">Yesterday</div>
          </div>
          <div className="right-one-box">
            <h3 className="deep">24</h3>
            <div className="deep">Last friday</div>
          </div>
        </div>

        <div className="right-two">
          <h3>STR: 6.2% </h3>
          <h3>Avg. Check: 8,903</h3>
          <p>Conversion from cliks to bookings on all devices..</p>
          <small>
            Help: <span>STR, Bookings, Avg. Check</span>
          </small>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
