/**
 * 
 * CLASSIC VERSION 
 * Se arrays [j]> arrays [j + 1], vengono scambiati. Gli elementi rimanenti ripetono questo processo fino al completamento dell'ordinamento. 
 * 
 * */
function sort(arrays) {
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

var scores = [90,70,50,80,60,85];

sort(scores);
console.log(scores);

/**
 * 
 * NEW VERSION 
 * Se arrays [j]> arrays [j + 1], vengono scambiati. Gli elementi rimanenti ripetono questo processo fino al completamento dell'ordinamento. 
 * 
 * */
const newSort = (arrays) => {
    const newArrays = arrays.map((item, i) => {
        let isSwap = false;
        for(var j = 0; j < arrays.length - i - 1; j++) {
            // scambio
            if (arrays[j] > arrays[j + 1]) {
                let flag = arrays[j];
                arrays[j] = arrays[j + 1];
                arrays[j + 1] = flag;
                isSwap = true;
            }
        }
        // Nessuno scambio, quindi finisce di ordinare
        if(!isSwap) {
            return arrays;
        }
    })
    return newArrays;
}

var scores = [90,70,50,80,60,85];

newSort(scores);
console.log(scores);
