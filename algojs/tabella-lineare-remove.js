/**
 * 
 * CLASSIC VERSION 
 * 1. Creare un array temporaneo tempArray di lunghezza inferiore rispetto all'array originale. 
 * 2. Copia i dati davanti a i = 2 nella parte anteriore di tempArray 
 * 3. Copia l'array dopo i = 2 in tempArray 
 * 4. Assegnare il riferimento del puntatore tempArray all'array originale
 * 
 * */

 function insert(array, removeIndex) {
    var tempArray = new Array(array.length - 1);
    for(var i = 0; i < array.length; i++) {
        if(i < removeIndex) {
            tempArray[i] = array[i];
        } 
        if(i > removeIndex) {
            tempArray[i - 1] = array[i];
        }
    }
    return tempArray;
}

var scores = new Array(90,70,50,80,60,85);
// remove indice = 2
scores = remove(scores, 75, 2);
console.log(scores);

/**
 * 
 * NEW VERSION 
 * 1. Creare un array temporaneo tempArray di lunghezza inferiore rispetto all'array originale. 
 * 2. Copia i dati davanti a i = 2 nella parte anteriore di tempArray 
 * 3. Copia l'array dopo i = 2 in tempArray 
 * 4. Assegnare il riferimento del puntatore tempArray all'array originale
 * 
 * */

 const newRemove = (array, removeIndex) => {
    var tempArray = new Array(array.length - 1);
    array.forEach((arr,i) => {  
        if(i < removeIndex) {
            tempArray[i] = arr;
        } 
        if(i > removeIndex) {
            tempArray[i - 1] = arr;
        }
    })
    return tempArray;
}

let myScoresRemove = new Array(90,70,50,80,60,85);
// remove indice = 2
myScoresRemove = newRemove(myScoresRemove, 2);
console.log(myScoresRemove);