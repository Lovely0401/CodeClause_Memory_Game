import React from 'react';
import { useMemoryGame } from '../hooks/useMemoryGame';
import Card from './Card';
import GameInfo from './GameInfo';
import GameOverModal from './GameOverModal';

const MemoryGame = () => {
  const {
    cards,
    score,
    timer,
    gameOver,
    initializeGame,
    handleCardClick,
  } = useMemoryGame(8); 


  const getGridColsClass = () => {
    const numCards = cards.length;
    if (numCards <= 16) return 'grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8';

    return 'grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8';
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-5xl">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Memory Game
      </h1>

      <GameInfo score={score} timer={timer} onReset={initializeGame} />

      {gameOver && (
        <GameOverModal score={score} timer={timer} onPlayAgain={initializeGame} />
      )}

      <div className={`grid ${getGridColsClass()} gap-4 justify-items-center`}>
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;