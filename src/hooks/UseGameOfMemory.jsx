import { useContext} from "react";
import { LogicGameOfMemoryContext } from "../components/LogicGameOfMemory";

export const UseGameOfMemory = () => {
    const context = useContext(LogicGameOfMemoryContext);
    return (
        context
    )
}