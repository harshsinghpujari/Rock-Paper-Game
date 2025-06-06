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

> _()_

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
```


##🛠 Technologies Used

   ` HTML5

   ` CSS3

   ` JavaScript (ES6)


============================================================================

##🚀 How to Run Locally

1) Clone the repository:
	git clone https://github.com/harshsinghpujari/rock-paper-scissors.git





##🙋‍♂️ Author

Himanshu Singh
https://github.com/harshsinghpujari
