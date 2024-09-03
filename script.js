let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde , 1 = vermelho, 2 = amarelo, 3 = azul
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

//cria ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
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
  }, tempo - 250);
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
    alert(`pontuação: ${score}\nvocê acertou! Iniciando proximo nivel!`);
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
};
//função para proximo nivel do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
};
//função para game over
let gameOver = () => {
  alert(
    `Pontuação: ${score}!\nVocê perdeu o jogo!\n Clique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];
  playGame();
};
//função para iniciar o game
let playGame = () => {
  alert("Bem vindo ao GÊNESIS! Iniciando novo jogo");
  score = 0;
  nextLevel();
};
/*green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
*/
//evento de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
playGame();
