type Person = {
    id: string;
    name: string;
    age: string;
    occupation: string;
    salary: string;
};

type Context = {
    people: Person[];
};
type Args = {
    id: string;
    input: Person;
};

export type {Person, Context, Args};