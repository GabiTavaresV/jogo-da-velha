let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message p")
let secondPlayer;


// contador de jogadas
let player1 = 0;
let player2 = 0;

//adiciona o evento de click aos boxes
for(let i=0; i < boxes.length; i++) {
    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){

        let elemento = checkElemento(player1, player2)

        

        //verifica se já tem x ou o
       if(this.childNodes.length == 0){

        let cloneElemento = elemento.cloneNode(true)
        this.appendChild(cloneElemento)

        //computar a jpgada
        if(player1 == player2){
            player1++
        }else {
            player2++
        }
       }
    })
}
// ver quem vai jogar
function checkElemento(player1, palyer2) {
    if(player1 == palyer2) {
        elemento = x
     } else{
        elemento = o
     }
     return elemento
}