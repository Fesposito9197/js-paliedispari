"use strict"

// chiedo all'utente di inserire una parola 
const text = prompt('inserisci una parola');


// creo una funzione che mi inverta la parola inserita dall'utente 
function palindroma(textToCheck) {
    
    let invertedCheck = "";
    for (let i = textToCheck.length - 1; i >= 0; i--) {
        invertedCheck += textToCheck[i]
        console.log(invertedCheck)
    } if (textToCheck === invertedCheck ) {
        return true;
        
    } else{
        return false
    }
}
function reverseString(textToRevert) {
    console.log(textToRevert.split(""))
    console.log(textToRevert.split("").reverse())
    console.log(textToRevert.split("").reverse().join(""))

    return textToRevert.split("").reverse().join("");
    
}
// richiamo la funzione dove se l'utente inserisce una parola palindroma da true invece da false in  caso contrario 
if(reverseString(text) === text ){
    alert("Hai inserito una parola palindroma")
}else{
    alert("Non hai inserito una parola palindroma")
}
// if(palindroma(text) === true ){
//     alert("Hai inserito una parola palindroma")
// }else{
//     alert("Non hai inserito una parola palindroma")
// }
// console.log(palindroma(text))