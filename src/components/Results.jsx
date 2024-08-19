import { useState, useEffect } from "react";
import classNames from "classnames";
import "../css/Results.css";

export const Results = ({ player1Points, player2Points, gameFinished }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (gameFinished) {
      setIsOpen(true);
    }
  }, [gameFinished]);

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
    "results-open": isOpen,
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
