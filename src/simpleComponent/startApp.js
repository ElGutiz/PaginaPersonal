import React from "react";
import * as math from "mathjs";

import Header from "../ZComponents/MemoryGame/Header";
import Tablero from "../ZComponents/MemoryGame/Tablero";
import contruirBaraja from "../ZUtils/Baraja";

import Button from "../ZComponents/Calculadora/Button";
import ClearButton from "../ZComponents/Calculadora/ClearButton";
import Input from "../ZComponents/Calculadora/Input";

import "font-awesome/css/font-awesome.css";

import "../ZStyles/startApp_style.css";

const getInitialState = () => {
  const baraja = contruirBaraja();
  return {
    baraja,
    selectedCards: [],
    comparing: false,
    tryNumber: 0,
    input: "",
    Donee: false,
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
    const divisionSign = "/";
    const addSign = "+";
    const substractSign = "-";
    const multiplySign = "*";
    const decimalSign = ".";
    const moduleSign = "%";

    const { input, Donee } = this.state;

    function LenghtLimitN() {
      return <Input input={input} />;
    }

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
        <div className="No2Work">
          <div className="CalculatorComponent column">
            <div className="calc-wrapper">
              <LenghtLimitN />
              <div className="rowC">
                <Button addToInput={() => this.setState({ input: input + 7, Donee: false })}>
                  7
                </Button>
                <Button data-testid="agregar" addToInput={() => this.setState({ input: input + 8, Donee: false })}>8</Button>
                <Button addToInput={() => this.setState({ input: input + 9, Donee: false })}>
                  9
                </Button>
                <Button addToInput={() => this.setState({
                  input: input + divisionSign,
                  Donee: false,
                })}
                >
                  /
                </Button>
              </div>
              <div className="rowC">
                <Button addToInput={() => this.setState({ input: input + 4, Donee: false })}>
                  4
                </Button>
                <Button addToInput={() => this.setState({ input: input + 5, Donee: false })}>
                  5
                </Button>
                <Button addToInput={() => this.setState({ input: input + 6, Donee: false })}>
                  6
                </Button>
                <Button addToInput={() => this.setState({
                  input: input + multiplySign,
                  Donee: false,
                })}
                >
                  x
                </Button>
              </div>
              <div className="rowC">
                <Button addToInput={() => this.setState({
                  input: input + 1,
                  Donee: false,
                })}
                >
                  1
                </Button>
                <Button addToInput={() => this.setState({
                  input: input + 2,
                  Donee: false,
                })}
                >
                  2
                </Button>
                <Button addToInput={() => this.setState({
                  input: input + 3,
                  Donee: false,
                })}
                >
                  3
                </Button>
                <Button addToInput={() => this.setState({ input: input + addSign, Donee: false })}>
                  +
                </Button>
              </div>
              <div className="rowC">
                <Button addToInput={() => this.setState({
                  input: input + decimalSign,
                  Donee: false,
                })}
                >
                  .
                </Button>
                <Button addToInput={() => this.setState({
                  input: input + 0,
                  Donee: false,
                })}
                >
                  0
                </Button>
                <Button
                  addToInput={() => this.setState({
                    input: input.includes("Infinity") ? 0 : math.evaluate(input).toString().substring(0, 9),
                    Donee: true,
                  })}
                >
                  =
                </Button>
                <Button addToInput={() => this.setState({
                  input: input + substractSign,
                  Donee: false,
                })}
                >
                  -
                </Button>
              </div>
              <div className="rowC">
                <Button addToInput={() => this.setState({ input: math.evaluate(`-1 *${parseInt(input, 10)}`) })}>+/-</Button>
                <Button addToInput={() => this.setState({ input: input + moduleSign })}>%</Button>
                <ClearButton handleClear={() => this.setState({ input: "" })}>Erase</ClearButton>
              </div>
            </div>
          </div>
          <div className="CalculatorText column ">
            <h1>Calculadora</h1>
            <p>
              Una calculadora que permite realizar el calculo de una cadena de caracteres
              donde el resultado no pasa de los 9 caracteres. Permite el calculo de operaciones
              basicas, modulo, cambiar signo y control sobre division sobre 0.
            </p>
            <button
              type="button"
              onClick={() => openInNewTab("https://github.com/ElGutiz/Calculadora-WEB")}
            >
              <i className="fa fa-github" />
              {" "}
              Repositorio
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StartApp;
