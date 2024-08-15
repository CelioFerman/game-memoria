import classNames from "classnames";
import "../css/Results.css";

export const Results = ({ player1Points, player2Points }) => {
  const getWinner = () => {
    if (player1Points > player2Points) {
      return "Jogador 1 Venceu!";
    } else if (player2Points > player1Points) {
      return "Jogador 2 Venceu!";
    } else {
      return "Empate!";
    }
  };

  const cn = classNames("results", {
    "results-open": false,
  });

  return (
    <div className={cn}>
      <div className="results-content">
        <h2>{getWinner()}</h2>
        <button
          className="new-game"
          onClick={() => window.location.reload()}
        >
          Nova Partida
        </button>
      </div>
    </div>
  );
};
