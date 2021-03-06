import React from "react";
import { useSelector } from "react-redux";

import sales from "../../../assets/sales.png";
import "./SectionFour.css";

const SectionFour = () => {
  const { fetch } = useSelector((state) => state);

  // destructuring from fetch
  const { data } = fetch;

  if (data.length === 0) return null;

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
            <h3>{data[0].data[0].searches_previous_last_hour}</h3>
            <div className="">Yesterday</div>
          </div>
          <div className="right-one-box">
            <h3 className="deep">24</h3>
            <div className="deep">Last friday</div>
          </div>
        </div>

        <div className="right-two">
          <h3>STR:0% </h3>
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
