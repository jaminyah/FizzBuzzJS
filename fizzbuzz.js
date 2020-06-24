const checkFizzBuzz = require('./checkFizzBuzz');

function fizzBuzz() {
    for (let index=1; index < 50; index++) {
        var output = checkFizzBuzz(index);
        console.log(output);
    }
}

fizzBuzz()