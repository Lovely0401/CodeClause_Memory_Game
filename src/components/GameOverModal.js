import React from 'react';
import { formatTime } from '../utils/helpers';

const GameOverModal = ({ score, timer, onPlayAgain }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center animate-bounce-in max-w-sm w-full">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Congratulations! 🎉
        </h2>
        <p className="text-xl text-gray-800 mb-4">
          Your final score: <span className="font-bold text-blue-600">{score}</span>
        </p>
        <p className="text-xl text-gray-800 mb-6">
          Time taken: <span className="font-bold text-green-600">{formatTime(timer)}</span>
        </p>
        <button
          onClick={onPlayAgain}
          className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default React.memo(GameOverModal);