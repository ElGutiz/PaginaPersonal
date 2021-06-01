import shuffle from "lodash.shuffle";
import Iconos from "./fontAwesomeClasses";

const CARDS_NUMBER = 20;

export default () => {
  const Iconos2 = Iconos();
  const cards = [];

  while (cards.length < CARDS_NUMBER) {
    const index = Math.floor(Math.random() * Iconos2.length);
    const card = {
      icon: Iconos2.splice(index, 1)[0],
      guessed: false,
    };

    cards.push(card);
    cards.push({ ...card });
  }

  return shuffle(cards);
};
