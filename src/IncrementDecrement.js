import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

class IncrementDecrement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: props.number,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    let i = this.state.num + 1;
    this.setState({ num: i });
  }

  decrement = () => {
    if (this.state.num === 0) alert("Cannot be less than zero");
    else {
      let i = this.state.num - 1;
      this.setState({ num: i });
    }
  };

  render() {
    return (
      <div className="incr-decr">
        <button onClick={this.increment}>Increment</button>
        <p>{this.state.num}</p>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

IncrementDecrement.propTypes = {
  number: PropTypes.number.isRequired,
};

export default IncrementDecrement;
