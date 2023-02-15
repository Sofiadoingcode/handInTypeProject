"use strict";
class Person {
    constructor(firstname, age, gender) {
        this.firstname = firstname;
        this.age = age;
        this.gender = gender;
    }
}
function randomNumberGenerator(arraylength) {
    let randomNumber = Math.floor(Math.random() * arraylength);
    return randomNumber;
}
function populator() {
    let personArray = [];
    let nameArray = ["Haj", "Simon", "Louise", "Karla"];
    let genderArray = ["male", "female"];
    for (let index = 0; index < 10; index++) {
        let randomName = nameArray[randomNumberGenerator(nameArray.length)];
        let randomGender = genderArray[randomNumberGenerator(genderArray.length)];
        let randomAge = randomNumberGenerator(100);
        let newPerson = new Person(randomName, randomAge, randomGender);
        personArray.push(newPerson);
    }
    return personArray;
}
function createTable(personArray) {
    let endstring = "<table><thead><th>Name</th><th>Age</th><th>Gender</th></thead><tbody>";
    personArray.forEach(person => {
        endstring += "<tr>";
        endstring += `<td>${person.firstname}</td>`;
        endstring += `<td>${person.age}</td>`;
        endstring += `<td>${person.gender}</td>`;
        endstring += "</tr>";
    });
    endstring += "</tbody> </table>";
    return endstring;
}
document.getElementById("root").innerHTML = createTable(populator());
console.log(populator());
