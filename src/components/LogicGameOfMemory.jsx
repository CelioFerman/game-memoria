import { createContext, useState } from "react";

export const LogicGameOfMemoryContext = createContext();

export const LogicGameOfMemoryProvider = ({ children }) => {

    const [cards, setCards] = useState([]);
    const [idsPairFound, setIdsPairFound] = useState([]);
    const [idCardsTurnedOver, setIdCardsTurnedOver] = useState([]);


    const [countCardsTurnedOver, setCountCardsTurnedOver] = useState(0);
    const [CountPoints, setCountPoints] = useState(0);

    const increaseCardsTurnedOver = () => {
        setCountCardsTurnedOver((prevCount) => prevCount + 1);;
    };

    const turnCards = ( {id, idPair} ) => {
        increaseCardsTurnedOver();
        setIdCardsTurnedOver(ids => [...ids, id] );
    }
    
    const values = {
        cards, 
        countCardsTurnedOver,
        CountPoints,
        idCardsTurnedOver,
        turnCards,
    };

    return (
    <LogicGameOfMemoryContext.Provider value={values}>
        {children}
    </LogicGameOfMemoryContext.Provider>
    );
};
