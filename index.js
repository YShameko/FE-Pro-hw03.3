// use strict;
const userName = prompt('Please enter your first name', 'John');
const userLastName = prompt('now your last name', 'Doe');
const userAge = prompt('and your age (whole number)');

const YOUNG_AGE = 18;
const QUITE_OLD_AGE = 60;
const VERY_OLD_AGE = 85;
const IMPOSSIBLE_AGE = 100;

if (!userName?.trim() || !userLastName?.trim() || !userAge?.trim()) {
    alert('You did not enter all necessary data, bye!');
}

else if (!Number.isInteger(+userAge) || (+userAge < 0) || (+userAge > IMPOSSIBLE_AGE)) {
    alert(`I don't believe that ${userAge} is your real age ;) `);
}

else {
    let greeting = `Hello, ${userName} ${userLastName}! `;
    if (+userAge < YOUNG_AGE) {
        greeting += "What's up?";
    }
    else if (+userAge < QUITE_OLD_AGE) {
        greeting += "Welcome to our site!";
    }
    else if (+userAge < VERY_OLD_AGE) {
        greeting += "You are amazing!";
    }
    else {
        greeting += "How are you today?";
    }
    alert(greeting);
}
