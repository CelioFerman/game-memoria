import { Scoreboard } from "./Scoreboard"
import { Cards } from "./Cards"
import { pairOfCards } from "../js/Pokemons"
import '../css/GameOfMemory.css'
import '../css/Cards.css'
import { Results } from "./Results";

export const GameOfMemory = () => {
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
    )
}