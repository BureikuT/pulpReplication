import React, { Component } from "react";
import axios from "axios";
import "./Early.css";

const BASE_URL = "http://localhost:3001";

class Early extends Component {
  constructor() {
    super();
    this.state = {
      earlyMeals: []
    };
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/earlyMeals").then(response => {
      this.setState({ earlyMeals: response.data });
    });
  }

  render() {
    const eMeals = this.state.earlyMeals.map(meal => {
      return (
        <div key={meal.id} className="box">
          <div className="className image-wrap">
            <img className="e-image" src={meal.picture} />
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
        <section className="section section-dark">
          <span className="early">Early</span>
          <span className="center-line-up">
            Available until 11 AM, Monday through Friday and all day Saturday
            and Sunday
            <span className="line-up"> {eMeals}</span>
          </span>
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
