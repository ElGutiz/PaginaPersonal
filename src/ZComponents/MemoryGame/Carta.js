import React from "react";
import FlipCard from "react-card-flip";
import FrontCard from "./Front_card";
import BackCard from "./Back_card";

import "../../ZStyles/MemoryGame/Carta.css";

class Carta extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="carta">
        <FlipCard isFlipped={this.props.beingCompare || this.props.guessed} flipDirection="vertical">
          <FrontCard handleClick={this.props.selectCard} />
          <BackCard handleClick={this.props.selectCard} icon={this.props.icon} />
        </FlipCard>
      </div>
    );
  }
}

export default Carta;
