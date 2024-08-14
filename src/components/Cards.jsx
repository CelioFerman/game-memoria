import cardLogo from "../assets/Pokemon.png";
import classNames from "classnames";
import { useGameOfMemory } from "../hooks/UseGameOfMemory";
import '../css/Cards.css'

export const Cards = ({ id, png, idPair }) => {
  const { turnCards, idCardsTurnedOver } = useGameOfMemory();
  const controlClick = () => {
    turnCards({ id, idPair });
  };

  const madePair = idCardsTurnedOver.includes(idPair);
  const faceCards = madePair ||idCardsTurnedOver.includes(id);
  const blockClick = faceCards

const cn = classNames('Cards', {
    "faceCards": faceCards
})


  return (
    <button id={id} className={cn} onClick={controlClick} disabled={blockClick}>
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
