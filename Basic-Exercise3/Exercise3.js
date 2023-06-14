"use strict";
const names = ["Alice", "Bob", "Charlie", "David"];
// Task 1: Print only the index of the elements
for (let i = 0; i < names.length; i++) {
    console.log(`Index: ${i}`);
}
// Task 2: Print only the values
for (const name of names) {
    console.log(`Value: ${name}`);
}
// Task 3: Print both index and values
for (const [index, name] of names.entries()) {
    console.log(`Index: ${index}, Value: ${name}`);
}
