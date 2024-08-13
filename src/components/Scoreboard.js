export const Scoreboard = () => {
    return (
        <div className="scoreboard">
            <Points title="Player1" value={0} />
            <Points title="CardsTurnedOver" value={0} />
            <Points title="Player2" value={0} />
            <Points title="CardsTurnedOver" value={0} />
        </div>
    );
}

const Points = ({ title, value }) => {
    return (
        <div className="points">
            <strong className="points-title">{title}</strong>
            <span className="points-value">{value}</span>
        </div>
    );
}