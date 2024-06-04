import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__wrapper section__padding app__bg" id="chef">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__wrapper-content">
        <div className="app__wrapper-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Our chef embodies a passion for culinary craftsmanship,pushing the
            boundaries of flavor.
          </p>
        </div>
        <p className="p__opensans">
          Creativity with every dish. We trust in the chef's expertise to curate
          a menu that delights the senses and tells a story through food.
        </p>
      </div>
      <div className="app__wrapper_sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
