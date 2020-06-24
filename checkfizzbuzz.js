
function checkFizzBuzz(input) {
    let fizz = ((input % 3) === 0);
    let buzz = ((input % 5) === 0);

    var result = '';
    if (fizz && buzz) {
        result = 'FizzBuzz';
    } else if (fizz) {
        result = 'Fizz';
    } else if (buzz) {
        result = 'Buzz';
    } else {
        result = input.toString();
    }
    return result;
}
module.exports = checkFizzBuzz;