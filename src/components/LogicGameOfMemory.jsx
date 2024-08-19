import { createContext, useState, useCallback, useEffect } from "react";
import { pairOfCards } from "../components/Pokemons";

export const LogicGameOfMemoryContext = createContext();

export const LogicGameOfMemoryProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [idsPairFound, setIdsPairFound] = useState([]);
  const [idCardsTurnedOver, setIdCardsTurnedOver] = useState([]);
  const [countCardsTurnedOver, setCountCardsTurnedOver] = useState(0);
  const [playerPoints, setPlayerPoints] = useState({ player1: 0, player2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState("player1");

  const shuffleCards = (cardsArray) => {
    return cardsArray.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const shuffledCards = shuffleCards(pairOfCards,);
    setCards(shuffledCards);
  }, []);

  const increaseCardsTurnedOver = useCallback(() => {
    setCountCardsTurnedOver((prevCount) => prevCount + 1);
  }, []);

  const increasePoints = useCallback(() => {
    setPlayerPoints((prevPoints) => ({
      ...prevPoints,
      [currentPlayer]: prevPoints[currentPlayer] + 3,
    }));
  }, [currentPlayer]);

  const switchPlayer = useCallback(() => {
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === "player1" ? "player2" : "player1"
    );
  }, []);

  const compareCards = useCallback(
    ([id1, id2]) => {
      const idPair1 = cards.find(({ id }) => id === id1)?.idPair;
      const idPair2 = cards.find(({ id }) => id === id2)?.idPair;
      return idPair1 === idPair2;
    },
    [cards]
  );

  const turnCards = useCallback(
    ({ id, idPair }) => {
      if (idCardsTurnedOver.length >= 2 || idCardsTurnedOver.includes(id)) {
        return;
      }

      const updatedIds = [...idCardsTurnedOver, id];
      setIdCardsTurnedOver(updatedIds);
      increaseCardsTurnedOver();

      if (updatedIds.length === 2) {
        const [id1, id2] = updatedIds;
        const isMatch = compareCards([id1, id2]);

        if (isMatch) {
          setIdsPairFound((prevIds) => [...prevIds, idPair]);
          increasePoints();
          setIdCardsTurnedOver([]);
        } else {
          setTimeout(() => {
            setIdCardsTurnedOver([]);
            switchPlayer();
          }, 1500);
        }
      }
    },
    [idCardsTurnedOver, compareCards, increaseCardsTurnedOver, increasePoints, switchPlayer]
  );

  const values = {
    cards,
    countCardsTurnedOver,
    playerPoints,
    currentPlayer,
    turnCards,
    idCardsTurnedOver,
    idsPairFound,
  };

  return (
    <LogicGameOfMemoryContext.Provider value={values}>
      {children}
    </LogicGameOfMemoryContext.Provider>
  );
};
