import { Scoreboard } from "./components/Scoreboard"
import { Cards } from "./components/Cards"
import { pairOfCards } from "./components/Pokemons"
import { Results } from "./components/Results"
import { logicGameOfMemoryProvider } from "./components/LogicGameOfMemory"

import './css/GameOfMemory.css'
import './css/Cards.css'

function GameOfMemory() {
    return (
        <logicGameOfMemoryProvider>
            <GameOfMemoryContent />
        </logicGameOfMemoryProvider>
    );
};

export function GameOfMemoryContent() {
    return (
    <div className="game-memory">
        <div className="game-memory-content">
            <h1>Jogo da Memoria</h1>
            <Scoreboard />
            <div className="game-memory-cards">
                {pairOfCards.map((card) => (<Cards key={card.id} {...card} />))};
            </div>
        </div>
            <Results />
    </div>
    );
}

export default GameOfMemory;
