import { Tab } from './modules/tabella.js';

var scores = [90,70,50,80,60,85];

console.log('ARRAY: ', scores);

var scoresAppend = Tab.append(scores, 99);
console.log('APPEND :', scoresAppend);

var scoresInsert = Tab.insert(scores, 99, 2);
console.log('INSERT :', scoresInsert);

var scoresInsert = Tab.remove(scores, 2);
console.log('REMOVE :', scoresInsert);

Tab.sort(scores);
console.log('SORT :', scores);

Tab.bubbleSort(scores);
console.log('BUBBLE SORT :', scores);

Tab.min(scores);
console.log('MIN :', scores);