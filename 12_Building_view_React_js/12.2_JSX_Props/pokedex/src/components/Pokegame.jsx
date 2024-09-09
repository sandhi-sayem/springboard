import Pokedex from "./Pokedex";

const defaultPokemons = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const sumExperience = (hand) => {
  return hand.reduce(
    (experience, pokemon) => experience + pokemon.base_experience,
    0
  );
};

const Pokegame = ({ pokemons = defaultPokemons }) => {
  const handOne = [...pokemons];
  const handTwo = [];

  while (handOne.length > handTwo.length) {
    const randomIndex = Math.floor(Math.random() * handOne.length);
    const randomPokemon = handOne.splice(randomIndex, 1)[0];
    handTwo.push(randomPokemon);
  }

  const handOneExperience = sumExperience(handOne);
  const handTwoExperience = sumExperience(handTwo);

  return (
    <div>
      <Pokedex
        pokemons={handOne}
        totalExperience={handOneExperience}
        isWinner={handOneExperience > handTwoExperience}
      />
      <Pokedex
        pokemons={handTwo}
        totalExperience={handTwoExperience}
        isWinner={handOneExperience < handTwoExperience}
      />
    </div>
  );
};
export default Pokegame;
