import { useGameOfMemory } from "../hooks/UseGameOfMemory";
import "../css/Scoreboard.css";

export const Scoreboard = () => {
  const { countCardsTurnedOver, CountPoints } = useGameOfMemory();

  return (
    <div className="scoreboard">
      <Points title="Player1" value={CountPoints} />
      <Points title="CardsTurnedOver" value={countCardsTurnedOver} />
      <Points title="Player2" value={CountPoints} />
      <Points title="CardsTurnedOver" value={countCardsTurnedOver} />
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
