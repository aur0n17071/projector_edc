detonatorTimer(3);
// 3
// 2
// 1
// BOOM!*

// Який з 2х наступних варiантiв краще? 

// Variant setTimeout - 1
// function detonatorTimer(delay) {
//     console.log(delay--);
//     if (!delay){return setTimeout(() => console.log('BOOM!'), 1000)}
//     return setTimeout(detonatorTimer, 1000, delay)
// }


// Variant setTimeout - 2
// function detonatorTimer(delay) {
//     if (delay){console.log(delay--)}
//     else{return console.log('BOOM!')}
//     return setTimeout(detonatorTimer, 1000, delay)
// }


// ---------------------------------------------------------------
// Variant setInterval
function detonatorTimer(delay) {
    let timer = setInterval(() => {
        console.log(delay-- || 'BOOM!');
        if(delay === -1){clearInterval(timer)}
    }, 1000);
}



