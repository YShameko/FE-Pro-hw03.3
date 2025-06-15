// use strict;
const userNumber = prompt('Please enter any integer 5-digits number');


if (!userNumber?.trim()) {
    alert('You did not enter necessary data, bye!');
}

else if (!Number.isInteger(+userNumber)) {
    alert(`${userNumber} is not an integer 5-digits number. Try again!`);
}

else {
    const preparedNumber = String(Math.abs(+userNumber));
    if (preparedNumber.length === 5) {
        let newNumberStr = preparedNumber;
        newNumberStr = `${newNumberStr[0]} ${newNumberStr[1]} ${newNumberStr[2]} ${newNumberStr[3]} ${newNumberStr[4]}`;
        alert(`Your number delimited with spaces is: ${newNumberStr}`);
    }
    else {
        alert(`${preparedNumber} is not an integer 5-digits number. Try again!`);
    }
}
