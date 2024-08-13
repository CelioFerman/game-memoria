import { Scoreboard } from "./Scoreboard";

export const Results = ({ player1Points, player2Points }) => {
    const getWinner = () => {
        if (player1Points > player2Points) {
            return "Player 1 Venceu!";
        } else if (player2Points > player1Points) {
            return "Player 2 Venceu!";
        } else {
            return "Empate!";
        }
    };

    return (
        <div className="results">
            <div className="results-content">
                <h2>{getWinner()}</h2>
                <button className="new-game" onClick={() => window.location.reload()}>
                    Nova Partida
                </button>
            </div>
        </div>
    );
};