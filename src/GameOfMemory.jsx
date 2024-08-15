import { Scoreboard } from "./components/Scoreboard";
import { Cards } from "./components/Cards";
import { Results } from "./components/Results";
import { LogicGameOfMemoryProvider } from "./components/LogicGameOfMemory";
import { useGameOfMemory } from "./hooks/UseGameOfMemory";

import "./css/GameOfMemory.css";
import "./css/Cards.css";

function GameOfMemory() {
  return (
    <LogicGameOfMemoryProvider>
      <GameOfMemoryContent />
    </LogicGameOfMemoryProvider>
  );
}

export function GameOfMemoryContent() {
  const { cards } = useGameOfMemory();
  
  return (
    <div className="game-memory">
      <div className="game-memory-content">
        <h1>Jogo da Memória</h1>
        <Scoreboard />
        <div className="game-memory-cards">
          {cards.length > 0 ? (
            cards.map((card) => (
              <Cards key={card.id} {...card} />
            ))
          ) : (
            <p>Carregando cartas...</p> // Isso garante que há feedback visual se as cartas não forem carregadas
          )}
        </div>
      </div>
      <Results />
    </div>
  );
}

export default GameOfMemory;
