import cardLogo from "../assets/Pokemon.png";
import { UseGameOfMemory } from "../hooks/UseGameOfMemory";

export const Cards = ({ id, png, idPair }) => {
  const { turnCards } = UseGameOfMemory();
  const controlClick = () => {
    turnCards({ id, idPair });
  };

  return (
    <button id={id} className="Cards" onClick={controlClick}>
      <div className="card-content">
        <div className="card-front">
          <img src={cardLogo} alt={`Card Logo`} width={300} height={230} />
        </div>
        <div className="card-back">
          <img src={png} alt={`Card ${id}`} width={300} height={230} />
        </div>
      </div>
    </button>
  );
};
