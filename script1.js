console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let overtune = new Audio("gameover.mp3");
let ting = new Audio("ting.mp3");
let gameover = false;
let turn = "X";

music.play();

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  const boxtext = document.querySelectorAll(".boxtext");
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
      boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML &&
      boxtext[e[0]].innerHTML !== ""
    ) {
        document.querySelector(".line").style.height='3px';
        document.querySelector(".line").style.width='30vw';
      document.querySelector(".info").innerHTML = `${
        boxtext[e[0]].innerHTML
      } Won`;
      gameover = true;
      document.querySelector(".imgbox img").style.width = "200px";
      overtune.play();
      
      if (e[0] === 0 && e[1] === 1)
        document.querySelector(".line").style.transform = "translateY(5vw)";
      else if (e[0] === 3 && e[1] === 4)
        document.querySelector(".line").style.transform = "translateY(15vw)";
      else if (e[0] === 6 && e[1] === 7)
        document.querySelector(".line").style.transform = "translateY(25vw)";
      else if (e[0] === 0 && e[1] === 3)
        document.querySelector(".line").style.transform =
          "translateX(-10vw) rotate(90deg) translateX(15vw)";
      else if (e[0] === 1 && e[1] === 4)
        document.querySelector(".line").style.transform =
          "translateY(15vw) rotate(90deg)";
      else if (e[0] === 2 && e[1] === 5)
        document.querySelector(".line").style.transform =
          "translateX(10vw)rotate(90deg)translateX(15vw)";
      else if (e[0] === 0 && e[1] === 4)
        document.querySelector(".line").style.transform =
          "translateY(15vw) rotate(45deg)";
      else if (e[0] === 2 && e[1] === 4)
        document.querySelector(".line").style.transform =
          "translateY(15vw) rotate(-45deg)";
    }
  });
};

let boxes = document.querySelectorAll(".box");

boxes.forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerHTML === "") {
      boxtext.innerHTML = turn;
      ting.play();
      turn = changeTurn();
      checkWin();
      if (!gameover)
        document.querySelector(".info").innerHTML = `turn for ${turn}`;
    }
  });
});
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  boxtext.forEach((e) => {
    e.innerHTML = "";
  });
  turn = "X";
  document.querySelector(".info").innerHTML = `turn for ${turn}`;
  document.querySelector(".imgbox img").style.width = "0";
  document.querySelector(".line").style.height='0';
        document.querySelector(".line").style.width='0';
});
