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

        const cardFaceVisible = idCardsTurnedOver.includes(id);
        if(cardFaceVisible) {
            return;
        }

        if (idCardsTurnedOver.length >= 2) {
            return; setIdCardsTurnedOver([]);
        }
        if (idCardsTurnedOver.length === 0) {
            return setIdCardsTurnedOver([id])

        }
        
        setIdCardsTurnedOver((ids) => [ids[0], id]);
        
        const time = 2000;

        setTimeout(() => {
            setIdCardsTurnedOver([]);
        }, time)
    };

    
    const values = {
        cards, 
        countCardsTurnedOver,
        CountPoints,
        idCardsTurnedOver,
        idsPairFound,  
        turnCards,
    };

    return (
    <LogicGameOfMemoryContext.Provider value={values}>
        {children}
    </LogicGameOfMemoryContext.Provider>
    );
};
