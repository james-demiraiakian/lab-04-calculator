import { add, sub, mult, div } from './calculations.js';

// import functions and grab DOM elements

//Add
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output = document.getElementById('output');
const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');

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