let me = {
    name: 'Stas',
    residency: 'Slov\'yansk',
    gender: 'male',
    age: 30,
    myHobby: 'PC repair',
    defaultMood: 'work',
    currentMood: 'lazy',
    lightMode: 'yes',
    sayHi() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age+1}`);
    },
    describeMyMood(){
    console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    },
    haveLight(){
        console.log(`Can i have light? - ${this.lightMode}`);
    },
    hobby(){
        console.log(`My hobby is ${this.myHobby}`);
    },
    homeWork(){
        let a = prompt('Did I do my homework? yes or no', '');
        a === 'yes' ? alert('Great! :)') : alert(' I\'m sad :(');
    }
    }

    // Я добавив 3 методи, 2 виводять в консоль хоббi та наявнiсть свiтла, 3й метод робить запит щодо виконання домашки, якщо 'yes' то бачим поп-ап "Great! :)" якщо 'no' або cancel "I'm sad :("

    me.sayHi();
    me.prognose();
    me.describeMyMood();
    me.haveLight();
    // me.homeWork(); //закоментив щоб не вибивало помилку для alert
