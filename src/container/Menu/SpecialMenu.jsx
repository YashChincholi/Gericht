import React from "react";
import { images, data } from "../../constants";
import { MenuItem, SubHeading } from "../../components";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, idx) => (
            <MenuItem
              key={wine.title + idx}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, idx) => (
            <MenuItem
              key={cocktail.title + idx}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="app__specialMenu-btn">
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
