import { add, sub, mult, div, mod, intDiv, triHyp, coneVol } from './calculations.js';

// import functions and grab DOM elements

//Add
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output = document.getElementById('output');
const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');
const modButton = document.getElementById('mod-button');
const intDivButton = document.getElementById('int-div-button');
const triHypButton = document.getElementById('tri-hyp-button');
const coneVolButton = document.getElementById('cone-vol-button');

//console.log(addInput1, addInput2, addOutput, addButton);

addButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = add(value1, value2);
    output.textContent = result;
});

subButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = sub(value1, value2);
    output.textContent = result;
});

multButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = mult(value1, value2);
    output.textContent = result;
});

divButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = div(value1, value2);
    output.textContent = result;
});

modButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = mod(value1, value2);
    output.textContent = result;
});

intDivButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = intDiv(value1, value2);
    output.textContent = result;
});

triHypButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = triHyp(value1, value2);
    output.textContent = result;
});

coneVolButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = coneVol(value1, value2);
    output.textContent = result;
});
