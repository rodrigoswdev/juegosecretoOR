//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

/*function asignarTextoElemento(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Juego del número secreto actualizado';    
}*/

//let numeroSecreto = generarNumeroSecreto();
//let intentos = 1;
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function verificarIntento(){
    //let numeroDeUsuario = document.querySelector('input');
    console.log(intentos);
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//    console.log(numeroSecreto);
//    console.log(numeroDeUsuario);
//    console.log(numeroDeUsuario == numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ?'vez' : 'veces'}`);
        //para quitar el disabled
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }      
    return;
}

/*function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}*/
/*function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
} */

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else{
    //Si el numero gnerado esta incuido en la lista  
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            //recursividad 
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


/*function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value='';
}*/


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');   
}
condicionesIniciales();

//asignarTextoElemento('h1','Juego del Número Secreto!');
//asignarTextoElemento('p','Indica un número del 1 al 100');
//hoisting