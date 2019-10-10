import React, { Component } from "react";
import axios from "axios";
import "./Later.css";

const BASE_URL = "http://localhost:3001";

class Later extends Component {
  constructor() {
    super();
    this.state = {
      lateMeals: []
    };
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/laterMeals").then(response => {
      this.setState({ lateMeals: response.data });
    });
  }

  render() {
    const eMeals = this.state.lateMeals.map(meal => {
      return (
        <div key={meal.id} className="box">
          <div className="className image-wrap">
            <img className="e-image" src={meal.picture} alt="" />
          </div>
          <div className="className overlay">
            <div className="text">
              <div className="name"> {meal.name}</div>
              <div className="info">Price: ${meal.price}</div>
              <div className="description">Description: {meal.description}</div>
              <div className="n-info">
                {meal.noBase ? (
                  <div>
                    Nutritional Information (No Base): *Must add a "Base" from
                    accurate Nutritional Info{" "}
                    {meal.nutritionalInfo.map(info => {
                      return (
                        <ul className="dash">
                          <li>{info}</li>
                        </ul>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    Nutritional Information:{" "}
                    {meal.nutritionalInfo.map(info => {
                      return (
                        <ul className="dash">
                          <li>{info}</li>
                        </ul>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <section className=" section section-dark">
          <span className="later"> Later </span>
          <span className="center-line-up">
            Available 11 AM - Close
            <span className="line-up"> {eMeals}</span>
          </span>
        </section>
        <div className="padding">
          <div className="pimg5">
            <div className="ptext2">COLD-PRESSED JUICES & MORE</div>
          </div>
        </div>
        <span className="border"></span>
      </div>
    );
  }
}

export default Later;
