
// Write your code here
// declare num1 and num2
let num1 = random();
let num2 = random();

// declare multiple and assign expected value to it. 
const multiply = 62;

if (multiply === num1 * num2) {
    console.log("the result is 62")
};


function random () {
    let x = Math.floor(Math.random() * 100) + 1;
    return x;
}




