function Animal (age){
    this.sleep = false;
    this.dead = false;
    this.birthday =  age;
}

Animal.prototype.sleepMode = function (){
    if (!this.sleep) {
        this.sleep = true;
        console.log('zzZzzZZZzzzzZZzzZZZzzzZ');
    } else {
        this.sleep = false;
        console.log(`${this.name} wake up and start nice day!`);
    }
}

Animal.prototype.die = function (){
   if(this.dead) {
    console.log(`${this.name} is already dead`)
    } else {
        this.dead = true;
    console.log(`${this.name} die :(`);
    }
}

Animal.prototype.dateOfBirth = function (){
    console.log(this.birthday);
}

function Predator(name, age){
    Animal.call(this,age);
    this.hunt = false;
    this.meat = false;
    this.play = false;
    this.age = age;
}
Predator.prototype = Object.create(Animal.prototype);

Predator.prototype.hunting = function(){
    if (!this.hunt){
        this.hunt = true;
        this.meat = true
        this.sleep = false;
        console.log(`${this.name} start hunt`);
    } else {
        this.hunt = false;
        console.log(`${this.name} tired`);
    }
}

Predator.prototype.eatMeat = function(){
    if (this.meat){
        this.meat = false;
        this.sleep = true;
        console.log(`${this.name} stuffed belly and sleeps`);
    } else {
        console.log('You need to catch something to eat');
    }
}

Predator.prototype.playMode = function(){
    if (this.sleep){
        this.sleepMode();
    }
    if(!this.play && !this.sleep){ 
        this.play = true;
    if (this.name === 'Simba'){
        console.log(`${this.name} start play with "Scar" bones :D`);
        return;
    }
    console.log(`${this.name} start play with bones`);

    } 
    
    else {
        this.play = false;
        console.log(`${this.name} looks into your eyes and cry`);
    }
}

function Lion(name, prideName, age = new Date(), leader = false){
    Predator.call(this, name, age);
    this.name = name;
    this.age = age;
    this.leader = leader;
    this.prideName = prideName;
}

Lion.prototype = Object.create(Predator.prototype);

Lion.prototype.growl = function(){
    console.log(`Arrr my name is ${this.name}`);
}
Lion.prototype.prideLeader = function(){
    if (!this.leader){
    this.prideLeader = true;
    console.log(`${this.name} from now is Pride Leader`);
    } else {
        console.log(`${this.name} already is Pride Leader`);
    }
}
Lion.prototype.changePride = function(newPride){
    this.prideName = newPride;
}

function HoneyBadger(name, defeatedSnakes = 0, poisonImmunity = true, age = new Date()){
    Predator.call(this, name, age);
    this.name = name;
    this.age = age;
    this.defeatedSnakes = defeatedSnakes;
    this.poisonImmunity = poisonImmunity;
}
HoneyBadger.prototype = Object.create(Predator.prototype);

HoneyBadger.prototype.growl = function(){
    console.log(`Arrr my name is ${this.name}`);
}
HoneyBadger.prototype.seeSnake = function(){

    console.log(`${this.name} kill snake`);
    this.meat = true;
    this.eatMeat();
    return this.defeatedSnakes ++;
}
HoneyBadger.prototype.fightWithLion = function(){
    console.log(`${this.name} pounced on the lions and they ran away`);
}


function Herbivores(age){
    Animal.call(this, age);
    this.age = age;
    this.chew = false;
    this.grass = false;
}
Herbivores.prototype = Object.create(Animal.prototype)

Herbivores.prototype.chewing = function(){
    if (!this.chew){
        this.chew = true;
        this.grass = true
        this.sleep = false;
        console.log(`${this.name} start chew`);
    } else {
        this.chew = false;
        console.log(`${this.name} tired`);
    }
}

Herbivores.prototype.eatGrass = function(){
    if (this.grass){
        this.grass = false;
        this.sleep = true;
        console.log(`${this.name} stuffed belly and sleeps`);
    } else {
        console.log('You need to find something to eat');
    }
}

Herbivores.prototype.runningAround = function (){
    console.log(`${this.name} running around!`);
}

function Camel(name,humps = 2, caravanName = '', age = new Date()){
    Herbivores.call(this, age, name)
    this.name = name;
    this.age = age;
    this.humps = humps;
    this.caravanName = caravanName;
}
Camel.prototype = Object.create(Herbivores.prototype);

Camel.prototype.lostHump = function (){
    if (!this.humps){
        console.log(`${this.name} lost all humps`);
    } else {
        this.humps--;
        console.log(`${this.name} lost one hump`);
    }
}

Camel.prototype.changeCaravan = function(newName = ''){
    this.caravanName = newName;
    if (this.caravanName === '') {
        console.log(`${this.name} is free`);
    } else {
        console.log(`${this.name} grom now in ${this.caravanName}`);
    }
}

Camel.prototype.sayName = function(){
    console.log(this.name);
}

function Zebra(name, lines = 10, herdName = '', age = new Date()){
    Herbivores.call(this, age, name)
    this.name = name;
    this.age = age;
    this.lines = lines;
    this.herdName = herdName;
}
Zebra.prototype = Object.create(Herbivores.prototype);

Zebra.prototype.bleachLine = function (){
    if (!this.lines){
        console.log(`${this.name} bleached all lines`);
    } else {
        this.lines--;
        console.log(`${this.name} bleached one line`);
    }
}

Zebra.prototype.changeHerdName = function(newName = ''){
    this.herdName = newName;
    if (this.herdName === '') {
        console.log(`${this.name} is free`);
    } else {
        console.log(`${this.name} grom now in ${this.herdName}`);
    }
}

Zebra.prototype.sayName = function(){
    console.log(this.name);
}


let zebra = new Zebra('Christopher Marty Martin');
console.log(zebra);
zebra.sayName();
zebra.bleachLine();
zebra.bleachLine();
zebra.changeHerdName();
zebra.runningAround();
zebra.chewing();
zebra.eatGrass();
zebra.sleepMode();
zebra.die();
zebra.die();
zebra.dateOfBirth();

let camel = new Camel('One Hump Man', 1);
console.log(camel);
camel.sayName();
camel.lostHump();
camel.lostHump();
camel.changeCaravan();
camel.chewing();
camel.eatGrass();
camel.runningAround();
camel.sleepMode();
camel.die();
camel.die();
camel.dateOfBirth();


let medoed = new HoneyBadger('Valera', 10);
console.log(medoed);
medoed.fightWithLion();
medoed.seeSnake();
medoed.hunting();
medoed.eatMeat();
medoed.playMode();
medoed.sleepMode();
medoed.die();
medoed.die();
medoed.dateOfBirth();
// setTimeout (medoed.dateOfBirth.bind(medoed), 5000); 


let simba = new Lion('Simba', 'Big-Pride');
console.log(simba);
simba.growl();
simba.prideLeader();
simba.changePride('Small-Pride');
simba.hunting();
simba.eatMeat();
simba.playMode();
simba.sleepMode();
simba.die();
simba.die();
simba.dateOfBirth();
// setTimeout (simba.dateOfBirth.bind(simba), 5000); 