const currentMaxValue = 4589;
let reverseMaxValue = currentMaxValue.toString();
reverseMaxValue = [...reverseMaxValue].reverse().join('') * 1; // * 1 це костиль щоб перевести до числа i прибрати зайву операцiю з коду :)
// reverseMaxValue = parseInt(reverseMaxValue); це по правильному 


console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'