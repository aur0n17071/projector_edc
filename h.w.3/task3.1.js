function addThemAll(...arg){
    return arg.reduce((result, item)=>result += item)
}

function addThemAll2(...arg){
    let result = 0;
    for (let item of arg){
        result += item;
    }
    return result;
}
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

console.log(addThemAll2(2,4)); // 6
console.log(addThemAll2(1,2,3,4)); // 10
console.log(addThemAll2(5,5,10)); // 20