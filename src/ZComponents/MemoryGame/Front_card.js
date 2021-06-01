import React from "react";

import "../../ZStyles/MemoryGame/Carta.css";

class FrontCard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="portrait" onClick={this.props.handleClick} role="button" aria-label=" "/>
    );
  }
}

export default FrontCard;