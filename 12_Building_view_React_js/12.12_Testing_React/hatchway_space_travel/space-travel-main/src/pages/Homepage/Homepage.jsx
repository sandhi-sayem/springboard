import styles from "./Homepage.module.css";

const welcomeMessage = [
  {
    title: "🌌 Journey into the Future",
    description:
      "In a world where the impossible has become reality, where the stars are no longer out of reach, " +
      "welcome to the future of humanity's survival and exploration. Witness the evolution of technology" +
      "as it transforms barren planets into thriving havens, all made possible by the wonders of innovation " +
      "and human determination.",
  },
  {
    title: "🌎 From Neglect to Innovation",
    description:
      "Once the cradle of civilization, Earth now stands as a solemn reminder of the consequences of ngelect and " +
      "environmental decline. But fear not, for the ingenuity of mankind has soared to new heights. With our relentless " +
      "pursuit of advancement, we have not only healed our scars but extended our reach across the cosmons.",
  },
  {
    title: "🚀 Enter Space Travel: Where Dreams Take Flight",
    description:
      'Embark on a extraordinary journey with our groundbreaking web application, aptly names "Space Travel." As a ' +
      "commander engineer, the fate of humanity's exodus rests in your capable hands. Prepare to face the ultimate " +
      "challenge: evacuating humankind from their birthplace and guiding them towards a future among the stars.",
  },
  {
    title: "🛠️ Engineer, Explorer, Leader",
    description:
      "Space Travel empowers you to engineer, design, and even dismantle spacecraft. Craft vessels that defy the " +
      "boundaries fo imagination, envisioning a future where life flourishes beyond the stars. But remember, your " +
      "role extends beyond construction - you are a leader, an explorer, a commander steering humanity's destiny.",
  },
  {
    title: "✨ A Universe of Possibilities Awaits",
    description:
      "Immerse yourself in the thrill of exploration as your chart interplanetary courses within our solar system. " +
      "Seamlessly navigate your fleet of spacecraft, hurtling through the cosmic void from one celestial body to another. " +
      "The universe becomes your playground, and every planet a potential new home.",
  },
];

const Homepage = () => {
  return (
    <>
      <div className={styles["homepage-div"]}>
        <h1>Space Travel: Expanding Horizons Beyond Earth</h1>
      </div>
      {welcomeMessage.map((message) => (
        <div key={message.title} className={styles["homepage-div"]}>
          <h2>{message.title}</h2>
          <p>{message.description}</p>
        </div>
      ))}
    </>
  );
};
export default Homepage;
