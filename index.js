
// Write your code here
const multiply = 62;

let num1 = random();
let num2 = random();
let num3 = random();
let num4 = random();

if (multiply === num1 * num2) {
    console.log ("the result is 62")
};

const mod = 4; 
if (num3%num4 === mod) {
    console.log("the reminder is 4")
}

const max = Math.max(1,2,4,6,8,20);


// Create a function ' random' to simplize the process of generating the integers for this lab

function random () {
    // Because the purpose is to create the integer, so that we declare the variable as the number to be returned out.
    // as we know the result is to get '62', the random method genearting between 0 and 1, it is why need to multiply 100.  
    let x = Math.floor(Math.random() * 10)+ 1;
    return x;
    // console.log (`$num`);
}
// console.log (random())