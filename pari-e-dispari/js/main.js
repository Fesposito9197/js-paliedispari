"use strict"
// chiediamo di scegliere tra pari e dispari 
// chiediamo di inserire un numero tra 1 e 5 
// creo una funzione che mi genera un numero random tra 1 e 5  per la cpu 
// somma dei numeri 
// creo una funzione per stabile se la somma e pari o dispari 
// creo alert per dichiarare chi ha vinto 

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "pari"
    }else{
        return "dispari"
    }
}
const userChoice = prompt('scegli tra pari e dispari')
console.log(userChoice)
let userNumber = Number(prompt("inserisci un numero tra 1 e 5" ))
console.log(userNumber)
let cpuNumber = getRndInteger(1,5)
console.log(cpuNumber)
let somma = userNumber + cpuNumber
console.log(somma)
if(evenOrOdd(somma) === userChoice){
    alert("Hai battuto la cpu")
}else{
    alert("Ha vinto la cpu")
}
console.log(evenOrOdd(somma))