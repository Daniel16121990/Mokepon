let ataqueJugador // variable global, podrá entrar a cualquier funcion
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccinarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorioPoder = aleatorio(1,3)
    if (ataqueAleatorioPoder == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorioPoder == 2){
        ataqueEnemigo = 'AGUA'
    }else{
        ataqueEnemigo = 'TIERRA'
    }
    combate()

}
function combate(){

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if(ataqueEnemigo == ataqueJugador){
        crearMensajes('EMPATE')
        
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensajes('GANASTE')
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensajes('GANASTE')
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensajes('GANASTE')
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo
    }else {
        crearMensajes('PERDISTE')
        vidaJugador = vidaJugador - 1
        spanVidasJugador.innerHTML = vidaJugador
    }
    revisarVidas()
   
}
function revisarVidas(){
    if(vidaEnemigo == 0){
        crearMensajesFinal('FELICITACIONES, Ganaste')
    }
    else if(vidaJugador == 0){
        crearMensajesFinal('Lo siento, perdiste')
    }
}
function crearMensajes(resultado){

     let parrafo = document.createElement('p') //CREAMOS EL ELEMENTO PARRAFO
     parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador} y el enemigo atacó con ${ataqueEnemigo}. RESULTADO = ${resultado}`// COLOCAMOS TEXTO AL ELEMENTO QUE CREAMOS
     let sectionMensajes = document.getElementById('mensajes')//CAPTURAMOS EN QUE SECCION QUEREMOS COLOCAR DEL HTML
     sectionMensajes.appendChild(parrafo)//COLOCAMOS EN LA SECCIN QUE CAPTURAMOS
}
function crearMensajesFinal(resultadoFinal){

    let parrafo = document.createElement('p') //CREAMOS EL ELEMENTO PARRAFO
    parrafo.innerHTML = resultadoFinal
    let sectionMensajes = document.getElementById('mensajes')//CAPTURAMOS EN QUE SECCION QUEREMOS COLOCAR DEL HTML
    sectionMensajes.appendChild(parrafo)//COLOCAMOS EN LA SECCIN QUE CAPTURAMOS


    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled= true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled= true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled= true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function seleccinarMascotaJugador(){
    


    const $ = selector => document.getElementById(selector)
    let inputHipodoge = $('hipodoge')
    let inputCapipepo = $('capipepo')
    let inputRatigueya = $('ratigueya')
    let spanMascotaJugador = $('mascota_jugador')

    if (inputHipodoge.checked){
        spanMascotaJugador.textContent = 'Hipodope'
        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
        sectionSeleccionarAtaque.style.display = 'block'

        let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
        sectionSeleccionarMascota.style.display = 'none'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
        sectionSeleccionarAtaque.style.display = 'block'

        let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
        sectionSeleccionarMascota.style.display = 'none'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
        sectionSeleccionarAtaque.style.display = 'block'

        let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
        sectionSeleccionarMascota.style.display = 'none'
    }else{
        alert('Debes elegir a tu mascota para la batalla')
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota_enemigo')
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.textContent = 'Hipodoge'
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.textContent = 'Capipepo'
    }else{
        spanMascotaEnemigo.textContent = 'Ratigueya'
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciarJuego(){
    location.reload()
}
window.addEventListener('load', iniciarJuego)
let hola = 1