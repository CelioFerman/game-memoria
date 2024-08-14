import cardLogo from '../assets/Pokemon.png';

export const Cards = ({ id, idPair, png }) => {
    return (
        <button id={id} className="Cards">
            <div className="card-content">
                <div className="card-front">
                    <img src={cardLogo} alt={`Card Logo`} width={300} height={230} />
                </div>
                <div className="card-back">
                    <img src={png} alt={`Card ${id}`} width={300} height={230} />
                </div>
            </div>
        </button>
    )
}