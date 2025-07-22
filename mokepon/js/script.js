let sectionSeleccionarAtaque = document.getElementById("Seleccionar-Ataque")
let sectionReiniciar = document.getElementById("reiniciar")
let botonCompañero = document.getElementById("boton-compañero")
let botonFuego = document.getElementById("boton-fuego")
let botonAgua = document.getElementById("boton-agua")
let botonPlanta = document.getElementById("boton-planta")
let botonReiniciar = document.getElementById("boton-reiniciar")

let sectionSeleccionarCompañero = document.getElementById("Seleccionar-compañero")

let spanCompañeroAliado = document.getElementById("compañero-aliado")

let spanCompañeroEnemigo = document.getElementById("compañero-enemigo")

let spanVidasJugador = document.getElementById("vidas-jugador")
let spanVidasEnemigo = document.getElementById("vidas-enemigo")

let divResultado = document.getElementById("resultado-combate")

let contenedorTarjetas = document.getElementById("contenedorTarjetas")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputPogrigar 
let inputTorregor 
let inputCalamity 
let inputCraptos 
let inputMorthepko 
let inputAnfregor 
let vidasJugador = 5
let vidasEnemigo = 5

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataque = []
    }
}

let Pogrigar = new Mokepon('Pogrigar', './assets/podrigar.jpg', 5)
let Torregor = new Mokepon('Torregor', './assets/torregor.jpg', 5)
let Calamity = new Mokepon('Calamity', './assets/calamity.jpg', 5)
let Craptos = new Mokepon('Craptos', './assets/craptos.jpg', 5)
let Morthepko = new Mokepon('Morthepko', './assets/morthepko.jpg', 5)
let Anfregor = new Mokepon('Anfregor', './assets/anfregor.jpg', 5)

Pogrigar.ataque.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌿', id: 'boton-planta'}
)

Torregor.ataque.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌿', id: 'boton-planta'},
    {nombre: '🌿', id: 'boton-planta'},
    {nombre: '🌿', id: 'boton-planta'}
)

Calamity.ataque.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌿', id: 'boton-planta'}
)

Craptos.ataque.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌿', id: 'boton-planta'}
)

Morthepko.ataque.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌿', id: 'boton-planta'},
    {nombre: '🌿', id: 'boton-planta'}
)

Anfregor.ataque.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌿', id: 'boton-planta'},
    {nombre: '🌿', id: 'boton-planta'}
)

mokepones.push(Pogrigar, Torregor, Calamity, Craptos, Morthepko, Anfregor)


function iniciarJuego() {


    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="compañero" id=${mokepon.nombre} />
                <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
                    <p>${mokepon.nombre} </p>
                    <img src=${mokepon.foto}  alt=${mokepon.nombre} >
                </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    inputPogrigar = document.getElementById("Pogrigar")
    inputTorregor = document.getElementById("Torregor")
    inputCalamity = document.getElementById("Calamity")
    inputCraptos = document.getElementById("Craptos")
    inputMorthepko = document.getElementById("Morthepko")
    inputAnfregor = document.getElementById("Anfregor")
    } )

    sectionReiniciar.style.display = "none"

    botonCompañero.addEventListener("click", seleccionarCompañero)

    botonFuego.addEventListener("click", ataqueFuego)

    botonAgua.addEventListener("click", ataqueAgua)

    botonPlanta.addEventListener("click", ataquePlanta)

    botonReiniciar.addEventListener("click", reiniciarJuego)
}




function seleccionarCompañero(COMPAÑERO) {

    sectionSeleccionarCompañero.style.display = "none"

    sectionSeleccionarAtaque.style.display = "flex"

    if(inputPogrigar.checked) {
        mokepon = "Pogrigar"
        alert(`Has elegido a ${COMPAÑERO}, sabia eleccion.`)
        spanCompañeroAliado.innerHTML = "Pogrigar"
    } else if(inputTorregor.checked) {
        COMPAÑERO = "Torregor"
        alert("Has elegido a " + COMPAÑERO + ", sabia eleccion.")
        spanCompañeroAliado.innerHTML = "Torregor"
    } else if(inputCalamity.checked) {
        COMPAÑERO = "Calamity"
        alert("Has elegido a " + COMPAÑERO + ", sabia eleccion.")
        spanCompañeroAliado.innerHTML = "Calamity"
    } else if(inputCraptos.checked) {
        COMPAÑERO = "Craptos"
        alert("Has elegido a " + COMPAÑERO + ", sabia eleccion.")
        spanCompañeroAliado.innerHTML = "Craptos"
    } else if(inputMorthepko.checked) {
        COMPAÑERO = "Morthepko"
        alert("Has elegido a " + COMPAÑERO + ", sabia eleccion.")
        spanCompañeroAliado.innerHTML = "Morthepko"
    } else if(inputAnfregor.checked) {
        COMPAÑERO = "Anfregor"
        alert("Has elegido a " + COMPAÑERO + ", sabia eleccion.")
        spanCompañeroAliado.innerHTML = "Anfregor"
    } else {
        alert ("Elige a tu compañero, es peligroso ir solo.")
        return
    }

    seleccionarCompañeroEnemigo()

    botonCompañero.disabled = true

    sectionSeleccionarAtaque.style.display = "block"

    sectionSeleccionarCompañero.style.display = "none"

}

function seleccionarCompañeroEnemigo() {
    let mascotaAleatorio = aleatorio (1, 6)

    if (mascotaAleatorio == 1) {
        spanCompañeroEnemigo.innerHTML = "Pogrigar"
    } else if (mascotaAleatorio == 2) {
        spanCompañeroEnemigo.innerHTML = "Torregor"
    } else if (mascotaAleatorio == 3) {
        spanCompañeroEnemigo.innerHTML = "Calamity"
    } else if (mascotaAleatorio == 4) {
        spanCompañeroEnemigo.innerHTML = "Craptos"
    } else if (mascotaAleatorio == 5) {
        spanCompañeroEnemigo.innerHTML = "Morthepko"
    } else if (mascotaAleatorio == 6) {
        spanCompañeroEnemigo.innerHTML = "Anfregor"
    }


}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueDelEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueDelEnemigo()
}
function ataquePlanta() {
    ataqueJugador = "PLANTA"
    ataqueDelEnemigo()
}

function ataqueDelEnemigo() {

    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "PLANTA"
    }
    Combate()

    }

function Combate(jugada) {



    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if( ataqueJugador == "FUEGO" && ataqueEnemigo == "PLANTA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else if(ataqueJugador == "PLANTA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal("🎉 Has ganado 🎉")
    } else if(vidasJugador == 0) {
        crearMensajeFinal("Has Perdido 💀")
    }


}


function crearMensaje(resultados) {
    let divResultado = document.getElementById("resultado-combate")

    divResultado.innerHTML = "Tu compañero atacó con " + ataqueJugador + ", el compañero enemigo atacó con " + ataqueEnemigo + "<br><strong>" + resultados + "</strong>"
}

function crearMensajeFinal(final) {

    divResultado.innerHTML = "<strong>" + final + "</strong>"

    botonFuego.disabled = true

    botonAgua.disabled = true

    botonPlanta.disabled = true

    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarJuego)

