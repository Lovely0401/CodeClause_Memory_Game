import { useState, useEffect, useRef, useCallback } from "react";
import { cardIcons } from "../data/cardIcons"; 

export const useMemoryGame = (numPairs = 8) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef(null);

  const initializeGame = useCallback(() => {
    const selectedIcons = cardIcons.slice(0, numPairs);
    const initialCards = [...selectedIcons, ...selectedIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(initialCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setTimer(0);
    setGameStarted(false);
    setGameOver(false);
    clearInterval(timerRef.current);
  }, [numPairs]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (matchedCards.length === numPairs * 2 && gameStarted) {
      setGameOver(true);
      clearInterval(timerRef.current);
    }
  }, [matchedCards, numPairs, gameStarted]);

  const handleCardClick = useCallback(
    (clickedCard) => {
      if (!gameStarted) {
        setGameStarted(true);
      }

      if (
        clickedCard.isMatched ||
        flippedCards.some((card) => card.id === clickedCard.id) ||
        flippedCards.length === 2
      ) {
        return;
      }

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === clickedCard.id ? { ...card, isFlipped: true } : card
        )
      );
      setFlippedCards((prev) => [...prev, clickedCard]);
    },
    [gameStarted, flippedCards]
  );

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;

      if (card1.icon === card2.icon) {
        setMatchedCards((prev) => [...prev, card1.id, card2.id]);
        setScore((prev) => prev + 10);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, isMatched: true, isFlipped: true }
              : card
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === card1.id || card.id === card2.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
        setScore((prev) => Math.max(0, prev - 1));
      }
    }
  }, [flippedCards]);

  return {
    cards,
    score,
    timer,
    gameOver,
    initializeGame,
    handleCardClick,
  };
};
