import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
    return pokemon.map((p) => (
        <div className="PokemonCard">
            <h3 className="PokemonCard-name">{p.name}</h3>
            <img
                className="PokemonCard-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                alt={p.name}
            />
            <h4>Type: {p.type}</h4>
            <h4>EXP: {p.base_experience}</h4>
        </div>
    ));
}

export default PokemonCard;
