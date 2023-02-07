'use strict'
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

//Variant 1
// function optimizer(data) {
//     let dataClone = Object.fromEntries(Object.entries(data).map(([key,value]) => [key = key.toLowerCase(),value = Number(value).toFixed(2)]))
//     return dataClone;
// };

//Variant 2
function optimizer(data) {
    let obj = {};
    for (let key in data){
        let value = Number(data[key]).toFixed(2) ;
        key = key.toLowerCase()
        obj[key]= value;
    }
    return obj;
};

let updatedPriceData = optimizer(priceData); 

console.log(priceData)
console.log(updatedPriceData)  // {apples: '23.40', bananas: '48.00', oranges: '48.76'}