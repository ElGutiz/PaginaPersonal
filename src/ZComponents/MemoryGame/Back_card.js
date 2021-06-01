import React from "react";

import "../../ZStyles/MemoryGame/Carta.css";

class BackCard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="content" onClick={this.props.handleClick}>
        <i className={`fa ${this.props.icon} fa-5x`} />
      </div>
    );
  }
}

export default BackCard;