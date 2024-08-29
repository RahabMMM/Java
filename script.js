
let name = "John Doe";
let age = 30;
let isStudent = true;


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 7));
console.log("Division:", divide(20, 4));
console.log("Multiplication:", multiply(6, 8));


const nameInput = document.getElementById("name-input");
const greetButton = document.getElementById("greet-button");
const greetingMessage = document.getElementById("greeting-message");

greetButton.addEventListener("click", () => {
    const name = nameInput.value;
    greetingMessage.textContent = `Hello, ${name}!`;
});