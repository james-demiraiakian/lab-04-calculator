// IMPORT MODULES under test here:

import { addTwo, add } from '../calculations.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('test addTwo functionn', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addTwo(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('add function', (expect) => {
    //Arrange
    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    //Actual
    const actual = add(input1, input2);

    expect.equal(actual, expected, 'adder test');
});

test('sub function', (expect) => {
    //Arrange
    const input1 = 5;
    const input2 = 3;
    const expected = 2;

    //Actual
    const actual = sub(input1, input2);

    expect.equal(actual, expected, 'subtract test');
});
