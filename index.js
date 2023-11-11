require('dotenv').config();
console.log(process.env); // remove

console.log('Hello World!');

/**
 * A function that logs a greeting message.
 *
 * @param {string} name - The name to greet. Default is 'you'.
 * @return {undefined} The function does not return a value.
 */
const hello = (name) => {
    name = 'You' || name;
    console.log('Hello ' + name + '!');
};

hello('To');

var srt1 = 'test 1';
let srt2 = 'test 2';
