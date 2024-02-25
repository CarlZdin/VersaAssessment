//Import fs library
const fs = require('fs');

//Let the result as an empty string
let result = [];

// Looping from 1 - 100 with a step of 1 for every iteration
for (let i = 1; i <= 100; i++) {
    // if number is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("BIGBANG");
    } 
    // if number is only divisible by 3
    else if (i % 3 === 0) {
        result.push("BIG");
    } 
    // if number is only divisible by 5
    else if (i % 5 === 0) {
        result.push("BANG");
    } 
    // number is not divisible by 3 or 5
    else {
        result.push(i.toString());
    }
}

// Output as a output.json file using fs.writeFileSync
fs.writeFileSync('output.json', JSON.stringify(result));