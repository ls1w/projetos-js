'use strict'



function mudarCor () {
    forma1.classList.toggle('vermelho');
}

function mudarForma () {
    forma2.classList.toggle('circulo');
}

function aumentarTamanho () {
    forma3.classList.toggle('maior');
}

function girarElemento () {
    forma4.classList.toggle('girar225');
}

function moverElemento () {
    forma5.classList.toggle('esquerda');
}

function esticarElemento () {
    forma6.classList.toggle('esticado');
}

function achatarElemento () {
    forma7.classList.toggle('achatado');
}

function mudarTudo () {
    formaFinal.classList.toggle('vermelho');
    formaFinal.classList.toggle('circulo');
    formaFinal.classList.toggle('maior');
    formaFinal.classList.toggle('girar225');
    formaFinal.classList.toggle('esquerda');
    formaFinal.classList.toggle('esticado');
    formaFinal.classList.toggle('achatado');
}



const forma1 = document.getElementById('forma1');
const forma2 = document.getElementById('forma2');
const forma3 = document.getElementById('forma3');
const forma4 = document.getElementById('forma4');
const forma5 = document.getElementById('forma5');
const forma6 = document.getElementById('forma6');
const forma7 = document.getElementById('forma7');
const formaFinal = document.getElementById('forma-final');

forma1.addEventListener('click' , mudarCor);
forma2.addEventListener('click' , mudarForma);
forma3.addEventListener('click' , aumentarTamanho);
forma4.addEventListener('click' , girarElemento);
forma5.addEventListener('click' , moverElemento);
forma6.addEventListener('click' , esticarElemento);
forma7.addEventListener('click' , achatarElemento);
formaFinal.addEventListener('click' , mudarTudo);