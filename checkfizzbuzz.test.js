const checkFizzBuzz = require('./checkFizzBuzz');
const { TestScheduler } = require('jest');

test('Evaluate fizzbuzz for 3', () => {
    expect(checkFizzBuzz(3)).toBe('Fizz');
});

test('Evaluate fizzbuzz for 5', () => {
    expect(checkFizzBuzz(5)).toBe('Buzz');
});

test('Evaluate fizzbuzz for 15', () => {
    expect(checkFizzBuzz(15)).toBe('FizzBuzz');
});

test('Evaluate fizzbuzz for 17', () => {
    expect(checkFizzBuzz(17)).toBe('17');
});