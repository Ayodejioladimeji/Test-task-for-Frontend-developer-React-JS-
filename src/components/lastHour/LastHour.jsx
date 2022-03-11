import React from "react";

// COMPONENTS
import SectionOne from "./sectionone/SectionOne";
import SectionTwo from "./sectiontwo/SectionTwo";
import SectionThree from "./sectionthree/SectionThree";
import SectionFour from "./sectionfour/SectionFour";

const LastHour = () => {
  return (
    <div className="last-hour">
      <div className="section-one">
        <SectionOne />
      </div>

      {/* SECTION TWO */}
      <div className="section-two">
        <SectionTwo />
      </div>

      {/* SECTION THREE */}
      <div className="section-three">
        <SectionThree />
      </div>

      {/* SECTION FOUR */}
      <div className="section-four">
        <SectionFour />
      </div>
    </div>
  );
};

export default LastHour;
