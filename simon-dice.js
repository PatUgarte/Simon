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
        this.elegirColor = this.elegirColor.bind(this);
        botonEmpezar.classList.add("hide");
        gameboard.classList.remove("hide");
        this.nivel = 1;
        this.jugada = 0;
        this.colores = { verde, amarillo, rojo, azul };
    }

    generarSecuencia() {
        this.secuencia = new Array(CANTIDAD_NIVELES).fill().map(() => Math.floor(Math.random() * 4));
    }

    avanzarUnNivel() {
        setTimeout(() => this.iluminarSecuencia(), 500);
        this.agregarEventosClick();
        this.jugada = 0;
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

    agregarEventosClick() {
        for (const key in this.colores) {
            this.colores[key].addEventListener("click", this.elegirColor);
        }
    }

    eliminarEventosClick() {
        for (const key in this.colores) {
            this.colores[key].removeEventListener("click", this.elegirColor);
        }
    }

    ganoElJuego() {
        setTimeout(() => {
            swal("¡GANASTE!", "Sos un/a crack :)", "success")
                .then(() => {
                    this.nivel = 1;
                    this.reinciarJuego();
                    this.eliminarEventosClick();
                });
        }, 250);
    }

    perdioElJuego() {
        setTimeout(() => {
            swal({
                title: "¡Perdiste!",
                text: "Mejor suerte la próxima...",
                icon: "error",
                button: "Ok..."
            })
                .then(() => {
                    this.nivel = 1;
                    this.reinciarJuego();
                    this.eliminarEventosClick();
                });
        }, 500);
    }

    reinciarJuego() {
        gameboard.classList.add("hide");
        botonEmpezar.classList.remove("hide");
    }

    elegirColor(e) {
        const nombreColor = e.target.dataset.color;
        const numeroColor = this.obtenerNumeroDe(nombreColor);
        this.iluminar(nombreColor);
        if (numeroColor === this.secuencia[this.jugada]) {
            this.jugada++;
            if (this.jugada === this.nivel) {
                this.nivel++;
                this.eliminarEventosClick();
                if (this.nivel > CANTIDAD_NIVELES) {
                    this.ganoElJuego();
                } else {
                    this.avanzarUnNivel();
                }
            }
        } else {
            this.perdioElJuego();
        }
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

    obtenerNumeroDe(color) {
        switch (color) {
            case "verde":
                return 0;
            case "amarillo":
                return 1;
            case "rojo":
                return 2;
            case "azul":
                return 3;
            default:
                return "null";
        }
    }
}

function empezarJuego() {
    let juego = new Juego();
}