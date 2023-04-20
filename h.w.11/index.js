import {array }  from "./array.js";
import {set} from "./set.js";

const btn = document.querySelector('.btn');

class UI{
    constructor(){
        this.input = document.querySelector('.input');

        this.emoticArr = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];
    }

    randomEmotic(){
        this.input.value = this.emoticArr[Math.abs(Math.round(Math.random() * (6 + 1) - 0.5))];
    }
    addTextValue(){
        return this.input.value;
    }
    drawTable(){
        let table = document.querySelector('.table') || document.createElement('div');
        table.classList.add('table')
        table.innerHTML = `
        <table>
        <tr>
            <td>Типовий Array :</td>
            <td>[${array}]</td>
        </tr>
        <tr>
            <td>Типовий Set:</td>
            <td>${[...set]}</td>
        </tr>
        `
        document.body.prepend(table)
    }
}

let ui = new UI();
window.addEventListener('load',() =>{
    ui.randomEmotic();
    ui.drawTable();
} );

btn.addEventListener('click', ()=>{
    let outText =  ui.addTextValue();
    ui.randomEmotic();
    array.push(outText);
    set.add(outText);
    ui.drawTable();
});





