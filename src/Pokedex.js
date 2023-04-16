import pokemon from "./pokemon";
import PokemonCard from "./PokemonCard.js";
import "./Pokedex.css";

function Pokedex() {
    return (
        <div id="Pokedex">
            <h1 id="Pokedex-header">Pokedex</h1>
            <div id="Pokedex-container">
                <PokemonCard pokemon={pokemon} />
            </div>
        </div>
    );
}

export default Pokedex;
