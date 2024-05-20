"use strict";
class Coder {
    constructor(name, music, age, lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello, im ${this.age}`;
    }
}
const Dave = new Coder('dave', 'rock', 42, 'typescript');
console.log(Dave.getAge());
const Sam = new Coder('dave', 'rock', 42);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getComputer() {
        return `I use ${this.computer}`;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const sara = new WebDev('Mac', 'sara', 'lofi', 25);
console.log(sara.getComputer());
console.log(sara.getLang());
class Guitarists {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarists('Jimmy', 'guitar');
console.log(page.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const wohn = new Peeps('wohn');
const Lohn = new Peeps('Lohn');
console.log(Peeps.count);
console.log(wohn.id);
// GETTER SETTER
class bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('param is not an array of strings');
    }
}
const myBands = new bands();
myBands.data = ['Neil YOung', 'led sep'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'noodles'];
console.log(myBands.data);
