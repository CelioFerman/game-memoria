import { Scoreboard } from "./components/Scoreboard";
import { Cards } from "./components/Cards";
import { Results } from "./components/Results";
import { LogicGameOfMemoryProvider } from "./components/LogicGameOfMemory";
import { useGameOfMemory } from "./hooks/UseGameOfMemory";
import { useEffect } from "react";

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
  const { cards, playGame } = useGameOfMemory();
  
  useEffect(() => {
    playGame();
  }, []);

  return (
    <div className="game-memory">
      <div className="game-memory-content">
        <h1>Jogo da Memoria</h1>
        <Scoreboard />
        <div className="game-memory-cards">
          {cards.map((card) => (
            <Cards key={card.id} {...card} />
          ))}
        </div>
      </div>
      <Results />
    </div>
  );
}

export default GameOfMemory;
