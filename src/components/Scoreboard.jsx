import { useGameOfMemory } from "../hooks/UseGameOfMemory";
import "../css/Scoreboard.css";

export const Scoreboard = () => {
  const { playerPoints, currentPlayer } = useGameOfMemory();

  return (
    <div className="scoreboard">
      <div className="player1">
      <Points title="Jogador 1" value={playerPoints.player1} />
      </div>
      <div className="currentPlayer">Vez do: {currentPlayer === 'player1' ? 'Jogador 1' : 'Jogador 2'}</div>
      <div className="player2">
      <Points title="Jogador 2" value={playerPoints.player2} />
      </div>
    </div>
  );
};

const Points = ({ title, value }) => {
  return (
    <div className="points">
      <strong className="points-title">{title}</strong>
      <span className="points-value">{value}</span>
    </div>
  );
};
