"use strict";
const helloWorld = (name) => {
    return `Hello from ${name}`;
};
console.log(helloWorld("Haj"));
document.getElementById("root").innerHTML = helloWorld("Haj");
//Self invoked function
((name) => {
    console.log(`Hello from ${name}`);
})('Typescript');
