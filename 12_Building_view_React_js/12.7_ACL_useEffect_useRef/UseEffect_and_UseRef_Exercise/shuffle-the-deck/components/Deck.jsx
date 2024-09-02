import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

const Deck = () => {
  const [deck, setDeck] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    const getDeck = async () => {
      try {
        const deckResp = await axios.get(`${BASE_URL}/new/shuffle/`);
        setDeck(deckResp.data);
      } catch (error) {
        alert(error);
      }
    };
    getDeck();
  }, []);

  useEffect(() => {
    const drawCard = async () => {
      try {
        const cardResp = await axios.get(`${BASE_URL}/${deck.deck_id}/draw/`);

        const card = cardResp.data.cards[0];

        setDrawnCards((prevCards) => [
          ...prevCards,
          {
            id: card.code,
            name: `${card.value} of ${card.suit}`,
            image: card.image,
          },
        ]);

        if (cardResp.data.remaining === 0) throw new Error("Deck is empty!!");
      } catch (error) {
        setIsDrawing(false);
        alert(error);
      }
    };

    const stopCardDraw = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };

    if (isDrawing && !timerRef.current)
      timerRef.current = setInterval(drawCard, 1000);
    else if (!isDrawing && timerRef.current) stopCardDraw();

    return stopCardDraw;
  }, [isDrawing]);

  const shuffleCards = async () => {
    setIsShuffling(true);
    try {
      await axios.get(`${BASE_URL}/${deck.deck_id}/shuffle/`);
      setDrawnCards([]);
    } catch (error) {
      alert(error);
    } finally {
      setIsShuffling(false);
      setIsDrawing(false);
    }
  };

  const displayDrawAndShuffle = () => {
    if (!deck) return null;

    return (
      <div className="buttons">
        <button
          className="btn"
          onClick={() => setIsDrawing((status) => !status)}
          disabled={isShuffling}
        >
          {isDrawing ? "Stop " : "Start "} Drawing Cards
        </button>
        <button className="btn" onClick={shuffleCards} disabled={isShuffling}>
          Shuffle Deck
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="title">Draw Card Game</h1>
      {displayDrawAndShuffle()}
      <div className="cardContainer">
        {drawnCards.map((card) => (
          <Card key={card.id} name={card.name} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default Deck;
