function* generateRandomNumbers(max, quantity) {
    for (; quantity > 0; quantity--){
        yield Math.abs(Math.round(Math.random() * (max + 1) - 0.5));
    }
}
/*abs для того щоб прибрати некрасивий -0 (він не впливає на результат але чому не виправити баг :) )
генерую рандомне число від 0 до максимального (добавив границі по 0.5 щоб ймовірність випадання крайніх 
чисел була однаковою)*/

function* generate(){
    yield* generateRandomNumbers(10,10000)
}

// масив для збереження результатiв 
let test = {
}

for (let num of generate()){
    test[num] = (test[num] + 1) || 1 
    //записую результат по ключу або генерую ключ якщо такого немає
}

console.log(test);