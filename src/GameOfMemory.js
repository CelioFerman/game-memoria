import { Scoreboard } from "./components/Scoreboard"
import { Cards } from "./components/Cards"
import { pairOfCards } from "./components/Pokemons"
import { Results } from "./components/Results";
import './css/GameOfMemory.css'
import './css/Cards.css'
function GameOfMemory() {
  return (
      <div className="game-memory">
          <div className="game-memory-content"></div>
          Jogo da Mémoria
          <Scoreboard />
          <div className="game-memory-cards">
              {pairOfCards.map((card) => (<Cards key={card.id} {...card} />))};
          </div>
          <Results />
      </div>
  );
}

export default GameOfMemory;
