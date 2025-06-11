import React from 'react';
import { formatTime } from '../utils/helpers';

const GameInfo = ({ score, timer, onReset }) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6 px-4 gap-4">
      <div className="text-xl font-semibold text-gray-700">
        Score: <span className="text-blue-600 text-2xl">{score}</span>
      </div>
      <div className="text-xl font-semibold text-gray-700">
        Time: <span className="text-green-600 text-2xl">{formatTime(timer)}</span>
      </div>
      <button
        onClick={onReset}
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Reset Game
      </button>
    </div>
  );
};

export default React.memo(GameInfo);