/**
 * 
 * CLASSIC VERSION 
 * 1. Innanzitutto creare un array temporaneo tempArray più grande della lunghezza originale dell'array 
 * 2. Dall'inizio alla posizione di inserimento Copia ogni valore in tempArray 
 * 3. Dalla posizione di inserimento all'ultimo elemento Spostare l'array e spostarlo indietro su tempArray 
 * 4. inserire 75 nell'indice di tempArray. 
 * 5. Infine, assegnare il riferimento del puntatore tempArray all'array originale;
 * 
 * */

function insert(array, score, insertIndex) {
    var tempArray = new Array(array.length + 1);
    for(var i = 0; i < array.length; i++) {
        if(i < insertIndex) {
            tempArray[i] = array[i];
        } else {
            tempArray[i + 1] = array[i];
        }
    }
    tempArray[insertIndex] = score;
    return tempArray;
}

var scores = new Array(90,70,50,80,60,85);
// Inserire 75 nella posizione: indice = 2
scores = insert(scores, 75, 2);
console.log(scores);

/**
 * 
 * NEW VERSION 
 * 1. Innanzitutto creare un array temporaneo tempArray più grande della lunghezza originale dell'array 
 * 2. Dall'inizio alla posizione di inserimento Copia ogni valore in tempArray 
 * 3. Dalla posizione di inserimento all'ultimo elemento Spostare l'array e spostarlo indietro su tempArray 
 * 4. inserire 75 nell'indice di tempArray. 
 * 5. Infine, assegnare il riferimento del puntatore tempArray all'array originale;
 * 
 * */

 const newInsert = (array, score, insertIndex) => {
    var tempArray = new Array(array.length + 1);
    array.forEach((arr,i) => {  
        if(i < insertIndex) {
            tempArray[i] = arr;
        } else {
            tempArray[i + 1] = arr;
        }
    })
    tempArray[insertIndex] = score;
    return tempArray;
}

let myScoresInsert = new Array(90,70,50,80,60,85);
// Inserire 75 nella posizione: indice = 2
myScoresInsert = newInsert(myScoresInsert, 75, 2);
console.log(myScoresInsert);