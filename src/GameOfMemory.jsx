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
  const { cards, playerPoints, finishedGame } = useGameOfMemory();
  
  
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
            <p>Loading...</p>
          )}
        </div>
        <Results 
          player1Points={playerPoints.player1} 
          player2Points={playerPoints.player2} 
          gameFinished={finishedGame} 
        />
      </div>
    </div>
  );
}

export default GameOfMemory;
