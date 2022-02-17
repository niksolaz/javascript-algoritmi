/**
 * 
 * CLASSIC VERSION 
 * Valore iniziale minIndex=0, j=1 Confronta arrays[minIndex] con arrays[j] 
 * se arrays[minIndex] > arrays[j] allora minIndex=j, j++ 
 * altrimenti j++. 
 * continuare fino all'ultimo numero, arrays[minIndex] è il valore minimo.  
 * 
 * */

function min(arrays) {
    var minIndex = 0;
    for(var j = 1; j < arrays.length; j++) {
        if(arrays[minIndex] > arrays[j]) {
            minIndex = j;
        }
    }
    return arrays[minIndex];
}

var scores = [60,80,95,50,70];

var minValue = min(scores);
console.log('Valore minimo = ', minValue);

/**
 * 
 * NEW VERSION 
  * Valore iniziale minIndex=0, j=1 Confronta arrays[minIndex] con arrays[j] 
 * se arrays[minIndex] > arrays[j] allora minIndex=j, j++ 
 * altrimenti j++. 
 * continuare fino all'ultimo numero, arrays[minIndex] è il valore minimo. 
 * 
 * */

const newMin = (arrays) => {
    let minIndex = 0;
    arrays.forEach((item, i) => {
        if(arrays[minIndex] > item) {
            minIndex = i;
        }
    })
    return arrays[minIndex];
}

const newScores = [60,80,95,50,70];

let newMinValue = newMin(newScores);
console.log('Valore minimo = ', newMinValue);
