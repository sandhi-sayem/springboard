import "./Pokedex.css";

import Pokecard from "./Pokecard";

const Pokedex = ({ pokemons, totalExperience, isWinner }) => {
  return (
    <div className="pokedex">
      <h2 className="pokedex-title">Pokedex</h2>
      <div className="pokedex-cards">
        {pokemons.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            experience={pokemon.base_experience}
          />
        ))}
      </div>

      <h4>Total Experience: {totalExperience}</h4>
      {isWinner && <p className="pokedex-winner">THIS HAND WINS!</p>}
    </div>
  );
};
export default Pokedex;
