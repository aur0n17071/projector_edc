'use strict';
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

    let securedSayHi = me.sayHi.bind(me);
    let securedPrognose = me.prognose.bind(me);
    let securedDescribeMyMood = me.describeMyMood.bind(me);
    let securedHaveLight = me.haveLight.bind(me);
    let securedHomeWork = me.homeWork.bind(me);
    setTimeout(securedSayHi, 3000);
    setTimeout(securedPrognose, 2000);
    setTimeout(securedDescribeMyMood, 1000);
    setTimeout(securedHaveLight, 1000);
    // setTimeout(securedHomeWork, 1000);
