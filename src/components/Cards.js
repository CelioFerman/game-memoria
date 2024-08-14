import cardLogo from '../assets/Pokemon.png';

export const Cards = ({ id, idPair, pngPokemons }) => {
    return (
        <button id={id} className="Cards">
            <div className="card-content">
                <div className="card-front">
                    <img src={cardLogo} alt={`Card Logo`} width={300} height={230} />
                </div>
                <div className="card-back">
                    <img src={pngPokemons} alt={`Card ${id}`} width={300} height={230} />
                </div>
            </div>
        </button>
    )
}