import { Args, Context } from "../../types";
export default {
    people: (_parent:never, _args:Args, {people}:Context) => people,
    person: (_parent:never, { id }:Args, {people}:Context) => { 
        people.find((person) => 
            person.id === id); },
        addresses: (_parent:never, _args:Args, {addresses}:Context) => addresses,
}