import React, { Component } from "react";
import Early from './early/Early'
import Later from './later/Later'

import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="parallax">
        <div className="pimg2">
          <div className="ptext">
            <span className="border1">DELICIOUS & HEALTHY BREAKFAST </span>
            <span className="line"></span>
            <span className="menu-info">
              Click here to view the
              <a
                className="menu"
                href="https://docs.wixstatic.com/ugd/0f290e_1bf09d9f014d402eb686a433c52b6dc6.pdf" target="_blank">{" "}complete menu{" "}
              </a>{" "}
              &
              <a
                className="nutrition"
                href="https://docs.wixstatic.com/ugd/0f290e_1a1e815dbb6d4389ba91b86f13781b6b.pdf" target="_blank"
              >
                {" "}
                nutritional information
              </a>{" "}
            </span>
          </div>
        </div>
        
       
        <Early/>
        <Later/>
      </div>
    );
  }
}

export default Menu;
