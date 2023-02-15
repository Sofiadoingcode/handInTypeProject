

class Person {
    
    firstname: string;
    age: number;
    gender: string;
    
    constructor(firstname: string, age: number, gender: string) {
        this.firstname = firstname;
        this.age = age;
        this.gender = gender;
    }


}


function randomNumberGenerator(arraylength:number): number {
    let randomNumber = Math.floor(Math.random()*arraylength)
    return randomNumber;
}

function populator(): Person[] {
    let personArray: Person[] = [];
    let nameArray: string[] = ["Haj", "Simon", "Louise", "Karla"]
    let genderArray: string[] = ["male", "female"]

    for (let index = 0; index < 10; index++) {
        
        let randomName: string = nameArray[randomNumberGenerator(nameArray.length)];
        let randomGender: string = genderArray[randomNumberGenerator(genderArray.length)];
        let randomAge: number = randomNumberGenerator(100);
        let newPerson: Person = new Person(randomName, randomAge, randomGender);

        personArray.push(newPerson);
        
    }

    return personArray;

}

function createTable (personArray:Person[]): string {
    let endstring: string = "<table><thead><th>Name</th><th>Age</th><th>Gender</th></thead><tbody>";

    personArray.forEach(person => {
        endstring += "<tr>"
        endstring += `<td>${person.firstname}</td>`
        endstring += `<td>${person.age}</td>`
        endstring += `<td>${person.gender}</td>`
        endstring += "</tr>"
    });

    endstring += "</tbody> </table>";

    return endstring;
}




document.getElementById("root")!.innerHTML = createTable(populator());



console.log(populator());




