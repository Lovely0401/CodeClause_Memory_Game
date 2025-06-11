import React from 'react';
import MemoryGame from './components/MemoryGame';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4 font-inter">
      <MemoryGame />
    </div>
  );
};

export default App;

