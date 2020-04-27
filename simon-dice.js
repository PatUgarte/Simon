const gameboard = document.getElementById("gameboard");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
const rojo = document.getElementById("rojo");
const azul = document.getElementById("azul");
const botonEmpezar = document.getElementById("boton-empezar");

const CANTIDAD_NIVELES = 10;

class Juego {
    constructor() {
        this.inicializarJuego();
        this.generarSecuencia();
        this.avanzarUnNivel();
    }

    inicializarJuego() {
        botonEmpezar.classList.add("hide");
        gameboard.classList.remove("hide");
        this.nivel = 1;
        this.colores = { verde, amarillo, rojo, azul };
    }

    generarSecuencia() {
        this.secuencia = new Array(CANTIDAD_NIVELES).fill().map(() => Math.floor(Math.random() * 4));
    }

    avanzarUnNivel() {
        setTimeout(() => this.iluminarSecuencia(), 500);
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            let valor = this.secuencia[i];
            let color = this.obtenerColorDe(valor);
            setTimeout(() => this.iluminar(color), 1000 * i);
        }
    }

    iluminar(unColor) {
        let objetoColor = this.colores[unColor];
        objetoColor.classList.add("light");
        setTimeout(() => this.apagar(unColor), 250);
    }

    apagar(unColor) {
        let objetoColor = this.colores[unColor];
        objetoColor.classList.remove("light");
    }

    obtenerColorDe(numero) {
        switch (numero) {
            case 0:
                return "verde";
            case 1:
                return "amarillo";
            case 2:
                return "rojo";
            case 3:
                return "azul";
            default:
                return "null";
        }
    }
}

function empezarJuego() {
    let juego = new Juego();
}