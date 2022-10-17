/*
Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
Bonus:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/ 

"use strict"


//Funzione per prendere il bottone Start
const startButton = document.getElementById('start');

function start() {
    console.log('Inizio gioco....')
    
    const NUM_BOMB = 16; 
    const bombsPosition = [];
    let check = false;

    let numCell;
    const fieldGame = document.getElementById('field');
    console.log(fieldGame)
    fieldGame.innerHTML = '';
    const levelHTML = document.getElementById('level');
    const level = levelHTML.value;
    switch(level){
        case '1': 
        default:
            numCell = 100;
            break;
        case '2': 
            numCell = 81;
            break;
        case '3': 
            numCell = 49;
            break;
    }
 
}

//attacco l'event listener
startButton.addEventListener('click',start);