export const Cards = ({ id, idPair, images }) => {
    return (
        <button id={id} className="Cards">
            <div className="card-content">
                <div className="card-front">
                    <img src='../assets/pokemon.png' height={300} width={300}/>
                </div>
                <div className="card-back">
                    <img src={images} alt={`Card ${id}`} width={300} />
                </div>
            </div>
        </button>
    )
}