import React from "react";

import Header from "../ZComponents/MemoryGame/Header";
import Tablero from "../ZComponents/MemoryGame/Tablero";
import contruirBaraja from "../ZUtils/Baraja";

const getInitialState = () => {
  const baraja = contruirBaraja();
  return {
    baraja,
    selectedCards: [],
    comparing: false,
    tryNumber: 0,
  };
};

class StartApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  selectCard(card) {
    if (
      this.state.comparing
      || this.state.selectedCards.indexOf(card) > -1
      || card.guessed
    ) {
      return;
    }
    const selectedCards = [...this.state.selectedCards, card];
    this.setState({
      selectedCards,
    });
    if (selectedCards.length === 2) {
      this.compareCards(selectedCards);
    }
  }

  compareCards(selectedCards) {
    this.setState({ comparing: true });

    setTimeout(() => {
      const [firstCard, secondCard] = selectedCards;
      let { baraja } = this.state;

      if (firstCard.icon === secondCard.icon) {
        baraja = baraja.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }

          return { ...card, guessed: true };
        });
      }

      this.victory(baraja);
      const { tryNumber } = this.state;
      this.setState({
        selectedCards: [],
        baraja,
        comparing: false,
        tryNumber: tryNumber + 1,
      });
    }, 1000);
  }

  victory(baraja) {
    const { tryNumber } = this.state;
    if (baraja.filter((card) => !card.guessed).length === 0) {
      alert(`You win in only ${tryNumber} movements`);
    }
  }

  resetGame() {
    this.setState(
      getInitialState(),
    );
  }

  render() {
    const { tryNumber, selectedCards, baraja } = this.state;
    return (
      <div className="startName">
        <Header
          tryNumber={tryNumber}
          resetGame={() => this.resetGame()}
        />
        <Tablero
          baraja={baraja}
          selectedCards={selectedCards}
          selectCard={(card) => this.selectCard(card)}
        />
      </div>
    );
  }
}

export default StartApp;
