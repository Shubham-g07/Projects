let buttons = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#newBtn");
let msgCont = document.querySelector(".msg-Container");
let win = document.querySelector(".winner");
let h2 = document.querySelector("h2");

let playero = true;

let winPatt = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  playero = true;
  enableBoxes();
  msgCont.classList.add("hide");
  h2.classList.remove("hide");
};

//for knowing buttons are clicked or not
let clicks = 0;
buttons.forEach((box) => {
  box.addEventListener("click", () => {
    if (playero) {
      box.innerText = "O";
      playero = false;
      clicks++;
    } else {
      box.innerText = "X";
      playero = true;
      clicks++;
    }
    box.disabled = true;

    checkWinner();

    if (clicks === 9) {
      drawCond();
    }
  });
});

const disableBoxes = () => {
  for (box of buttons) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of buttons) {
    box.disabled = false;
    // for removing inner x & o
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  win.innerText = `Congratulations The Winner is ${winner}`;
  msgCont.classList.remove("hide");
  h2.classList.add("hide");
};

const drawCond = () => {
  win.innerText = "It's a Draw Match.  Restart again....";
  msgCont.classList.remove("hide");
  h2.classList.add("hide");
};

let checkWinner = (won) => {
  for (patt of winPatt) {
    let posValue1 = buttons[patt[0]].innerText;
    let posValue2 = buttons[patt[1]].innerText;
    let posValue3 = buttons[patt[2]].innerText;

    if (posValue1 !== "" && posValue2 !== "" && posValue3 !== "") {
      if (posValue1 === posValue2 && posValue2 === posValue3) {
        console.log("Winner", posValue1);
        disableBoxes();
        showWinner(posValue1);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
