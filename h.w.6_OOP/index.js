class Сharacter {
    #createDate;
    constructor(){
        this.live = true;
        this.#createDate = new Date();
    }
    sayHi(){
        console.log(`Hi, my name is ${this.name}`);
    }
    
    die(){
        if (this.live){
        this.live = false;
        console.log(`${this.name} die`);
        } else {
            console.log(`${this.name} died at the age ${this.age}`);
        }
    }
    createDate(){
        console.log(this.#createDate);
    }
}

class MainCharacter extends Сharacter {
    #haveJediPower;
    constructor(){
        super();
        this.plane = ['no'];
        this.#haveJediPower = false;
    }
    havePlane(planeName, type = 'Starfighter'){
        this.plane = [planeName, type];
        if (this.plane[0] !== 'no'){
        console.log(`Plane name ${this.plane[0]}, type ${this.plane[1]}`);
        }
    }
    changeJediPower(){
        this.#haveJediPower = true;
        console.log(`${this.name} from now have Jedi power!`);
    }
}

class Rebel extends MainCharacter {
    #langCounter;
    constructor(name, age = 18, language){
        super();
        this.name = name;
        this.age = age;
        this.language = language;
        this.#langCounter = 1;
    }

    addLanguage(lang){
        this.secondLanguage = lang;
        this.#langCounter++;
    }
    knownLanguages(){
        console.log(`${this.name} knows ${this.#langCounter} languages`);
    }
}

class Sith extends MainCharacter {
    #character;
    constructor(name, age = 22, swordColor = 'green'){
        super();
        this.name = name;
        this.age = age;
        this.swordColor = swordColor;
        this.#character = 'sith';
    }
    usePower(){
        console.log(`${this.name} picks up and throws a spoon`);
    }
    useSword(){
        console.log('shiu shiu');
    }
    changeSwordColor(color){
        this.swordColor = color;
        console.log(`Sword color changed on ${color}`);
    }
}

class Stormtrooper extends Сharacter {
    #supportVader;
    constructor(name, spec ='blaster shooter', age = '20'){
        super();
        this.name = name;
        this.specialization = spec;
        this.age = age;
        this.#supportVader = 'yes';
    }
    shoot(){
        console.log('Pow pow piy');
    }
    typeOfSpec(spec){
        this.specialization = spec;
        console.log(`${this.name}s specialization is ${this.specialization}`);
    }
}

class Wookiee extends Сharacter{
    #lifeDebt;
    constructor(name, age = 20, speak = 'no'){
        super();
        this.name = name;
        this.age = age;
        this.speak = speak;
        this.#lifeDebt = 'no';
    }
    startSpeak(){
        this.speak = 'yes';
        console.log('Great! I start speak');
    }
    lifeDebt(debt){
        if (debt === 'yes'){
        this.#lifeDebt = debt;
        } else {
            return;
        }
    }
    shoot(){
        console.log('Pow pow');
    }
}

// let luk = new Rebel ('Luk', 30, 'Asian');
// console.log(luk);
// luk.addLanguage('English');
// luk.knownLanguages();
// luk.die();
// luk.die();
// luk.createDate();
// luk.havePlane('Flight');
// luk.changeJediPower();
// console.log(luk);

// let vader = new Sith ('Vader');
// console.log(vader);
// vader.changeSwordColor('red');
// vader.havePlane('Some flight');
// vader.usePower();
// vader.useSword();
// vader.die();
// console.log(vader);

// let shooter = new Stormtrooper('Valera');
// console.log(shooter);
// shooter.typeOfSpec('boxer');

// let chewbaka = new Wookiee('Chewbaka');
// chewbaka.lifeDebt('yes');
// chewbaka.startSpeak();
// chewbaka.shoot();
// console.log(chewbaka);