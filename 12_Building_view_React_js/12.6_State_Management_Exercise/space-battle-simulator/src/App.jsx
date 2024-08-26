import { useState } from "react";
import "./App.css";

function App({ minimumDamage = 1, maximumDamage = 25 }) {
  const INITIAL_HEALTH = 100;
  const INITIAL_GAME_STATUS = "inProgress";

  // possible game statuses: inProgress, won, lost, draw
  const [gameStatus, setGameStatus] = useState(INITIAL_GAME_STATUS);

  const [playerHealth, setPlayerHealth] = useState(INITIAL_HEALTH);
  const [enemyHealth, setEnemyHealth] = useState(INITIAL_HEALTH);

  const calculateDamage = () =>
    Math.floor(Math.random() * (maximumDamage - minimumDamage)) + minimumDamage;

  const attackPhase = () => {
    const currentPlayerHealth = Math.max(playerHealth - calculateDamage(), 0);
    const currentEnemyHealth = Math.max(enemyHealth - calculateDamage(), 0);

    setPlayerHealth(currentPlayerHealth);
    setEnemyHealth(currentEnemyHealth);

    if (currentPlayerHealth === 0 && currentEnemyHealth === 0)
      setGameStatus("draw");
    else if (currentPlayerHealth === 0) setGameStatus("lost");
    else if (currentEnemyHealth === 0) setGameStatus("won");
  };

  const displayMessage = () => {
    switch (gameStatus) {
      case "won":
        return "Congratulations! 😎💪 You've successfully defended your spacecraft.";
      case "lost":
        return "Mission Failed. 😵️ Your spacecraft has been defeated.";
      case "draw":
        return "It's a draw! 🤝 Both spacecrafts have been neutralized.";
      default:
        return "Engage the enemy! ☄️";
    }
  };

  const healthEmoji = (health) => {
    let emoji;

    if (health === INITIAL_HEALTH) emoji = "❤️";
    else if (health === 0) emoji = "💀";
    else emoji = "❤️‍🩹";

    return `${health} ${emoji}`;
  };

  const restartSimulator = () => {
    setPlayerHealth(INITIAL_HEALTH);
    setEnemyHealth(INITIAL_HEALTH);
    setGameStatus(INITIAL_GAME_STATUS);
  };

  return (
    <div className="main">
      <div className="title">
        <h1>Space Battle Simulator</h1>
      </div>

      <div className="game">
        <div className="player">
          <p>
            Player Health:{" "}
            <span className="score">{healthEmoji(playerHealth)}</span>
          </p>
        </div>
        {gameStatus === "inProgress" && (
          <div className="attack">
            <button onClick={attackPhase}>Fire</button>
          </div>
        )}
        {gameStatus !== "inProgress" && (
          <div className="restart">
            <button onClick={restartSimulator}>Restart</button>
          </div>
        )}
        <div className="enemy">
          <p>
            Enemy Health:{" "}
            <span className="score">{healthEmoji(enemyHealth)}</span>
          </p>
        </div>
      </div>

      <div className="message">
        <p>{displayMessage()}</p>
      </div>
    </div>
  );
}

export default App;
