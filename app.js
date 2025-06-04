let userScore = document.querySelector("#user-score"); ;
let compScore = document.querySelector("#comp-score");
let win = 0;
let lose = 0;
let resetBtn = document.querySelector("#resetBtn");
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

//array to store moves
let moves = 
["rock",
 "paper",
 "scissors"];

 const getMove = () => {
  let idx = genCompMove();
  return moves[idx];
 }

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=> {
        let userMove = choice.getAttribute("id");
        console.log("user plays",userMove);
        let compMove = getMove();
        console.log("comp plays",compMove);
        let result = checkWinner(compMove , userMove );
        if(result)
        {
           msg.innerHTML = ` <span class="small-text">Comp played ${compMove}</span> You won!`;
           userScore.innerText = ++win;

        }
        else if(result === false)
        {
          msg.innerHTML = ` <span class="small-text">Comp played ${compMove}</span> You lost!`;
          compScore.innerText = ++lose;
        }
        else
        {

          msg.innerHTML = ` <span class="small-text">Comp played ${compMove}</span> It's a draw!`;
        }
    });
  }
);

const checkWinner = (compMove , userMove) => {
 
  if(compMove === userMove)
  {
    return null;
  }
  else if (compMove === "rock")
  {
      return  ( userMove === "paper") ? true : false;
      
  }
  else if (compMove === "paper"){
  
      return  (userMove === "scissors") ? true : false;
  }
  else
  { 
     return (userMove === "rock") ? true : false;
  }
};


const genCompMove = () => {
  let randomMove = Math.floor(Math.random()*3);
  return randomMove;
}

resetBtn.addEventListener('click' , () => {

  userScore.innerText = 0;
  compScore.innerText = 0;
  win = 0;
  lose = 0;
});
