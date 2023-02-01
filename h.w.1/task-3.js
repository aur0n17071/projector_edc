const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((mult, item) => mult * item, 1);;

console.log(productOfArray); // 24