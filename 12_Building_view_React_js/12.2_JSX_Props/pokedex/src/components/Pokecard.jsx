import "./Pokecard.css";

const imageURLBase =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = ({ id, name, type, experience }) => {
  const imageSrc = `${imageURLBase}${id}.png`;
  return (
    <div className="pokecard">
      <div className="pokecard-title">{name}</div>
      <img className="pokecard-image" src={imageSrc} alt={name} />
      <div className="pokecard-data">Type: {type}</div>
      <div className="pokecard-data">EXP: {experience}</div>
    </div>
  );
};
export default Pokecard;
