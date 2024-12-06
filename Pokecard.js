function PokeCard({ name, type, base_experience, id }) {

    return (
        <div className="pokecard">
            <h2>{name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <div className="text">
                <span>Type: {type}</span>
                <span>EXP: {base_experience} </span>
            </div>
        </div>
    );
}