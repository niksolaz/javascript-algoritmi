/**
 * 
 * VERSION CLASS TAB: append, insert, sort, bubbleSort, min 
 * 
 * */
class Tab {
    // APPEND AT LAST INDEX OF ARRAY
    static append(array,value) {
        // creare un nuovo array, length = scores.length + 1
        var tempArray = new Array(array.length + 1);
        for(var i = 0; i < array.length; i++) {
            tempArray[i] = array[i];
        }
        tempArray[array.length] = value;
        return tempArray;
    }
    // INSERT ARRAY AT SPECIFIC INDEX
    static insert(array, score, insertIndex) {
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
    // SORT ARRAY
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
    // SORTING ARRAY USE BUBBLE METHOD
    static bubbleSort(arrays) {
        for(var i = 0; i < arrays.length - 1; i++) {
            var isSwap = false;
            for(var j = 0; j < arrays.length - i - 1; j++) {
                // scambio
                if (arrays[j] > arrays[j + 1]) {
                    var flag = arrays[j];
                    arrays[j] = arrays[j + 1];
                    arrays[j + 1] = flag;
                    isSwap = true;
                }
            }
            // Nessuno scambio, quindi finisce di ordinare
            if(!isSwap) {
                break;
            }
        }
    }
    // VALORE MINIMO DI UN ARRAY
    static min(arrays) {
        var minIndex = 0;
        for(var j = 1; j < arrays.length; j++) {
            if(arrays[minIndex] > arrays[j]) {
                minIndex = j;
            }
        }
        return arrays[minIndex];
    }
    // DELETE SPECIFIC INDEX FROM ARRAY
    static remove(array, removeIndex) {
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
}

export { Tab }
