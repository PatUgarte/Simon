const gameboard = document.getElementById("gameboard");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
const rojo = document.getElementById("rojo");
const azul = document.getElementById("azul");
const botonEmpezar = document.getElementById("boton-empezar");

class Juego {
    constructor(){
        this.inicializarJuego();
    }
    
    inicializarJuego(){
        botonEmpezar.classList.add("hide");
        gameboard.classList.remove("hide");
    }
}

function empezarJuego() {
    let juego = new Juego();
}