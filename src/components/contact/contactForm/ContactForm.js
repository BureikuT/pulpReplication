import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form">
        <div className="info-email">We would love to hear from you.</div>
        <div className="say-hello">
          <span>
            Feel free to use the contact form below to send us a message.{" "}
          </span>
          <span>We will get back to you shortly. Or email us at:</span>
          <span>
            <strong>hi@pulpnlifestylekitchen.com</strong> Thanks!
          </span>
        </div>
        <div className="info-input">
          <span>
            <input className="small-input" type="text" placeholder="Name *" />
          </span>
          <span>
            <input className="small-input" type="text" placeholder="Email *" />
          </span>
          <span>
            <textarea
              className="large-input"
              type="text"
              placeholder="Message *"
            />
          </span>
        </div>
        <div className='send-button'> <button className='button'>SEND</button></div>
      </div>
    );
  }
}

export default ContactForm;
