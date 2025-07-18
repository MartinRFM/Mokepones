let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 5
let vidasEnemigo = 5

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById("Seleccionar-Ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonCompañero = document.getElementById("boton-compañero")
    botonCompañero.addEventListener("click", seleccionarCompañero)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego) 
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua) 
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.addEventListener("click", ataquePlanta) 
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}




function seleccionarCompañero(COMPAÑERO) {

    let sectionSeleccionarCompañero = document.getElementById("Seleccionar-compañero")
    sectionSeleccionarCompañero.style.display = "none"
    
    let sectionSeleccionarAtaque = document.getElementById("Seleccionar-Ataque")
    sectionSeleccionarAtaque.style.display = "flex"


    let inputPogrigar = document.getElementById("Pogrigar")
    let inputTorregor = document.getElementById("Torregor")
    let inputCalamity = document.getElementById("Calamity")
    let inputCraptos = document.getElementById("Craptos")
    let inputMorthepko = document.getElementById("Morthepko")
    let inputAnfregor = document.getElementById("Anfregor")
    let spanCompañeroAliado = document.getElementById("compañero-aliado")



    if(inputPogrigar.checked) {
        COMPAÑERO = "Pogrigar"
        alert("Has elegido a " + COMPAÑERO + ", sabia eleccion.")
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

    let botonCompañero = document.getElementById("boton-compañero")
    botonCompañero.disabled = true

    sectionSeleccionarAtaque.style.display = "block"

    sectionSeleccionarCompañero.style.display = "none"

    
}

function seleccionarCompañeroEnemigo() {
    let mascotaAleatorio = aleatorio (1, 6)
    let spanCompañeroEnemigo = document.getElementById("compañero-enemigo")

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
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

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
    let sectionMensajes = document.getElementById("mensajes")
    let resultado

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu compañero ataco con " + ataqueJugador + ", el compañero enemigo ataco con " + ataqueEnemigo + "-" + resultados

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(final) {
    let sectionMensajes = document.getElementById("mensajes")
    let resultado
    let sectionReiniciar = document.getElementById("reiniciar")
    

    let parrafo = document.createElement("p")
    parrafo.innerHTML = final

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonPlanta = document.getElementById("boton-planta")
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

