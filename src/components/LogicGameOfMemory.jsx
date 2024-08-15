import { createContext, useState, useCallback, useEffect } from "react";
import { pairOfCards } from '../components/Pokemons'; // Certifique-se de ajustar o caminho

export const LogicGameOfMemoryContext = createContext();

export const LogicGameOfMemoryProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [idsPairFound, setIdsPairFound] = useState([]);
  const [idCardsTurnedOver, setIdCardsTurnedOver] = useState([]);
  const [countCardsTurnedOver, setCountCardsTurnedOver] = useState(0);
  const [countPoints, setCountPoints] = useState(0);

  // Embaralha as cartas
  const shuffleCards = useCallback(() => {
    const shuffledCards = [...pairOfCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  const increaseCardsTurnedOver = useCallback(() => {
    setCountCardsTurnedOver((prevCount) => prevCount + 1);
  }, []);

  const increasePoints = useCallback(() => {
    setCountPoints((prevCount) => prevCount + 3);
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
      increaseCardsTurnedOver();

      if (idCardsTurnedOver.includes(id) || idCardsTurnedOver.length >= 2) {
        return;
      }

      const updatedIds = idCardsTurnedOver.length === 0 ? [id] : [idCardsTurnedOver[0], id];
      setIdCardsTurnedOver(updatedIds);

      if (updatedIds.length === 2) {
        const equalCards = compareCards(updatedIds);
        if (equalCards) {
          increasePoints();
          setIdsPairFound((prevIds) => [...prevIds, idPair]);
        } else {
          setTimeout(() => {
            setIdCardsTurnedOver([]);
          }, 2000);
        }
      }
    },
    [idCardsTurnedOver, compareCards, increaseCardsTurnedOver, increasePoints]
  );

  const values = {
    cards,
    countCardsTurnedOver,
    countPoints,
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
