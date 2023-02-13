'use strict';
function someFunction(number){
    console.log(number--);
    if (!number){return setTimeout(() => console.log('BOOM!'), 1000)}
    return setTimeout(someFunction, 1000, number)
}

function slower(func, seconds) {
    console.log(`Chill out, you will get you result in ${seconds} seconds`)
    return function(number) {
        setTimeout(func, seconds * 1000 , number);
    }
}

let slowedSomeFunction = slower(someFunction, 5); 

slowedSomeFunction(3);