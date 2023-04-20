class Person {
    
    firstname: string;
    age: number;
    occupation: string;
    private_salary: number;
    
    constructor(firstname: string, age: number, occupation: string) {
        this.firstname = firstname;
        this.age = age;
        this.occupation = occupation;
        this.private_salary = 0;
    }


    introduce() {
        return "Hello, my name is" + this.firstname + "and I am a" + this.occupation + ". I earn " + this.private_salary +"$"
    }

    incrementAge() {
        return this.age + 1;
    }
    
    setSalary(salary: number) {
        this.private_salary = salary;
        return this.private_salary;
    }

    getSalary():number {
        return this.private_salary;
    }
}