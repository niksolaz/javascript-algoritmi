/**
 * 
 * CLASSIC VERSION 
 * Ordina un array trovando ripetutamente l'elemento minimo dalla parte non ordinata e mettendolo all'inizio. 
 * 
 * */

class SelectSort {
    static sort(arrays) {
        var len = arrays.length - 1;
        var minIndex; // indice minimo selezionato

        for(var i = 0; i < len; i++) {
            minIndex = i;
            var minValue = arrays[minIndex];
            for(var j = i; j < len; j++) {
                // scambio minimo con minIndex
                if(minValue > arrays[j + 1]){
                    minValue = arrays[j + 1];
                    minIndex = j + 1;
                }
            }

            // il minomo arrays[i] viene scambiato con il arrays[minIndex]
            if(i != minIndex) {
                var temp = arrays[i];
                arrays[i] = arrays[minIndex];
                arrays[minIndex] = temp;
            }
        }
    }
}

var scores = [90,70,50,80,60,85];
SelectSort.sort(scores);
console.log(scores);
