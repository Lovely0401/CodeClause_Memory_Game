---

# 🧠 React Memory Game

A fun and interactive memory matching game built with React, featuring a timer, score tracking, and a visually appealing user interface. Challenge your memory and see how fast you can find all the pairs!

---

## ✨ Features

* **Classic Memory Gameplay:** Flip cards and match identical pairs to clear the board.
* **Dynamic Shuffling:** Cards are randomly arranged for a fresh challenge every time you play.
* **Score Tracking:** Earn points for correct matches and lose a small amount for mismatches.
* **Real-time Timer:** Track your speed as you race against the clock to complete the game.
* **Game Over Screen:** A celebratory modal appears when you win, displaying your final score and completion time.
* **Instant Reset:** Start a brand new game at any point with a click of a button.
* **Responsive Design:** Enjoy seamless gameplay across desktops, tablets, and mobile devices.
* **Modern UI:** A clean, animated interface crafted with Tailwind CSS for a smooth user experience.

---

## 💻 Technologies Used

* **React:** For building the dynamic and interactive user interface.
* **Tailwind CSS:** A utility-first CSS framework for rapid and custom styling.
* **JavaScript (ES6+):** Powers the core game logic and interactivity.

---

## 🚀 Getting Started

Ready to play? Follow these simple steps to set up and run the game locally on your computer.

### Prerequisites

You'll need **Node.js** and **npm (Node Package Manager)** installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Create a new React project** (if you haven't already):

    Open your terminal or command prompt and run:

    ```bash
    npx create-react-app react-memory-game
    cd react-memory-game
    ```

2.  **Install dependencies:**

    Install React's necessary packages along with Tailwind CSS:

    ```bash
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

3.  **Configure Tailwind CSS:**

    Replace the content of your `tailwind.config.js` and `src/index.css` files with the code provided in the previous responses. This ensures Tailwind is set up correctly for the game's styles and animations.

4.  **Add the Game Code:**

    Recreate the following folder structure inside your `src` directory and copy-paste the corresponding code into each file. All the necessary code for these files was provided in our previous conversation:

    ```
    src/
    ├── App.js
    ├── index.js
    ├── index.css
    ├── components/
    │   ├── Card.js
    │   ├── GameInfo.js
    │   ├── GameOverModal.js
    │   └── MemoryGame.js
    ├── data/
    │   └── cardIcons.js
    ├── hooks/
    │   └── useMemoryGame.js
    └── utils/
        └── helpers.js
    ```

    * Make sure to replace the content of the existing `App.js` and `index.js` files with their simplified, refactored versions.

### Running the Game

Once all files are in place and saved, start the development server:

```bash
npm start
```

Your browser should automatically open a new tab at `http://localhost:3000` (or another available port), and your memory game will be ready to play!

---

## 🎮 How to Play

1.  **Start:** The game board will appear with a grid of face-down cards.
2.  **Flip Cards:** Click on any card to reveal its hidden icon.
3.  **Find Pairs:** Click on a second card.
    * If the two cards have the **same icon**, it's a match! They'll stay face-up, and your score will increase.
    * If the icons are **different**, they're not a match. They'll flip back over after a brief delay, and your score will slightly decrease.
4.  **Score & Time:** Keep an eye on your **Score** and the **Time** counter at the top. The timer begins as soon as you flip your first card.
5.  **Win Condition:** The game concludes once you've successfully matched all the card pairs. A "Congratulations!" message will pop up, showcasing your final score and the time you took.
6.  **Play Again:** Simply click the "Reset Game" button (or "Play Again" on the win screen) to start a new round.

---

## 💡 Future Enhancements

* **Difficulty Levels:** Introduce options for different grid sizes and more card pairs.
* **Sound Effects:** Add audio cues for card flips, matches, and victory.
* **High Score Board:** Implement local storage to keep track of top scores.
* **Custom Themes:** Allow players to choose from various icon sets or card designs.
* **More Animations:** Enhance existing animations and add new visual flourishes for an even more engaging experience.