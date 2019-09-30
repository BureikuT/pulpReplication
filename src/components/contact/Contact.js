import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";
import ContactForm from "./contactForm/ContactForm";

const BASE_URL = "http://localhost:3001";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/locations").then(response => {
      this.setState({ locations: response.data });
    });
  }

  render() {
    const showLocations = this.state.locations.map(location => {
      return (
        <div key={location.id} className="location-list">
          <div className="location-items">
            <div className="location-images">
              <img src={location.picture} alt='' />
            </div>
            <div className="info-row">
              <div className="info-title">{location.title}</div>
              <div className="info">{location.street}</div>
              <div className="info">{location.phoneNumber}</div>
              <div className="info">{location.weekDays}</div>
              <div className="info">{location.weekend}</div>
              <div className="info">{location.weekend2}</div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="center-info">{showLocations}</div>
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
