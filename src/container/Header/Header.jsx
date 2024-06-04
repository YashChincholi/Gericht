import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The key to Fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        The key to fine dining lies in the seamless blend of exquisite cuisine,
        impeccable service, and an inviting ambiance. At its core, fine dining
        is an art form that transforms a meal into an unforgettable experience.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="imageheader" />
    </div>
  </div>
);

export default Header;
