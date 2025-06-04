# Rock Paper Scissors Game ✊📄✂️

A simple **Rock Paper Scissors** game built using **HTML**, **CSS**, and **Vanilla JavaScript** as part of my JavaScript learning journey. The game allows the user to play against the computer with real-time score tracking and a reset feature.

---

## 🧠 Features

- Interactive UI with clickable options (Rock, Paper, Scissors)
- Random computer move generation
- Score tracking for user and computer
- Result messages: Win / Lose / Draw
- Reset button to restart the scores
- Console logs and alerts for game transparency (used during development)

---

## 📸 Screenshot

> _(Add a screenshot of the game interface here, optional)_

---

## 📁 Project Structure

rock-paper-scissors/
│
├── index.html # Game layout
├── style.css # Styling
├── script.js # Game logic
└── README.md # Project information


---

## ⚙️ How It Works

- The player clicks one of the three choices.
- The computer randomly selects a move.
- The result is calculated based on standard game rules.
- Scores are updated accordingly and shown on the screen.
- A message displays the outcome and the computer's choice.

---

## 🧩 Core Logic (Simplified)

```javascript
const checkWinner = (compMove, userMove) => {
  if (compMove === userMove) return null;

  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return winMap[userMove] === compMove;
};


##🛠 Technologies Used

    HTML5

    CSS3

    JavaScript (ES6)


##🚀 How to Run Locally

1) Clone the repository:
	git clone https://github.com/harshsinghpujari/rock-paper-scissors.git


##🙋‍♂️ Author

Harsh Singh
https://github.com/harshsinghpujari


##💡 Future Improvements (Optional Ideas)

    Add icons or images for moves instead of plain text

    Add sound effects or animations

    Create a "best of 5" or tournament mode

    Make it mobile-responsive


##⭐ Like This Project?

If this helped you or inspired you, leave a ⭐️ or suggest an improvement!
