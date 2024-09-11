let order = [];
let clickedOrder = [];
let score = 0;
let level = 1;

const blue = document.querySelector(".blue2");
const red = document.querySelector(".red2");
const yellow = document.querySelector(".yellow2");
const green = document.querySelector(".green2");
const black = document.querySelector(".black2");
const pink = document.querySelector(".pink2");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level")

//cria ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 6);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createElementColor(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//acende a proxima cor
let lightColor = (Element, number) => {
  let time = number * 500;
  setTimeout(() => {
    Element.classList.add("selected");
  }, time - 250);
  setTimeout(() => {
    Element.classList.remove("selected");
  }, time);
};

//chega se os botões clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    nextLevel();
  }
};

//função para o clique do usuario
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createElementColor(color).classList.add("selected");

  setTimeout(() => {
    createElementColor(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

//função que retorna a cor
let createElementColor = (color) => {
  if (color == 0) return green;
  if (color == 1) return red;
  if (color == 2) return yellow;
  if (color == 3) return blue;
  if (color == 4) return black;
  if (color == 5) return pink;
};
let updateScore = () => {
  scoreDisplay.textContent = score;
};
let updateLevel = () =>{
    levelDisplay.textContent = level;
};

//função para proximo nivel do jogo
let nextLevel = () => {
  updateScore();
  updateLevel();
  level++;
  score += 100;
  shuffleOrder();
};

//função para game over
let gameOver = () => {
  alert(`Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];
  level = 1;
  score = 0;
  updateScore();
  playGame();
};

//função para iniciar o game
let playGame = () => {
  updateScore();
  nextLevel();
};
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
black.onclick = () => click(4);
pink.onclick = () => click(5);

window.onload = playGame;
