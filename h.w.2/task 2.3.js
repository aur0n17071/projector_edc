//Iterable
function iterativeOddSumTo(number) {
    let result = 0;
    for(let i = 0; i <= number; i++){
        if(i % 2 === 0) {
            continue;
        }
        else {
            result = result + i;
        }
    }
    return result
};
console.log(iterativeOddSumTo(1)) 
console.log(iterativeOddSumTo(10)) 
console.log(recursiveOddSumTo(3)); 

//recursive
function recursiveOddSumTo(number) {
    if (number === 0){
        return number;
    }
    else if (number % 2 === 0){
        return recursiveOddSumTo(number - 1);
    }
    else {
       return number + recursiveOddSumTo(number - 1);
    }
};
console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25
console.log(recursiveOddSumTo(3)); 