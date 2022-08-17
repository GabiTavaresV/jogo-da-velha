let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageText = document.querySelector("#message p");
let messageContainer = document.querySelector("#message");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

//adiciona o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  // quando alguem clica na caixa
  boxes[i].addEventListener("click", function () {
    let elemento = checkElemento(player1, player2);

    //verifica se já tem x ou o
    if (this.childNodes.length == 0) {
      let cloneElemento = elemento.cloneNode(true);
      this.appendChild(cloneElemento);

      //computar a jpgada
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

      // checa quem venceu
      checkWinCondition();
    }
  });
}
// ver quem vai jogar
function checkElemento(player1, player2) {
  if (player1 == player2) {
    elemento = x;
  } else {
    elemento = o;
  }
  return elemento;
}

// ve quem ganhou
function checkWinCondition() {
  let bloco1 = document.getElementById("block-1");
  let bloco2 = document.getElementById("block-2");
  let bloco3 = document.getElementById("block-3");
  let bloco4 = document.getElementById("block-4");
  let bloco5 = document.getElementById("block-5");
  let bloco6 = document.getElementById("block-6");
  let bloco7 = document.getElementById("block-7");
  let bloco8 = document.getElementById("block-8");
  let bloco9 = document.getElementById("block-9");

  //horizontal
  if (
    bloco1.childNodes.length > 0 &&
    bloco2.childNodes.length > 0 &&
    bloco3.childNodes.length > 0
  ) {
    let bloco1Child = bloco1.childNodes[0].className;
    let bloco2Child = bloco2.childNodes[0].className;
    let bloco3Child = bloco3.childNodes[0].className;

    if (bloco1Child == "x" && bloco2Child == "x" && bloco3Child == "x") {
      declareWinner("x");
    } else if (bloco1Child == "o" && bloco2Child == "o" && bloco3Child == "o") {
      declareWinner("o");
    }
  }

  if (
    bloco4.childNodes.length > 0 &&
    bloco5.childNodes.length > 0 &&
    bloco6.childNodes.length > 0
  ) {
    let bloco4Child = bloco4.childNodes[0].className;
    let bloco5Child = bloco5.childNodes[0].className;
    let bloco6Child = bloco6.childNodes[0].className;

    if (bloco4Child == "x" && bloco5Child == "x" && bloco6Child == "x") {
      declareWinner("x");
    } else if (bloco4Child == "o" && bloco5Child == "o" && bloco6Child == "o") {
      declareWinner("o");
    }
  }

  if (
    bloco7.childNodes.length > 0 &&
    bloco8.childNodes.length > 0 &&
    bloco9.childNodes.length > 0
  ) {
    let bloco7Child = bloco7.childNodes[0].className;
    let bloco8Child = bloco8.childNodes[0].className;
    let bloco9Child = bloco9.childNodes[0].className;

    if (bloco7Child == "x" && bloco8Child == "x" && bloco9Child == "x") {
      declareWinner("x");
    } else if (bloco7Child == "o" && bloco8Child == "o" && bloco9Child == "o") {
      declareWinner("o");
    }
  }

  // vertical

  if (
    bloco1.childNodes.length > 0 &&
    bloco4.childNodes.length > 0 &&
    bloco7.childNodes.length > 0
  ) {
    let bloco1Child = bloco1.childNodes[0].className;
    let bloco4Child = bloco4.childNodes[0].className;
    let bloco7Child = bloco7.childNodes[0].className;

    if (bloco1Child == "x" && bloco4Child == "x" && bloco7Child == "x") {
      declareWinner("x");
    } else if (bloco1Child == "o" && bloco4Child == "o" && bloco7Child == "o") {
      declareWinner("o");
    }
  }

  if (
    bloco2.childNodes.length > 0 &&
    bloco5.childNodes.length > 0 &&
    bloco8.childNodes.length > 0
  ) {
    let bloco2Child = bloco2.childNodes[0].className;
    let bloco5Child = bloco5.childNodes[0].className;
    let bloco8Child = bloco8.childNodes[0].className;

    if (bloco2Child == "x" && bloco5Child == "x" && bloco8Child == "x") {
      declareWinner("x");
    } else if (bloco2Child == "o" && bloco5Child == "o" && bloco8Child == "o") {
      declareWinner("o");
    }
  }

  if (
    bloco3.childNodes.length > 0 &&
    bloco6.childNodes.length > 0 &&
    bloco9.childNodes.length > 0
  ) {
    let bloco3Child = bloco3.childNodes[0].className;
    let bloco6Child = bloco6.childNodes[0].className;
    let bloco9Child = bloco9.childNodes[0].className;

    if (bloco3Child == "x" && bloco6Child == "x" && bloco9Child == "x") {
      declareWinner("x");
    } else if (bloco3Child == "o" && bloco6Child == "o" && bloco9Child == "o") {
      declareWinner("o");
    }
  }

  //diagonal
  if (
    bloco1.childNodes.length > 0 &&
    bloco5.childNodes.length > 0 &&
    bloco9.childNodes.length > 0
  ) {
    let bloco1Child = bloco1.childNodes[0].className;
    let bloco5Child = bloco5.childNodes[0].className;
    let bloco9Child = bloco9.childNodes[0].className;

    if (bloco1Child == "x" && bloco5Child == "x" && bloco9Child == "x") {
      declareWinner("x");
    } else if (bloco1Child == "o" && bloco5Child == "o" && bloco9Child == "o") {
      declareWinner("o");
    }
  }

  if (
    bloco3.childNodes.length > 0 &&
    bloco5.childNodes.length > 0 &&
    bloco7.childNodes.length > 0
  ) {
    let bloco3Child = bloco3.childNodes[0].className;
    let bloco5Child = bloco5.childNodes[0].className;
    let bloco7Child = bloco7.childNodes[0].className;

    if (bloco3Child == "x" && bloco5Child == "x" && bloco7Child == "x") {
      declareWinner("x");
    } else if (bloco3Child == "o" && bloco5Child == "o" && bloco7Child == "o") {
      declareWinner("o");
    }
  }

  // deu velha
  let counter = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner("Deu Velha!");
  }
}

// limpa o jogo, declara o vencedor e atualiza o placar

function declareWinner(winner) {
  let scoreboardX = document.querySelector("#soreboard-1");
  let scoreboardO = document.querySelector("#soreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "O Jogador 1 Venceu!";
  } else if (winner == "o") {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = "O Jogador 2 Venceu!";
  } else {
    msg = "Deu Velha!";
  }

  // exibe msg
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 3000);
}
