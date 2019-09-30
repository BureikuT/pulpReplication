import React, { Component } from "react";
import './Early.css'

class Early extends Component {
  render() {
    return (
      <div>
        <section className="section section-dark">
          <span className='early'>Early</span>
          <span>Available until 11 AM, Monday through Friday and all day Saturday and Sunday</span>
        </section>
        
        <div className="pimg3">
          <div className="ptext">
            <span className="border"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Early;
