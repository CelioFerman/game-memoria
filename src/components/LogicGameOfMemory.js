import { createContext } from "react";

const logicGameOfMemoryContext = createContext();

export const logicGameOfMemoryProvider = ({ children }) => {
    const values = {

    };

    return (
    <logicGameOfMemoryContext.Provider value={values}>
        {children}
    </logicGameOfMemoryContext.Provider>
    );
};
