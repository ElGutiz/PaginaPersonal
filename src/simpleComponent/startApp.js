import React from "react";

import Header from "../ZComponents/MemoryGame/Header";
import Tablero from "../ZComponents/MemoryGame/Tablero";
import contruirBaraja from "../ZUtils/Baraja";

import "font-awesome/css/font-awesome.css";

import "../ZStyles/startApp_style.css";

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
    const openInNewTab = (url) => {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    };
    return (
      <div>
        <div className="No1Work">
          <div className="row">
            <div className="MemoryGameComponent column">
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
            <div className="MemoryGameText column ">
              <h1>Juego de Memoria</h1>
              <p>
                Un juego de memoria hecho con componentes en React que a su vez
                utiliza logica de JSX para verificar si las cartas seleccionadas son iguales o no,
                el numero de intentos, mensaje de victoria y boton para reiniciar el juego con
                cartas distintas.
              </p>
              <button
                type="button"
                onClick={() => openInNewTab("https://github.com/ElGutiz/Laboratorio8_React")}
              >
                <i className="fa fa-github" />
                {" "}
                Repositorio
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartApp;
