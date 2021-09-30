import { add } from './calculations.js';

// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addOutput = document.getElementById('add-output');
const addButton = document.getElementById('add-button');

console.log(addInput1, addInput2, addOutput, addButton);

addButton.addEventListener('click', () => {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    console.log(result);
    addOutput.textContent = result;
});