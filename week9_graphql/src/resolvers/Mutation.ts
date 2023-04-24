import { Person, Context, Args, Address } from "../../types";
export default {
    createPerson: (_parent:Person, { input }:Args, {people}:Context) => {
      if('name' in input){ 
        const newPerson: Person = {
          id: String(people.length + 1),
          name: input.name,
          age: input.age,
          occupation: input.occupation,
          salary: input.salary,
          addressId: input.addressId,
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
    },

    createAddress: (_parent:Address, { input }:Args, {addresses}:Context) => {
        if('zipcode' in input){ 
          const newAddress: Address = {
            id: String(addresses.length + 1),
            zipcode: input.zipcode,
            street: input.street,
            number: input.number,
          };
          addresses.push(newAddress);
          return newAddress;
        } else {
          return null;
        }
        
      },

      addPersonToAddress: (_parent: never, { personId, addressId }:Args, {people}:Context) => {
        const personIndex = people.findIndex(person => person.id === personId);
        if (personIndex === -1) {
          return null; // person not found
        }
        const person = people[personIndex];

        person.addressId = addressId;
        const updatedPerson = person;
        people[personIndex] = updatedPerson;
        return updatedPerson;
      },
  }

  