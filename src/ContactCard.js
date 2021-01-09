import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

class ContactCard extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       name: "Anastasiya Chabotska",
  //       workPhone: "9175003919",
  //       email: "anastasiyachabotska@gmail.com",
  //     };
  //   }

  render() {
    return (
      <div id="contact-card">
        <h2>Name: </h2>
        <p>{this.props.name}</p>

        <h2>Phone: </h2>
        <p>{this.props.workPhone}</p>

        <h2>E-mail: </h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  workPhone: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default ContactCard;
