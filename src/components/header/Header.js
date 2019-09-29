import React, { Component } from "react";
import { Link } from "react-router-dom";
import pulp from "../pics/pulp.webp";
import facebook from "../pics/facebook.webp";
import instagram from "../pics/instagram.webp";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-body">
        <div className="pulp-logo">
          <img className="logo" alt="" src={pulp} />
        </div>
        <div className="pulp-links">
          <div className="link">ABOUT</div>
          <div className="link">MENU</div>
          <div >
            <Link to="/contact" className='link'>CONTACT</Link>
          </div>
          <div className="link">FAQ</div>
          <div className="link">CATERING</div>
          <div className="link">ONLINE ORDER</div>
          <div className="link">PULP EXPRESS</div>
          <div className="link">GIFT CARD</div>
        </div>
        <div className="social-links">
          <div className="social">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="social">
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
