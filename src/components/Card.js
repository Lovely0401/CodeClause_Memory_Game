import React from 'react';

const Card = ({ card, onClick }) => {
  return (
    <div
      className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-28 lg:h-28 rounded-xl cursor-pointer perspective-1000 transition-transform duration-500 transform hover:scale-105 ${
        card.isMatched ? 'opacity-70 pointer-events-none' : ''
      }`}
      onClick={() => onClick(card)}
    >
      <div
        className={`absolute w-full h-full rounded-xl shadow-lg transition-transform duration-500 preserve-3d ${ // Added preserve-3d, removed backface-hidden from here
          card.isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center rounded-xl text-white text-5xl font-bold border-4 border-indigo-600 backface-hidden">
          ?
        </div>
        <div className="absolute w-full h-full bg-white flex items-center justify-center rounded-xl text-5xl font-bold border-4 border-gray-300 rotate-y-180 backface-hidden">
          {card.icon}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);