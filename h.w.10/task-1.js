// 1) за допомогою ітератора
let range = {
    from: 1,
    to: 100,

    [Symbol.iterator]: function(){
        let cur = this.from;
        let last = this.to;
        return {
            next(){
                if (cur <= last){
                    return {
                        value: cur++,
                        done: false
                    }
                } else {
                    return {
                        value: cur,
                        done: true
                    }
                }
            }
        }
    }
}


// Виклик для результату
for (item of range){
//    console.log(filterFizz(item));
}



//2) за допомогою генератора

let range2 = {
	from: 1,
	to: 100,

	*[Symbol.iterator] (){
		for (let value = this.from; value <= this.to; value++){
			yield value;
		}
	}
}

// Виклик для результату
for (item of range2){
   console.log(filterFizz(item));
}

//умова
function filterFizz(num){
    if (num % 15 === 0){
            return 'FizzBuzz'
    }
    if (num % 5 === 0){
            return 'Buzz'
    }
    if (num % 3 === 0){
            return 'Fizz'  
    }
    return num
}