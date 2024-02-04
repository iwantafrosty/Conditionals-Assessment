// Part I
let userChoice = prompt("Enter your choice: heads or tails").toLowerCase();
let randomNumber = Math.floor(Math.random() * 2); // Generates a random number 0 or 1
let computerChoice;

if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}

if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice + " not " + userChoice);
}

// Part II
let birthYear = prompt("Enter your birth year");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age > 21) {
    alert("You are " + age + " years old. You are old enough to drink in the US");
} else if (age === 21) {
    alert("You are " + age + " years old. You are old enough to drink in the US...barely");
} else {
    alert("You are " + age + " years old. Sorry, you are not old enough to drink in the US");
}