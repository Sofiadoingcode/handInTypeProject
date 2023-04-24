import { Person, Context, Args } from "../../types";
export default {
    createPerson: (_parent:Person, { input }:Args, {people}:Context) => {
      if('name' in input){ 
        const newPerson: Person = {
          id: String(people.length + 1),
          name: input.name,
          age: input.age,
          occupation: input.occupation,
          salary: input.salary,
        };
        console.log('input: ', input, newPerson);
        people.push(newPerson);
        return newPerson;
      } else {
        return null;
      }
      
    },
    
    deletePerson: (_parent:never, { id }:Args, {people}:Context) => {
      const index = people.findIndex(person => person.id === id);
      if (index === -1) {
        return false; // person not found
      }
      people.splice(index, 1);
      return true; // deletion successful
    },

    updatePerson: (_parent: never, { id, input }:Args, {people}:Context) => {
      const index = people.findIndex(person => person.id === id);
      if (index === -1) {
        return null; // person not found
      }
      const person = people[index];
      const updatedPerson = { ...person, ...input };
      people[index] = updatedPerson;
      return updatedPerson;
    }
  }