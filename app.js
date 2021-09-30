import { add, sub } from './calculations.js';

// import functions and grab DOM elements

//Add
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addOutput = document.getElementById('add-output');
const addButton = document.getElementById('add-button');

//Sub
const subInput1 = document.getElementById('sub-input1');
const subInput2 = document.getElementById('sub-input2');
const subOutput = document.getElementById('sub-output');
const subButton = document.getElementById('sub-button');

//console.log(addInput1, addInput2, addOutput, addButton);

addButton.addEventListener('click', () => {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    addOutput.textContent = result;
});

subButton.addEventListener('click', () => {
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const result = sub(value1, value2);
    subOutput.textContent = result;
});