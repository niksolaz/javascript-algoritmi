/**
 * 
 * CLASSIC VERSION   
 * 
 * */
// class InsertSort {
//     static sort(arrays) {
//         for( var i = 0; i < arrays.length; i++) {
//             var insertElement = arrays[i]; //prendi nuovi elementi ordinati
//             var insertPosition = i;
//             for( var j = insertPosition - 1; j >= 0; j--) {
//                 // inserElement viene spostato a destra
//                 if (insertElement < arrays[j]) {
//                     arrays[j + 1] = arrays[j];
//                     insertPosition--;
//                 }
//             }
//             arrays[insertPosition] = insertElement;
//         }
//     }
// }

// var scores = [ 90, 70, 50, 80, 60, 85 ];  
// InsertSort.sort(scores);  
// console.log(scores);

var score = [90, 70, 50, 80, 60, 85]

function revert(arrays) {
    var remote = [];
    var start = 0;
    var end = arrays.length - 1;
    while (start < end) {
        if (arrays[start] > arrays[end]) {
            remote[start] = arrays[end];
            remote[end] = arrays[start];
        } else {
            remote[start] = arrays[start];
            remote[end] = arrays[end];
        }
        start++;
        end--;
    }
    return remote;
}


console.log(revert(score));