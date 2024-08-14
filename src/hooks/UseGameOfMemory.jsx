import { useContext} from "react";
import { LogicGameOfMemoryContext } from "../components/LogicGameOfMemory";

export const useGameOfMemory = () => {
    const context = useContext(LogicGameOfMemoryContext);
    return (
        context
    )
}