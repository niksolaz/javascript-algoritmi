/**
 * 
 * CLASSIC VERSION 
 * 1. Innanzitutto creare un array temporaneo (tempArray) più grande della lunghezza dell'array originale 
 * 2. Copia ogni valore in tempArray 
 * 3. Assegna 75 all'ultimo indice di tempArray 
 * 4. Infine assegnare il riferimento del puntatore tempArray all'array originale;
 * 
 * */
function append(array,value) {
    // creare un nuovo array, length = scores.length + 1
    var tempArray = new Array(array.length + 1);
    for(var i = 0; i < array.length; i++) {
        tempArray[i] = array[i];
    }
    tempArray[array.length] = value;
    return tempArray;
}

var scores = new Array(90,70,50,80,60,85);
scores = append(scores, 75);

console.log(scores);

/**
 * 
 * NEW VERSION 
 * 1. Innanzitutto creare un array temporaneo (tempArray) più grande della lunghezza dell'array originale 
 * 2. Copia ogni valore in tempArray 
 * 3. Assegna 75 all'ultimo indice di tempArray 
 * 4. Infine assegnare il riferimento del puntatore tempArray all'array originale;
 * 
 * */

 const newAppend = (array,value) => {
    // creare un nuovo array, length = scores.length + 1
    let tempArray = new Array(array.length + 1);
    array.forEach((arr,i) => { tempArray[i] = arr })
    tempArray[array.length] = value;
    return tempArray;
}

let myscores = new Array(90,70,50,80,60,85);
myscores = newAppend(myscores, 75);

console.log(myscores);