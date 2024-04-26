//variables de funcion iniciarJuego
let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
let sectionReiniciar = document.getElementById('reiniciar')
let botonMascotaJugador = document.getElementById("boton-mascota")
let botonFuego
let botonAgua
let botonTierra
let botonReiniciar = document.getElementById('boton-reiniciar')

//variables de funcion combate
let spanVidasJugador = document.getElementById('vidas-jugador')
let spanVidasEnemigo = document.getElementById('vidas-enemigo')

//variables de funcion crearMensajes
let sectionMensajes = document.getElementById('resultado')//CAPTURAMOS EN QUE SECCION QUEREMOS COLOCAR DEL HTML
let ataquesDelJugador = document.getElementById('ataques-del-jugador')//CAPTURAMOS EN QUE SECCION QUEREMOS COLOCAR DEL HTML
let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')//CAPTURAMOS EN QUE SECCION QUEREMOS COLOCAR DEL HTML

//variables de funcion seleccinarMascotaJugador
let inputHipodoge
let inputCapipepo
let inputRatigueya
let spanMascotaJugador = document.getElementById('mascota_jugador')
let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
//variables de fucion seleccionarMascotaEnemigo
let spanMascotaEnemigo = document.getElementById('mascota_enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')


let mokepones = []
let ataqueJugador = []// variable global, podrá entrar a cualquier funcion
let ataqueEnemigo = []
let opcionDeMoquepones
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueJugador2 = []
let vidaJugador = 3
let vidaEnemigo = 3

let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './imagenes/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './imagenes/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './imagenes/mokepons_mokepon_ratigueya_attack.png', 5)

// mokepones.push(hipodoge, capipepo, ratigueya)
hipodoge.ataques.push(
    { nombre: '💧', id:'boton-agua' },
    { nombre: '💧', id:'boton-agua' },
    { nombre: '💧', id:'boton-agua' },
    { nombre: '🔥', id:'boton-fuego' },
    { nombre: '🌱', id:'boton-tierra' },  
)

capipepo.ataques.push(
    { nombre: '🌱', id:'boton-tierra' },  
    { nombre: '🌱', id:'boton-tierra' },  
    { nombre: '🌱', id:'boton-tierra' },  
    { nombre: '💧', id:'boton-agua' },
    { nombre: '🔥', id:'boton-fuego' },
)

ratigueya.ataques.push(
    { nombre: '🔥', id:'boton-fuego' },
    { nombre: '🔥', id:'boton-fuego' },
    { nombre: '🔥', id:'boton-fuego' },
    { nombre: '💧', id:'boton-agua' },
    { nombre: '🌱', id:'boton-tierra' },  
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
     sectionReiniciar.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMoquepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMoquepones
        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })

    botonMascotaJugador.addEventListener("click",seleccinarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorioPoder = aleatorio(0, ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorioPoder == 0 || ataqueAleatorioPoder == 1){
        ataqueEnemigo.push('FUEGO')
    }else if(ataqueAleatorioPoder == 3 || ataqueAleatorioPoder == 4){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index);
            crearMensajes("EMPATE");
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponentes(index, index);
            crearMensajes("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponentes(index, index);
            crearMensajes("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponentes(index, index);
            crearMensajes("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponentes(index, index);
            crearMensajes("PERDISTE");
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    }
    revisarVidas();
}
function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!");
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)");
    } else {
        crearMensajeFinal('Lo siento, perdiste :(');
    }
}
function crearMensajes(resultado){
    let nuevoAtaqueJugador = document.createElement('p') //CREAMOS EL ELEMENTO PARRAFO
    let nuevoAtaqueEnemigo = document.createElement('p') //CREAMOS EL ELEMENTO PARRAFO
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
     ataquesDelJugador.appendChild(nuevoAtaqueJugador)//COLOCAMOS EN LA SECCIN QUE CAPTURAMOS
     ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)//COLOCAMOS EN LA SECCIN QUE CAPTURAMOS
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'
}
// function ataqueFuego(){
//     ataqueJugador = 'FUEGO'
//     ataqueAleatorioEnemigo()
// }
// function ataqueAgua(){
//     ataqueJugador = 'AGUA'
//     ataqueAleatorioEnemigo()
// }
// function ataqueTierra(){
//     ataqueJugador = 'TIERRA'
//     ataqueAleatorioEnemigo()
// }
function seleccinarMascotaJugador(){
    if (inputHipodoge.checked){
        spanMascotaJugador.textContent = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }else{
        alert('Debes elegir a tu mascota para la batalla')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques (ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button class="boton-de-ataque BAtaque" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')


    
    // botonFuego.addEventListener('click', ataqueFuego)
    // botonAgua.addEventListener('click', ataqueAgua)
    // botonTierra.addEventListener('click', ataqueTierra)
}

function secuenciaAtaque (){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e) =>{
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })


}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[ataqueAleatorio].ataques
    secuenciaAtaque()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciarJuego(){
    location.reload()
}
window.addEventListener('load', iniciarJuego)