export const Cards = ({ id, idPair, pokemons }) => {
    return (
        <button id={id} className="Cards">
            <div className="card-content">
                <div className="card-front">
            <img src='../assets/Pokemon.png' alt={`Card Logo`} width={300} height={240}/>
                </div>
                <div className="card-back">
                    <img src={pokemons} alt={`Card ${id}`} width={300} />
                </div>
            </div>
        </button>
    )
}