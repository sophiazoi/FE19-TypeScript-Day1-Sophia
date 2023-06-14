"use strict";
// Task 1: Print full name in the browser
const fullName = {
    fName: "Sophia",
    lName: "Saliba",
};
document.write(`Full Name: ${fullName.fName} ${fullName.lName}<br>`);
// Task 2: Print first name 10 times using forEach loop
const nameArray = [fullName];
nameArray.forEach((name, index) => {
    document.write(`First Name (${index + 1}): ${name.fName}<br>`);
});
// Task 3: Function triggered after 5 seconds to print last name in the console
function printLastName() {
    const lastName = fullName.lName;
    for (let i = 0; i < 10; i++) {
        console.log(`Last Name (${i + 1}): ${lastName}`);
    }
}
setTimeout(printLastName, 5000);
