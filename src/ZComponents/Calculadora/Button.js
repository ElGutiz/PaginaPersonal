import React, { Component } from "react";

const isOperator = (val) => !isNaN(val) || val === "." || val === "=";

class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div
        role="presentation"
        className={`button-wrapper ${isOperator(this.props.children) ? null : "operator"}`}
        onClick={this.props.addToInput}
        data-testid="existe1"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
