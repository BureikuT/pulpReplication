import React, { Component } from "react";
import Early from './early/Early'
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="parallax">
        {/* <div className="pimg1">
          <div className="ptext">
            <span className="border">
              <h2>DELICIOUS & HEALTHY BREAKFAST </h2>
            </span>
          </div>
        </div> */}

        {/* <section className="section section-light">
          Section One
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nostrum totam vitae sed ullam, mollitia est saepe, similique
            temporibus aut inventore distin ctio suscipit labore quam
            exercitationem natus neque rerum corporis.
          </p>
        </section> */}
        <div className="pimg2">
          <div className="ptext">
            <span className="border1">DELICIOUS & HEALTHY BREAKFAST </span>
            <span className="line"></span>
            <span className="menu-info">
              Click here to view the
              <a
                className="menu"
                href="https://docs.wixstatic.com/ugd/0f290e_1bf09d9f014d402eb686a433c52b6dc6.pdf"
              >
                {" "}
                complete menu{" "}
              </a>{" "}
              &
              <a
                className="nutrition"
                href="https://docs.wixstatic.com/ugd/0f290e_1a1e815dbb6d4389ba91b86f13781b6b.pdf"
              >
                {" "}
                nutritional information
              </a>{" "}
            </span>
          </div>
        </div>
        
        {/* <section className=" section section-dark">
          <h2>Section Three</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nostrum totam vitae sed ullam, mollitia est saepe, similique
            temporibus aut inventore distin ctio suscipit labore quam
            exercitationem natus neque rerum corporis.
          </p>
        </section> */}
        <Early/>
      </div>
    );
  }
}

export default Menu;
