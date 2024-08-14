import { createContext, useState } from "react";

export const LogicGameOfMemoryContext = createContext();

export const LogicGameOfMemoryProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [idsPairFound, setIdsPairFound] = useState([]);
  const [idCardsTurnedOver, setIdCardsTurnedOver] = useState([]);

  const [countCardsTurnedOver, setCountCardsTurnedOver] = useState(0);
  const [CountPoints, setCountPoints] = useState(0);

  const increaseCardsTurnedOver = () => {
    setCountCardsTurnedOver((prevCount) => prevCount + 1);
  };

  const increasePoints = () => {
    setCountPoints((prevCount) => prevCount + 3);
  };

  const compareCards = ([id1, id2]) => {
    const idPair1 = cards.find(({ id }) => id === id1)?.idPair;
    const idPair2 = cards.find(({ id }) => id === id2)?.idPair;
    return idPair1 === idPair2;
  };

  const turnCards = ({ id, idPair }) => {
    increaseCardsTurnedOver();
  
    const cardFaceVisible = idCardsTurnedOver.includes(id);
    if (cardFaceVisible) {
      return;
    }
  
    if (idCardsTurnedOver.length >= 2) {
      setIdCardsTurnedOver([]);
      return;
    }
    
    if (idCardsTurnedOver.length === 0) {
      setIdCardsTurnedOver([id]);
      return;
    }
  
    const ids = [idCardsTurnedOver[0], id];
    setIdCardsTurnedOver(ids);
  
    const equalCards = compareCards(ids);
    if (equalCards) {
      increasePoints();
      setIdsPairFound((ids) => [...ids, idPair]);
    } else {
      const time = 2000;
      setTimeout(() => {
        setIdCardsTurnedOver([]);
      }, time);
    }
  };

  
  const playGame = () => {
    setCards(idsPairFound);
  };

  const values = {
    cards,
    countCardsTurnedOver,
    CountPoints,

    playGame,
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
