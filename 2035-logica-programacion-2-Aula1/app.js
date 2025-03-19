/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'JavaScript y el DOM';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Manipulando el DOM desde JavaScript';

function intendoDeUsuarario () {
    alert('Hola, soy un alert');
}*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');        
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('P', 'Numero secgreto es menor');
        }else{
                asignarTextoElemento('p', 'Numero secreto es mayor');
        }
        intentos++; 
        limpiarCampo();
        
    }
    return;
}

function limpiarCampo() {
    document.getElementById('valorUsuario').value = '';
}

/*
function limpiarCampo() {
    let valorCampo = document.querySelector('#valorUsuario');
    valorCampo.value = '';
}*/

function generarNumeroSecreto()  {
    return  Math.floor(Math.random()*10)+1;
}

function condcionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');	
    asignarTextoElemento('p', 'Ingresa de un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinicarJuego() {
    limpiarCampo();  
    condcionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


condcionesIniciales();